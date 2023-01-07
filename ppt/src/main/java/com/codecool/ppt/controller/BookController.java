package com.codecool.ppt.controller;

import com.codecool.ppt.model.Author;
import com.codecool.ppt.model.Book;
import com.codecool.ppt.model.BookTemplate;
import com.codecool.ppt.model.Content;
import com.codecool.ppt.model.ContentTemplate;
import com.codecool.ppt.service.AuthorService;
import com.codecool.ppt.service.BookService;
import com.codecool.ppt.service.ContentService;
import com.mongodb.client.gridfs.model.GridFSFile;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/books")
@AllArgsConstructor
public class BookController {
    private final ContentService contentService;
    private final BookService bookService;
    private final AuthorService authorService;


    @GetMapping
    public List<Book> getAll() {
        return bookService.getAllBooks();
    }

    @PostMapping("/file/{name}")
    public void addFile(@RequestParam("file.pdf") MultipartFile multipartFile, @PathVariable("name") String name) throws IOException {
        contentService.addContent(multipartFile, name);
    }

    @PostMapping
    public void add(@RequestBody BookTemplate bookTemplate){
        Author author;
        if (authorService.findIfAuthorAlreadySaved(bookTemplate.getAuthor(), bookTemplate.getAuthor())) {
            author = authorService.getAuthorWithName(bookTemplate.getAuthor(), bookTemplate.getAuthor());
        } else {
            author = new Author();
            author.setFirstName(bookTemplate.getAuthor());
            author.setLastName(bookTemplate.getAuthor());
            authorService.addAuthor(author);
        }


        try {
          Book  book = bookService.createBookByBookTemplate(bookTemplate, author);
            bookService.addBook(book);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

    }

    @GetMapping("/{name}")
    public byte[] getContentBook(@PathVariable("name") String name) {
        try {
            byte[] file=contentService.getContent(name);
           return file;
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }


}
