package com.screentracker.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Past;
import jakarta.validation.constraints.PastOrPresent;
import java.time.LocalDateTime;
import com.screentracker.model.User;

public class SessionRequest {
    //Attributes
    @NotBlank(message = "Session must be connected with user")
    private User user;

    @NotBlank(message = "Session must contain an app")
    private String app;

    @NotBlank(message = "Session must contain a start_time")
    @Past(message = "Session start_time must be in the past")
    private LocalDateTime start_time;

    @NotBlank(message = "Session must contain an end_time")
    @PastOrPresent(message = "Session end_time must be in the present or past")
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
