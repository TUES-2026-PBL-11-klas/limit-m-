package com.screentracker.service;

import com.screentracker.dto.SessionRequest;
import com.screentracker.dto.DailyAggregateResponse;
import com.screentracker.model.Session;
import com.screentracker.repository.SessionRepository;
import org.springframework.stereotype.Service;

@Service
public class SessionService {
    private final SessionRepository sessionRepository;

    public SessionService(SessionRepository sessionRepository) {
        this.sessionRepository = sessionRepository;
    }

    public Session postSession(SessionRequest request) {
        Session session = new Session();
        session.setUser(request.getUser());
        session.setApp(request.getApp());
        session.setStart_time(request.getStart_time());
        session.setEnd_time(request.getEnd_time());

        return sessionRepository.save(session);
    }
}
