package com.example.springsocial.repository;

import com.example.springsocial.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    //  represents repository that provides all CRUD (create, read, update, delete) database methods


    Optional<User> findByEmail(String email);

    Boolean existsByEmail(String email);

}
