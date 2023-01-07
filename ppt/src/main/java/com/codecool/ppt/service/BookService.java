package com.codecool.ppt.service;

import com.codecool.ppt.model.Author;
import com.codecool.ppt.model.Book;
import com.codecool.ppt.model.BookTemplate;
import com.codecool.ppt.repository.BookRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class BookService {
    private final BookRepository repository;


    public Book addBook(Book book) {
        if (book == null) throw new IllegalArgumentException();
        if(!repository.existsBookByNameEquals(book.getName())) return repository.save(book);
        return null;
    }

    public List<Book> getAllBooks() {
        return repository.findAll();
    }

    public Optional<Book> getById(String id) {
        try {
            return repository.findById(id);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }
        return Optional.empty();
    }

    public Book createBookByBookTemplate(BookTemplate bookTemplate, Author author) throws IOException {
        Book book = new Book();
        book.setName(bookTemplate.getName());
        book.setAuthor(author);
        book.setDescription(bookTemplate.getDescription());
        book.setObjectUrl(bookTemplate.getObjectUrl());
        book.setImageUrl(bookTemplate.getImageUrl());
        return book;
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

    public void deleteBook(String id) {
        try {
            repository.deleteById(id);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }
    }

}
