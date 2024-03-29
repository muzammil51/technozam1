package com.example.springsocial.repository;

import com.example.springsocial.model.McqsText;
import org.springframework.data.jpa.repository.JpaRepository;

public interface McqsTextRepository extends JpaRepository<McqsText, Long> {
    // represents repository that provides all CRUD (create, read, update, delete) database methods

}