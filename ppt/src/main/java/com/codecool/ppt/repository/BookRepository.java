package com.codecool.ppt.repository;

import com.codecool.ppt.model.Author;
import com.codecool.ppt.model.Book;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface BookRepository extends MongoRepository<Book, Long> {
    List<Book> findBooksByAuthor(Author author);

    List<Book> findBooksByNameContainingIgnoreCase(String title);
}
