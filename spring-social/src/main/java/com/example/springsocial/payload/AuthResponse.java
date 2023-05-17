package com.example.springsocial.payload;

// This is a Java class representing an authentication response object.
// It has two private instance variables: accessToken and tokenType, and a constructor to set the accessToken.
// It also has getter and setter methods for both instance variables.
// The tokenType instance variable is initialized to "Bearer" by default

public class AuthResponse {
    private String accessToken;
    private String tokenType = "Bearer";

    public AuthResponse(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }
}
