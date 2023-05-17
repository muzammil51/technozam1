package com.example.springsocial.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

// used to represent resource not found errors

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ResourceNotFoundException extends RuntimeException {
    private String resourceName; // The name of the resource that was not found
    private String fieldName; // The name of the field used to search for the resource
    private Object fieldValue; // The value of the field used to search for the resource

    public ResourceNotFoundException(String resourceName, String fieldName, Object fieldValue) {
        // Constructs a new exception instance with the formatted error message and stores the field values
        super(String.format("%s not found with %s : '%s'", resourceName, fieldName, fieldValue));
        this.resourceName = resourceName;
        this.fieldName = fieldName;
        this.fieldValue = fieldValue;
    }

    public String getResourceName() {
        return resourceName; // Returns the name of the resource
    }

    public String getFieldName() {
        return fieldName; // Returns the name of the field used to search for the resource
    }

    public Object getFieldValue() {
        return fieldValue; // Returns the value of the field used to search for the resource
    }
}
