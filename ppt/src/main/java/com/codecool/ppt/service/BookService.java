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
private final AuthorService authorService;

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

    public void insertBook(BookTemplate bookTemplate){
        Author author;
        if (authorService.findIfAuthorAlreadySaved(bookTemplate.getAuthor(), bookTemplate.getAuthor())) {
            author = authorService.getAuthorWithName(bookTemplate.getAuthor(), bookTemplate.getAuthor());
        } else {
            author = new Author();
            author.setFirstName(bookTemplate.getAuthor());
            author.setLastName(bookTemplate.getAuthor());
            authorService.addAuthor(author);
        }


        try {
            Book  book = createBookByBookTemplate(bookTemplate, author);
            addBook(book);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }
    public int getNumberOfPages(String name){
        return repository.findBookByNameEquals(name).getNumberOfPages();
    }

    public Book createBookByBookTemplate(BookTemplate bookTemplate, Author author) throws IOException {
        Book book = new Book();
        book.setName(bookTemplate.getName());
        book.setAuthor(author);
        book.setDescription(bookTemplate.getDescription());
        book.setNumberOfPages(bookTemplate.getNumberOfPages());
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
    public List<Book> getBooksFromSearch(String search){
        String custom= "%"+search+"%";
        return repository.findBooksBySearch(custom);
    }

}
