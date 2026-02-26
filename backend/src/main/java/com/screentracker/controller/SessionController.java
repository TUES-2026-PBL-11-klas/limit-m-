package com.screentracker.controller;

import com.screentracker.dto.SessionRequest;
import com.screentracker.model.User;
import com.screentracker.model.Session;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.screentracker.service.SessionService;
import java.util.List;

@RestController
@RequestMapping("/session")
public class SessionController {
    private final SessionService sessionService;

    public SessionController(SessionService sessionService) { this.sessionService = sessionService; }

    @PostMapping("/post")
    public HttpStatus postSession(@Valid @RequestBody SessionRequest request) {
        List<Session> sessions = sessionService.postSession(request);
        
        return HttpStatus.CREATED;
    }
}
