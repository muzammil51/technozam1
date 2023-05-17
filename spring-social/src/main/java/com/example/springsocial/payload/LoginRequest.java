package com.example.springsocial.payload;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

// This is a Java class representing a login request object.
// It has two private instance variables: email and password.
// The email instance variable has been annotated with @NotBlank and @Email annotations to ensure that it is not null, empty, or whitespace-only, and that it is a valid email format.
// It also has getter and setter methods for both instance variables

public class LoginRequest {
    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String password;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
