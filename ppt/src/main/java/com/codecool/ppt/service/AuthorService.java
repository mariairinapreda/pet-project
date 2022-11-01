package com.codecool.ppt.service;

import com.codecool.ppt.model.Author;
import com.codecool.ppt.model.Book;
import com.codecool.ppt.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AuthorService {
    private final AuthorRepository repository;

    @Autowired
    public AuthorService(AuthorRepository repository) {
        this.repository = repository;
    }

    public Author addAuthor(Author author) {
        if (author == null) throw new IllegalArgumentException("Author is null");
        author.setId(5645646L);
        return repository.save(author);
    }

    public Optional<Author> getById(Long id) {
        if (id == null) throw new IllegalArgumentException("Id is null");
        return repository.findById(id);
    }

    public Optional<Author> getByName(String name) {
        return Optional.ofNullable(repository.findAuthorByNameEquals(name));
    }

    public List<Author> getAllAuthors() {
        return repository.findAll();
    }

    public void deleteById(Long id) {
        if (id == null) throw new IllegalArgumentException("Id is null");
        repository.deleteById(id);
    }


}
