package com.codecool.ppt.controller;

import com.codecool.ppt.model.Author;
import com.codecool.ppt.model.Book;
import com.codecool.ppt.model.BookTemplate;
import com.codecool.ppt.service.AuthorService;
import com.codecool.ppt.service.BookService;
import org.apache.tika.exception.TikaException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.xml.sax.SAXException;

import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@CrossOrigin(originPatterns = "http://localhost:3000")
@RequestMapping("/api/books")
public class BookController {
    private final BookService bookService;
    private final AuthorService authorService;

    @Autowired
    public BookController(BookService bookService, AuthorService authorService) {
        this.bookService = bookService;
        this.authorService = authorService;
    }

    @GetMapping
    public List<Book> getAll() {
        return bookService.getAllBooks();
    }

    @PostMapping
    public void add(@RequestBody BookTemplate bookTemplate) throws TikaException, IOException, SAXException {
        Author author;
        if (authorService.findIfAuthorAlreadySaved(bookTemplate.getAuthor(), bookTemplate.getAuthor())) {
            author = authorService.getAuthorWithName(bookTemplate.getAuthor(), bookTemplate.getAuthor());
        } else {
            author = new Author();
            author.setFirstName(bookTemplate.getAuthor());
            author.setLastName(bookTemplate.getAuthor());
            authorService.addAuthor(author);
        }
        Book book = bookService.createBookByBookTemplate(bookTemplate, author);
        System.out.println(book.getName());
        bookService.addBook(book);
    }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable("id") UUID id) {
        return bookService.getById(id).get();
    }


}
