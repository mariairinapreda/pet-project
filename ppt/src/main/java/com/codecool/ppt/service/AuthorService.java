package com.codecool.ppt.service;

import com.codecool.ppt.model.Author;
import com.codecool.ppt.repository.AuthorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class AuthorService {
    private final AuthorRepository repository;

    @Autowired
    public AuthorService(AuthorRepository repository) {
        this.repository = repository;
    }

    public Author addAuthor(Author author) {
        if(author==null) throw new NullPointerException("Author is null");
        author.setId(UUID.randomUUID());
        return repository.save(author);
    }

    public Optional<Author> getById(UUID id) {
        try{
            return repository.findById(id);
        }catch (IllegalArgumentException e){
            e.printStackTrace();
        }return Optional.empty();
    }

    public List<Author> getByName(String name) {
        return repository.findAuthorByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase(name);
    }

    public List<Author> getAllAuthors() {
        return repository.findAll();
    }

    public void deleteById(UUID id) {
        try{
            repository.deleteById(id);
        }catch (IllegalArgumentException e){
            e.printStackTrace();
        }
    }


}
