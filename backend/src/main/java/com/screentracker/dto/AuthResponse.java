package com.screentracker.dto;

public class AuthResponse {
    //Attributes
    private Long id;
    private String name;
    private String email;
    private String message;



    //Constructor
    public AuthResponse(Long id, String name, String email, String message) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.message = message;
    }

    //Getters
    public Long getId() { return id; }
    public String getEmail() { return email; }
    public String getName() { return name; }
    public String getMessage() { return message; }

}
