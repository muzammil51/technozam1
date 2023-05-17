package com.example.springsocial.repository;

import com.example.springsocial.model.McqsFile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface McqsFileRepository extends JpaRepository<McqsFile, Long> {
    //  represents repository that provides all CRUD (create, read, update, delete) database methods

}