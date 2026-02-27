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
    private LocalDateTime start_time;

    @Column(nullable = false)
    private LocalDateTime end_time;

    @Column(nullable = false)
    private String app;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;


    //Constructors
    public Session() {}

    public Session(LocalDateTime start_time, LocalDateTime end_time, String app, User user) {
        this.start_time = start_time;
        this.end_time = end_time;
        this.app = app;
        this.user = user;
    }

    //Getters & Setters
    public Long getId() { return id; }
    public LocalDateTime getStart_time() { return start_time; }
    public LocalDateTime getEnd_time() { return end_time; }
    public String getApp() { return app; }
    public User getUser() { return user; }

    public void setStart_time(LocalDateTime start_time) { this.start_time = start_time; }
    public void setEnd_time(LocalDateTime end_time) { this.end_time = end_time; }
    public void setApp(String app) { this.app = app; }
    public void setUser(User user) { this.user = user; }
    
}
