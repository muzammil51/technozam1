package com.example.springsocial.repository;

import com.example.springsocial.model.MatchFile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MatchFileRepository extends JpaRepository<MatchFile, Long> {
    //  represents repository that provides all CRUD (create, read, update, delete) database methods

}