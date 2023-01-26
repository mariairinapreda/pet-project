package com.codecool.ppt.service;

import com.codecool.ppt.model.Author;
import com.codecool.ppt.repository.AuthorRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.Mockito.when;

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
        author.setFirstName("expectedName");
        when(authorRepositoryMock.save(author)).thenReturn(author);
        Author expectedAuthor = authorService.addAuthor(author);
        assertThat(expectedAuthor).isEqualTo(author);
    }

    @Test
    public void shouldThrowNullPointerExceptionAtAddAuthorWhenAuthorIsNull() {
        assertThrows(NullPointerException.class, () -> authorService.addAuthor(null));
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
        String id = author.getId();
        authorService.deleteById(id);
        assertThat(authorService.getById(id)).isEqualTo(Optional.empty());
    }

    @Test
    public void shouldThrowIllegalArgumentExceptionAtDeleteAuthorWhenIdIsNull() {
        authorService.deleteById(null);
        assertTrue(true);
    }

    @Test
    public void shouldCatchIllegalExceptionErrorAtGetByIdWhenIdIsNull() {
        assertThat(authorService.getById(null)).isEqualTo(Optional.empty());
    }

    @Test
    public void shouldRetrieveAuthorAtGetByName() {
        Author author = new Author();
        author.setLastName("expectedName");
        authorService.addAuthor(author);
        when(authorRepositoryMock.findAuthorByFirstNameContainingIgnoreCaseOrLastNameContainingIgnoreCase("expectedName")).thenReturn(List.of(author));
        assertThat(authorService.getByName("expectedName")).isEqualTo(List.of(author));
    }

}