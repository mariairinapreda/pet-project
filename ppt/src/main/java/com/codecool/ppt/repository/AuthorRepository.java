package com.codecool.ppt.repository;

import com.codecool.ppt.model.Author;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.UUID;

public interface AuthorRepository extends MongoRepository<Author, UUID> {
    List<Author> findAuthorByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(String name);

    Boolean existsAuthorByFirstNameContainingIgnoreCaseAndLastNameContainingIgnoreCase(String firstName, String lastname);

    Author findAuthorByFirstNameContainingIgnoreCaseAndLastNameContainingIgnoreCase(String firstName, String lastName);

}
