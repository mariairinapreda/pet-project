package com.codecool.ppt.repository;

import com.codecool.ppt.model.Author;
import com.codecool.ppt.model.Book;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends MongoRepository<Book, String> {
    @Query("{'$or':[{'name': {$regex:  ?0, $options: 'i'}}, {'author.$firstName' :{$regex :?0, $options :'i'}}, {'author.lastName':{$regex : ?0, $options :'i'}}]}")
    List<Book> findBooksBySearch(String search);

    List<Book> findBooksByAuthor(Author author);

    Book findBookByNameEquals(String name);

    boolean existsBookByNameEquals(String name);

    List<Book> findBooksByNameContainingIgnoreCase(String title);

}
