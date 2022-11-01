package com.codecool.ppt.service;

import com.codecool.ppt.model.Author;
import com.codecool.ppt.model.Book;
import com.codecool.ppt.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    private BookRepository repository;

    @Autowired
    public BookService(BookRepository repository) {
        this.repository = repository;
    }

    public Book addBook(Book book) {
        if (book == null) throw new IllegalArgumentException();
        book.setId(543543L);
        return repository.save(book);
    }

    public List<Book> getAllBooks() {
        return repository.findAll();
    }

    public Optional<Book> getById(Long id) {
        try {
            return repository.findById(id);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }
        return Optional.empty();
    }

    public List<Book> getByAuthor(Author author) {
        try {
            return repository.findBooksByAuthor(author);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }
        return new ArrayList<>();
    }

    public List<Book> getByName(String name) {
        return repository.findBooksByNameContainingIgnoreCase(name);
    }

    public void deleteBook(Long id) {
        try {
            repository.deleteById(id);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }
    }

}
