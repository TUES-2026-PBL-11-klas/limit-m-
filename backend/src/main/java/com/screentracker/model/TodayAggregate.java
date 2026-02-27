package com.screentracker.model;

import java.time.Duration;

public class TodayAggregate {
    //Attributes
    private User user;
    private String app;
    private Duration time_spent;

    //Constructor
    public TodayAggregate(User user, String app, Duration time_spent) {
        this.user = user;
        this.app = app;
        this.time_spent = time_spent;
    }

    //Getters
    public User getUser() { return user; }
    public String getApp() { return app; }
    public Duration getTime_spent() { return time_spent; }

}
