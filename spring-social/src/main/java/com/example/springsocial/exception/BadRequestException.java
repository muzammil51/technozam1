package com.example.springsocial.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

//used to represent bad request errors

@ResponseStatus(HttpStatus.BAD_REQUEST) // Sets the HTTP response status code to 400 Bad Request
public class BadRequestException extends RuntimeException {
    public BadRequestException(String message) {
        super(message); // Calls the constructor of the parent RuntimeException class with the specified error message
    }

    public BadRequestException(String message, Throwable cause) {
        super(message, cause); // Calls the constructor of the parent RuntimeException class with the specified error message and cause
    }
}
