package com.screentracker.service;

import com.screentracker.dto.SessionRequest;
import com.screentracker.dto.TodayAggregateResponse;
import com.screentracker.model.Session;
import com.screentracker.repository.SessionRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class SessionService {
    private final SessionRepository sessionRepository;

    public SessionService(SessionRepository sessionRepository) {
        this.sessionRepository = sessionRepository;
    }

    @Transactional
    public List<Session> postSession(SessionRequest request) {
        ArrayList<Session> sessions = new ArrayList<>();
        LocalDateTime start = request.getStart_time();
        LocalDateTime end = request.getEnd_time();

        LocalDate startDate = start.toLocalDate();
        LocalDate endDate = end.toLocalDate();

        //Same day - save entry
        if(startDate.equals(endDate)) {
            Session session = new Session();
            session.setUser_id(request.getUser_id());
            session.setApp(request.getApp());
            session.setStart_time(request.getStart_time());
            session.setEnd_time(request.getEnd_time());
            sessionRepository.save(session);
            sessions.add(session);

        }

        LocalDate currentDate = startDate;

        while (!currentDate.isAfter(endDate)) { // mimics currentDate <= endDate

            Session part = new Session(request.getStart_time(), request.getEnd_time(), request.getApp(), request.getUser_id());

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



}

