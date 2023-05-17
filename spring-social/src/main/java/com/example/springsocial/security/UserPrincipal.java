package com.example.springsocial.security;

import com.example.springsocial.model.User;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.oauth2.core.user.OAuth2User;

import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Map;

// This is a class that implements both the OAuth2User and UserDetails interfaces,
// allowing it to be used as a principal object for user authentication and authorization.
// It contains fields for the user's ID, email, hashed password, authorities/roles,
// and additional attributes (such as name and picture).
// It has a constructor and two factory methods to create UserPrincipal objects from a User object.
// The class overrides methods from the UserDetails interface to indicate that the user account is always valid,
// and provides getters for the user's ID, email, authorities/roles, and additional attributes.
// It also has a setter for the additional attributes and a getName() method that returns the user's ID as a string.

public class UserPrincipal implements OAuth2User, UserDetails {
    private Long id; // User's ID
    private String email; // User's email
    private String password; // User's password (hashed)
    private Collection<? extends GrantedAuthority> authorities; // User's authorities/roles
    private Map<String, Object> attributes; // Additional attributes about the user (e.g. name, picture)

    // Constructor
    public UserPrincipal(Long id, String email, String password, Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.authorities = authorities;
    }

    // Factory method to create a UserPrincipal from a User object
    public static UserPrincipal create(User user) {
        List<GrantedAuthority> authorities = Collections.
                singletonList(new SimpleGrantedAuthority("ROLE_USER"));

        return new UserPrincipal(
                user.getId(),
                user.getEmail(),
                user.getPassword(),
                authorities
        );
    }

    // Factory method to create a UserPrincipal from a User object and additional attributes
    public static UserPrincipal create(User user, Map<String, Object> attributes) {
        UserPrincipal userPrincipal = UserPrincipal.create(user);
        userPrincipal.setAttributes(attributes);
        return userPrincipal;
    }

    // Getters for the private fields
    public Long getId() {
        return id;
    }

    public String getEmail() {
        return email;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return email;
    }

    // The following methods indicate that the user account is always valid (i.e. never expired, locked, or credentials expired)
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    // Getter for the user's authorities/roles
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    // Getter for the additional attributes about the user
    @Override
    public Map<String, Object> getAttributes() {
        return attributes;
    }

    // Setter for the additional attributes about the user
    public void setAttributes(Map<String, Object> attributes) {
        this.attributes = attributes;
    }

    // Getter for the user's name (in this case, just returns the user's ID as a string)
    @Override
    public String getName() {
        return String.valueOf(id);
    }
}
