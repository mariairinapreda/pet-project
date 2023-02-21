package com.codecool.ppt.repository;

import com.codecool.ppt.model.Author;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AuthorRepository extends MongoRepository<Author, String> {
    List<Author> findAuthorByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(String name);

    Boolean existsAuthorByFirstNameContainingIgnoreCaseAndLastNameContainingIgnoreCase(String firstName, String lastname);

    Author findAuthorByFirstNameContainingIgnoreCaseAndLastNameContainingIgnoreCase(String firstName, String lastName);

}
