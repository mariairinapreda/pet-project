package com.codecool.ppt.controller;

import com.codecool.ppt.model.Author;
import com.codecool.ppt.service.AuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("authors")
public class AuthorController {
    private final AuthorService authorService;

    @Autowired
    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }

    @GetMapping
    public List<Author> getAll() {
        return authorService.getAllAuthors();
    }

    @PostMapping("/add")
    public void add(@RequestBody Author author) {
        authorService.addAuthor(author);
    }


}
