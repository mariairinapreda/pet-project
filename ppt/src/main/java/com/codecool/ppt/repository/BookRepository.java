package com.codecool.ppt.repository;

import com.codecool.ppt.model.Author;
import com.codecool.ppt.model.Book;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface BookRepository extends MongoRepository<Book, String> {
    @Query("{author: ?0, cost: ?1}")
    List<Book> findBooksBySearch(String search);
    List<Book> findBooksByAuthor(Author author);
    Book findBookByNameEquals(String name);
    boolean existsBookByNameEquals(String name);

    List<Book> findBooksByNameContainingIgnoreCase(String title);

}
