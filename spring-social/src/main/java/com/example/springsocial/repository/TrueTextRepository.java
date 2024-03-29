package com.example.springsocial.repository;

import com.example.springsocial.model.TrueText;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TrueTextRepository extends JpaRepository<TrueText, Long> {
    //  represents repository that provides all CRUD (create, read, update, delete) database methods

}