package com.codecool.ppt.service;

import com.codecool.ppt.model.Author;
import com.codecool.ppt.repository.AuthorRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@AllArgsConstructor
public class AuthorService {
    private final AuthorRepository repository;


    public Author addAuthor(Author author) {
        if (author == null) throw new NullPointerException("Author is null");
        if (!findIfAuthorAlreadySaved(author.getFirstName(), author.getLastName())) {
            return repository.save(author);
        }
        return null;
    }

    public Author getAuthorWithName(String firstNmae, String lastName) {
        return repository.findAuthorByFirstNameContainingIgnoreCaseAndLastNameContainingIgnoreCase(firstNmae, lastName);
    }

    public Boolean findIfAuthorAlreadySaved(String firstName, String lastName) {
        return repository.existsAuthorByFirstNameContainingIgnoreCaseAndLastNameContainingIgnoreCase(firstName, lastName);
    }

    public Optional<Author> getById(String id) {
        try {
            return repository.findById(id);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }
        return Optional.empty();
    }

    public List<Author> getByName(String name) {
        return repository.findAuthorByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(name);
    }

    public List<Author> getAllAuthors() {
        return repository.findAll();
    }

    public void deleteById(String id) {
        try {
            repository.deleteById(id);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }
    }


}
