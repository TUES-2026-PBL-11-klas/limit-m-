package com.screentracker.dto;

import java.time.Duration;

public class TodayAggregateResponse {
    //Attributes
    private String app;
    private Duration time_spent;

    //Constructor
    public TodayAggregateResponse(String app, Duration time_spent) {
        this.app = app;
        this.time_spent = time_spent;
    }

    //Getters
    public String getApp() { return app; }
    public Duration getTime_spent() { return time_spent; }
}
