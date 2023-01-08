package com.codecool.ppt.repository;

import com.codecool.ppt.model.Author;
import com.codecool.ppt.model.Book;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;
@Repository
public interface BookRepository extends MongoRepository<Book, String> {
    List<Book> findBooksByAuthor(Author author);
    Book findBookByNameEquals(String name);
    boolean existsBookByNameEquals(String name);

    List<Book> findBooksByNameContainingIgnoreCase(String title);

}
