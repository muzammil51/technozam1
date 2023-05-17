package com.example.springsocial.payload;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

// This is a Java class representing a sign-up request object.
// It has three private instance variables: name, email, and password.
// The name, email, and password instance variables have been annotated with @NotBlank to ensure that they are not null, empty, or whitespace-only.
// The email instance variable has also been annotated with @Email to ensure that it is a valid email format.
// It also has getter and setter methods for all three instance variables.

public class SignUpRequest {
    @NotBlank
    private String name;

    @NotBlank
    @Email
    private String email;

    @NotBlank
    private String password;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

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
