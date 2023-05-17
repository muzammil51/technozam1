package com.example.springsocial.controller;

import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.User;
import com.example.springsocial.repository.UserRepository;
import com.example.springsocial.security.CurrentUser;
import com.example.springsocial.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

// contains two HTTP GET methods for retrieving user data.
// getCurrentUser method retrieves the currently logged-in user's data
// getAllUser method retrieves a list of all users in the database

@RestController
public class UserController {

    @Autowired // inject UserRepository dependency
    private UserRepository userRepository;

    @GetMapping("/user/me")// map HTTP GET request to /user/me endpoint
    @PreAuthorize("hasRole('USER')") // require 'USER' role to access this endpoint
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        // retrieve current user based on UserPrincipal object (provided by Spring Security)
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
                    // throw exception if user not found in database

    }

    @GetMapping("/user/all")    // map HTTP GET request to /user/all endpoint
//    @PreAuthorize("hasRole('ADMIN')")   // require 'ADMIN' role to access this endpoint
    public List<User> getAllUser() {
        // retrieve all users from database
        return userRepository.findAll(); }
    }

