package com.example.springsocial.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

// This is a class representing a filter to authenticate requests using a token-based authentication system.

public class TokenAuthenticationFilter extends OncePerRequestFilter {

    @Autowired
    private TokenProvider tokenProvider; // Autowire the TokenProvider class to use it in the authentication process

    @Autowired
    private CustomUserDetailsService customUserDetailsService; // Autowire the CustomUserDetailsService class to use it in the authentication process

    private static final Logger logger = LoggerFactory.getLogger(TokenAuthenticationFilter.class); // Create a logger for error handling purposes

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
        try {
            String jwt = getJwtFromRequest(request); // Extract the JWT token from the request using the getJwtFromRequest() method

            if (StringUtils.hasText(jwt) && tokenProvider.validateToken(jwt)) { // Check if the token is not null and valid
                Long userId = tokenProvider.getUserIdFromToken(jwt); // Extract the user ID from the token using the TokenProvider class

                UserDetails userDetails = customUserDetailsService.loadUserById(userId); // Retrieve the user details using the user ID and the CustomUserDetailsService class
                UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities()); // Create a new authentication token using the retrieved user details
                authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request)); // Set the authentication details

                SecurityContextHolder.getContext().setAuthentication(authentication); // Add the authentication token to the SecurityContextHolder
            }
        } catch (Exception ex) {
            logger.error("Could not set user authentication in security context", ex); // Log an error if an exception occurs during the authentication process
        }

        filterChain.doFilter(request, response); // Continue the filter chain
    }

    private String getJwtFromRequest(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization"); // Extract the Authorization header from the request
        if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) { // Check if the Authorization header is not null and starts with "Bearer "
            return bearerToken.substring(7, bearerToken.length()); // Extract the JWT token from the Authorization header and return it
        }
        return null; // Return null if the Authorization header is null or does not start with "Bearer "
    }
}
