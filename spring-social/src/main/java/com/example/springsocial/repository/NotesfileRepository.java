package com.example.springsocial.repository;

import com.example.springsocial.model.NotesFile;
import com.example.springsocial.model.NotesText;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NotesfileRepository extends JpaRepository<NotesFile, Long> {
}