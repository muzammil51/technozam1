package com.example.springsocial.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

//used to indicate that a requested resource was not found.

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class ResourceNotFoundExceptionNew extends RuntimeException{

    public ResourceNotFoundExceptionNew(String message){
        super(message);
    }
}
