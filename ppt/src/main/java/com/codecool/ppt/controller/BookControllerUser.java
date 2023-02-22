package com.codecool.ppt.controller;

import com.codecool.ppt.model.Book;
import com.codecool.ppt.service.BookService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/books")
@AllArgsConstructor
public class BookControllerUser {
    private final BookService bookService;

    @GetMapping
    public List<Book> getAll() {
        return bookService.getAllBooks();
    }

    @GetMapping("/{name}")
    public int getNumberOfPagesForBook(@PathVariable("name") String name) {
        return bookService.getNumberOfPages(name);
    }


    @GetMapping("/filter/{search}")
    public List<Book> getBySearch(@PathVariable("search") String search) {
        return bookService.getBooksFromSearch(search);
    }

}
