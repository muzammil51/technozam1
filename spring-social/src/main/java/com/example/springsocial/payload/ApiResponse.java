package com.example.springsocial.payload;
//  represents a response message from an API endpoint.
//  It has two properties:
//  success: a boolean value indicating whether the request was successful,
//  message : a string message that provides more information about the request.

public class ApiResponse {
    private boolean success;
    private String message;

    public ApiResponse(boolean success, String message) {
        this.success = success;
        this.message = message;
    }

    public boolean isSuccess() {
        return success;
    }

    public void setSuccess(boolean success) {
        this.success = success;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
}
