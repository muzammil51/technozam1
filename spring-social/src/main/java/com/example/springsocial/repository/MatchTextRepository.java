package com.example.springsocial.repository;

import com.example.springsocial.model.MatchText;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MatchTextRepository extends JpaRepository<MatchText, Long> {
    //  represents repository that provides all CRUD (create, read, update, delete) database methods

}