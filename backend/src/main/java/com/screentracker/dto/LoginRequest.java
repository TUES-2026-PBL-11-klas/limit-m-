package com.screentracker.dto;

public class LoginRequest {
    //Attributes
    private String email;
    private String password;

    //Constructor
    LoginRequest() {}

    //Getters & Setters
    private String getEmail() { return email; }
    private String getPassword() { return password; }

    private void setEmail(String email) { this.email = email; }
    private void setPassword(String password) { this.password = password; }
}
