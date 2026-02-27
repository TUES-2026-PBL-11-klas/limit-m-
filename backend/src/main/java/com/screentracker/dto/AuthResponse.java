package com.screentracker.dto;

public class AuthResponse {
    //Attributes
    private Long user_id;
    private String name;
    private String email;
    private String message;



    //Constructor
    public AuthResponse(Long user_id, String name, String email, String message) {
        this.user_id = user_id;
        this.name = name;
        this.email = email;
        this.message = message;
    }

    //Getters
    public Long getUser_id() { return user_id; }
    public String getEmail() { return email; }
    public String getName() { return name; }
    public String getMessage() { return message; }

}
