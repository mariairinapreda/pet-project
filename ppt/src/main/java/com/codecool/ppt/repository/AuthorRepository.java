package com.codecool.ppt.repository;

import com.codecool.ppt.model.Author;
import com.codecool.ppt.model.Book;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AuthorRepository extends MongoRepository<Author, Long> {
    Author findAuthorByNameEquals(String name);

}
