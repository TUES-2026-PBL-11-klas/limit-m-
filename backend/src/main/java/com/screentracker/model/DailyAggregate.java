package com.screentracker.model;

import jakarta.persistence.*;
import java.time.LocalDate;
import java.time.Duration;

@Entity
@Table(name = "daily_aggregates")
public class DailyAggregate {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false)
    private String app;

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false)
    private Duration time_spent;

    public DailyAggregate() {}

    public DailyAggregate(User user, String app, LocalDate date, Duration time_spent) {
        this.user = user;
        this.app = app;
        this.date = date;
        this.time_spent = time_spent;
    }

    // Getters
    public Long getId() { return id; }
    public User getUser() { return user; }
    public String getApp() { return app; }
    public LocalDate getDate() { return date; }
    public Duration getTime_spent() { return time_spent; }
}

