package com.codecool.ppt.service;

import com.codecool.ppt.model.Author;
import com.codecool.ppt.model.Book;
import com.codecool.ppt.repository.BookRepository;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;


import static org.assertj.core.api.AssertionsForClassTypes.assertThat;


public class BookServiceTest {
    @Mock
    BookRepository bookRepositoryMock = Mockito.mock(BookRepository.class);

    @InjectMocks
    BookService bookService = new BookService(bookRepositoryMock);


    @Test
    public void shouldSaveBookInDatabase() {
        Book book = new Book();
        book.setName("book_test1");
        when(bookRepositoryMock.save(book)).thenReturn(book);
        Book savedBook = bookService.addBook(book);
        assertThat(savedBook).usingRecursiveComparison().ignoringFields("id").isEqualTo(book);
    }

    @Test
    public void shouldRetrieveAllBooks() {
        Book book = new Book();
        Book book1 = new Book();
        bookService.addBook(book);
        bookService.addBook(book1);
        when(bookRepositoryMock.findAll()).thenReturn(List.of(book, book1));
        assertThat(bookService.getAllBooks().size()).isEqualTo(2);
    }

    @Test
    public void shouldRetrieveTheBookWithGivenId() {
        Book book = new Book();
        bookService.addBook(book);
        Long expectedId = book.getId();
        when(bookRepositoryMock.findById(expectedId)).thenReturn(Optional.of(book));
        assertThat(bookService.getById(expectedId).get()).isEqualTo(book);
    }

    @Test
    public void shouldRetrieveTheBookByGivenAuthor() {
        Book book = new Book();
        Author authorMock = Mockito.mock(Author.class);
        assertNotNull(authorMock);
        authorMock.setName("expectedName");
        book.setAuthor(authorMock);
        bookService.addBook(book);
        when(bookRepositoryMock.findBooksByAuthor(authorMock)).thenReturn(List.of(book));
        assertThat(bookService.getByAuthor(authorMock)).isEqualTo(List.of(book));
    }

    @Test
    public void shouldRetrieveTheBooksByGivenTitle() {
        Book book = new Book();
        book.setName("expectedName");
        bookService.addBook(book);
        when(bookRepositoryMock.findBooksByNameContainingIgnoreCase("expectedName")).thenReturn(List.of(book));
        assertThat(bookService.getByName("expectedName")).isEqualTo(List.of(book));
    }

    @Test
    public void shouldRemoveBookWithGivenId() {
        Book book = new Book();
        bookService.addBook(book);
        Long id = book.getId();
        bookService.deleteBook(id);
        assertThat(bookService.getById(id)).isEqualTo(Optional.empty());
    }

    @Test
    public void shouldCatchExceptionForNullIdAtGetById() {
        assertThat(bookService.getById(null)).isEqualTo(Optional.empty());
    }

    @Test
    public void shouldCatchExceptionForNullAuthorAtGetByAuthor() {
        assertThat(bookService.getByAuthor(null).size()).isEqualTo(0);
    }

    @Test
    public void shouldCatchExceptionForNullIdAtDeleteById() {
        bookService.deleteBook(null);
        assertTrue(true);
    }

    @Test
    public void shouldThrowIllegalArgumentExceptionAtBookAdd() {
        assertThrows(IllegalArgumentException.class, () -> bookService.addBook(null));
    }


}