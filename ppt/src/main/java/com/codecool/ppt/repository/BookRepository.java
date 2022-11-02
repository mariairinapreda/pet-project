package com.codecool.ppt.repository;

import com.codecool.ppt.model.Author;
import com.codecool.ppt.model.Book;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;
import java.util.UUID;

public interface BookRepository extends MongoRepository<Book, UUID> {
    List<Book> findBooksByAuthor(Author author);

    List<Book> findBooksByNameContainingIgnoreCase(String title);
}
