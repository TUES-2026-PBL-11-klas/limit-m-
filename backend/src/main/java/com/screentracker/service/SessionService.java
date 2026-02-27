package com.screentracker.service;

import com.screentracker.dto.SessionRequest;
import com.screentracker.dto.TodayAggregateResponse;
import com.screentracker.model.Session;
import com.screentracker.model.TodayAggregate;
import com.screentracker.model.User;
import com.screentracker.repository.SessionRepository;
import com.screentracker.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.Duration;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class SessionService {
    private final SessionRepository sessionRepository;
    private final UserRepository userRepository;

    public SessionService(SessionRepository sessionRepository, UserRepository userRepository) {
        this.sessionRepository = sessionRepository;
        this.userRepository = userRepository;
    }

    @Transactional
    public List<Session> postSession(SessionRequest request) {
        ArrayList<Session> sessions = new ArrayList<>();
        LocalDateTime start = request.getStart_time();
        LocalDateTime end = request.getEnd_time();

        LocalDate startDate = start.toLocalDate();
        LocalDate endDate = end.toLocalDate();

        User user = userRepository.findById(request.getUser_id())
                .orElseThrow(() -> new RuntimeException("User not found"));

        //Same day - save entry
        if(startDate.equals(endDate)) {
            Session session = new Session();

            session.setUser(user);
            session.setApp(request.getApp());
            session.setStart_time(request.getStart_time());
            session.setEnd_time(request.getEnd_time());
            sessionRepository.save(session);
            sessions.add(session);

        }

        LocalDate currentDate = startDate;

        while (!currentDate.isAfter(endDate)) { // mimics currentDate <= endDate
            Session part = new Session(request.getStart_time(), request.getEnd_time(), request.getApp(), user);

            if (currentDate.equals(startDate)) {
                // First day
                part.setStart_time(start);
                part.setEnd_time(currentDate.atTime(23, 59, 59));

            } else if (currentDate.equals(endDate)) {
                // Last day
                part.setStart_time(currentDate.atStartOfDay());
                part.setEnd_time(end);

            } else {
                // Full middle day
                part.setStart_time(currentDate.atStartOfDay());
                part.setEnd_time(currentDate.atTime(23, 59, 59));
            }

            sessionRepository.save(part);
            sessions.add(part);
            currentDate = currentDate.plusDays(1);
        }
        return sessions;
    }

    public List<TodayAggregate> aggregateResponses(Long user_id) {
        //Now
        LocalDateTime start_of_today = LocalDate.now().atStartOfDay();
        User user = userRepository.findById(user_id)
                .orElseThrow(() -> new RuntimeException("User not found"));
        //Filter all Session Entries by user_id and time after
        List<Session> filtered_sessions =
                sessionRepository.findByUserAndStart_timeAfter(user, start_of_today);

        //Maps every app as key and a List of Session entries
        Map<String, List<Session>> sessions_by_app = filtered_sessions.stream().collect(Collectors.groupingBy(Session::getApp));

        //Adds up all the Entries by app into a single Aggregate response by app
        List<TodayAggregate> result = new ArrayList<>();
        for (Map.Entry<String, List<Session>> entry : sessions_by_app.entrySet()) {
            String app = entry.getKey();
            List<Session> sessions = entry.getValue();
            Duration totalDuration = Duration.ZERO;
            for (Session session : sessions) {
                if (session.getStart_time() != null && session.getEnd_time() != null) {
                    Duration sessionDuration =
                            Duration.between(
                                    session.getStart_time(),
                                    session.getEnd_time()
                            );
                    totalDuration = totalDuration.plus(sessionDuration);
                }
            }

            TodayAggregate aggregate =
                    new TodayAggregate(user, app, totalDuration);

            result.add(aggregate);
        }

        return result;
    }


}

