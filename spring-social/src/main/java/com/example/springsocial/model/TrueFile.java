package com.example.springsocial.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "truefiles")

public class TrueFile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "subject")
    private String subject;

    @Column(name = "input")
    private String input;

    @Column(name = "output")
    private String output;

    @Column(name = "timedate")
    private String timedate;

}
