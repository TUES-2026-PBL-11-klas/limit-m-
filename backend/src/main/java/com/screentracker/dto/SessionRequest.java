package com.screentracker.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.PastOrPresent;
import java.time.LocalDateTime;
import com.screentracker.model.User;

public class SessionRequest {
    //Attributes

    @NotBlank
    private User user;

    @NotBlank
    private String app;

    @NotBlank
    @Past
    private LocalDateTime start_time;

    @NotBlank
    @PastOrPresent
    private LocalDateTime end_time;

    //Constructor
    public SessionRequest() {}

    //Getters & Setters
    public User getUser() { return user; }
    public String getApp() { return app; }
    public LocalDateTime getStart_time() { return start_time; }
    public LocalDateTime getEnd_time() { return end_time; }

    public void setUser(User user) { this.user = user; }
    public void setApp(String app) { this.app = app; }
    public void setStart_time(LocalDateTime start_time) { this.start_time = start_time; }
    public void setEnd_time(LocalDateTime end_time) { this.end_time = end_time; }




}
