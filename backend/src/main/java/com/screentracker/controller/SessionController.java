package com.screentracker.controller;

import com.screentracker.dto.SessionRequest;
import com.screentracker.dto.TodayAggregateResponse;
import com.screentracker.model.TodayAggregate;
import com.screentracker.model.User;
import com.screentracker.model.Session;
import com.screentracker.repository.SessionRepository;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.screentracker.service.SessionService;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/session")
public class SessionController {
    private final SessionService sessionService;

    public SessionController(SessionService sessionService) { this.sessionService = sessionService; }

    @PostMapping("/post-session")
    public HttpStatus postSession(@Valid @RequestBody SessionRequest request) {
        List<Session> sessions = sessionService.postSession(request);
        
        return HttpStatus.CREATED;
    }

    @GetMapping("/today-aggregation")
    public ResponseEntity<List<TodayAggregateResponse>> todayAggregation(@RequestParam Long user_id) {
        List<TodayAggregate> aggregates = sessionService.aggregateResponses(user_id);

        List<TodayAggregateResponse> responses = new ArrayList<>();

        for (TodayAggregate aggregate : aggregates) {

            TodayAggregateResponse response =
                    new TodayAggregateResponse(
                            aggregate.getUser().getId(),
                            aggregate.getApp(),
                            aggregate.getTime_spent()
                    );

            responses.add(response);
        }

        return ResponseEntity.ok(responses);
    }
}
