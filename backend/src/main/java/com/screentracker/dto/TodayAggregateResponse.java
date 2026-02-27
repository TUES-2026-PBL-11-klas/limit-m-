package com.screentracker.dto;

import java.time.Duration;

public class TodayAggregateResponse {
    //Attributes
    private Long user_id;
    private String app;
    private Duration time_spent;

    //Constructor
    public TodayAggregateResponse(Long user_id, String app, Duration time_spent) {
        this.user_id = user_id;
        this.app = app;
        this.time_spent = time_spent;
    }

    //Getters
    public Long getUser_id() { return user_id; }
    public String getApp() { return app; }
    public Duration getTime_spent() { return time_spent; }
}
