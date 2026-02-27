package com.screentracker.model;

import jakarta.persistence.*;
import java.util.List;
import java.util.ArrayList;
import java.time.LocalDateTime;

@Entity
@Table(name="sessions")
public class Session {
    //Attributes
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private LocalDateTime startTime;

    @Column(nullable = false)
    private LocalDateTime endTime;

    @Column(nullable = false)
    private String app;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;


    //Constructors
    public Session() {}

    public Session(LocalDateTime startTime, LocalDateTime endTime, String app, User user) {
        this.startTime = startTime;
        this.endTime = endTime;
        this.app = app;
        this.user = user;
    }

    //Getters & Setters
    public Long getId() { return id; }
    public LocalDateTime getStart_time() { return startTime; }
    public LocalDateTime getEnd_time() { return endTime; }
    public String getApp() { return app; }
    public User getUser() { return user; }

    public void setStart_time(LocalDateTime startTime) { this.startTime = startTime; }
    public void setEnd_time(LocalDateTime endTime) { this.endTime = endTime; }
    public void setApp(String app) { this.app = app; }
    public void setUser(User user) { this.user = user; }
    
}
