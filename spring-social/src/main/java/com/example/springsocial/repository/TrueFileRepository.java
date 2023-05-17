package com.example.springsocial.repository;

import com.example.springsocial.model.TrueFile;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrueFileRepository extends JpaRepository<TrueFile, Long> {
    //  represents repository that provides all CRUD (create, read, update, delete) database methods

}