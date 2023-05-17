package com.example.springsocial.exception;

import org.springframework.security.core.AuthenticationException;

//used to represent authentication errors

public class OAuth2AuthenticationProcessingException extends AuthenticationException {
    public OAuth2AuthenticationProcessingException(String msg, Throwable t) {
        super(msg, t); // Calls the constructor of the parent AuthenticationException class with the specified error message and cause
    }

    public OAuth2AuthenticationProcessingException(String msg) {
        super(msg); // Calls the constructor of the parent AuthenticationException class with the specified error message
    }
}
