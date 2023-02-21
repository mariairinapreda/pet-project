package com.codecool.ppt.controller;

import com.codecool.ppt.model.Author;
import com.codecool.ppt.service.AuthorService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/admin/authors")
@AllArgsConstructor
public class AuthorController {
    private final AuthorService authorService;

    @GetMapping
    public List<Author> getAll() {
        return authorService.getAllAuthors();
    }

    @PostMapping("/add")
    public void add(@RequestBody Author author) {
        authorService.addAuthor(author);
    }

}
