package com.example.springsocial.repository;

import com.example.springsocial.model.ShortText;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ShortTextRepository extends JpaRepository<ShortText, Long> {
    //  represents repository that provides all CRUD (create, read, update, delete) database methods

}
