package com.codecool.ppt.service;

import com.codecool.ppt.model.Author;
import com.codecool.ppt.repository.AuthorRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;


import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

import static org.junit.jupiter.api.Assertions.*;

public class AuthorServiceTest {
    @Mock
    AuthorRepository authorRepositoryMock = Mockito.mock(AuthorRepository.class);

    @InjectMocks
    AuthorService authorService = new AuthorService(authorRepositoryMock);

    @Test
    public void shouldReturnAuthorWithIdAtGetByIdWithGivenId() {
        Author author = new Author();
        authorService.addAuthor(author);
        when(authorRepositoryMock.findById(author.getId())).thenReturn(Optional.of(author));
        assertThat(authorService.getById(author.getId())).isEqualTo(Optional.of(author));
    }

    @Test
    public void shouldAddAuthorWhenAuthorIsNotNull() {
        Author author = new Author();
        when(authorRepositoryMock.save(author)).thenReturn(author);
        assertThat(authorService.addAuthor(author)).isEqualTo(author);
    }

    @Test
    public void shouldThrowIllegalArgumentExceptionAtAddAuthorWhenAuthorIsNull() {
        assertThrows(IllegalArgumentException.class, () -> authorService.addAuthor(null));
    }

    @Test
    public void shouldRetrieveAllAuthors() {
        Author author = new Author();
        Author author1 = new Author();
        authorService.addAuthor(author);
        authorService.addAuthor(author1);
        when(authorRepositoryMock.findAll()).thenReturn(List.of(author, author1));
        assertThat(authorService.getAllAuthors().size()).isEqualTo(2);
    }

    @Test
    public void shouldDeleteAuthorWhenIdIsNotNull() {
        Author author = new Author();
        authorService.addAuthor(author);
        Long id = author.getId();
        assertThat(authorService.getById(id)).isEqualTo(Optional.empty());
    }

    @Test
    public void shouldThrowIllegalArgumentExceptionAtDeleteAuthorWhenIdIsNull() {
        assertThrows(IllegalArgumentException.class, () -> authorService.deleteById(null));
    }

    @Test
    public void shouldThrowIllegalExceptionErrorAtGetByIdWhenIdIsNull() {
        assertThrows(IllegalArgumentException.class, () -> authorService.getById(null));
    }

    @Test
    public void shouldRetrieveAuthorAtGetByName() {
        Author author = new Author();
        author.setName("expectedName");
        when(authorRepositoryMock.findAuthorByNameEquals("expectedName")).thenReturn(author);
        assertThat(authorService.getByName("expectedName")).isEqualTo(Optional.of(author));
    }

}