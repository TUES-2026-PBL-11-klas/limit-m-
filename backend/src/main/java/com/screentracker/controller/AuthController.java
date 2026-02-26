package com.screentracker.controller;

import com.screentracker.dto.AuthResponse;
import com.screentracker.dto.RegisterRequest;
import com.screentracker.model.User;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.screentracker.service.AuthService;
@RestController
@RequestMapping("/user")
public class AuthController {

    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@Valid @RequestBody RegisterRequest request) {
        User user = authService.register(request);

        AuthResponse response = new AuthResponse(
                user.getId(),
                user.getName(),
                user.getEmail(),
                "Successfully registered user"
        );

        return ResponseEntity.status(HttpStatus.CREATED).body(response);
    }
}
