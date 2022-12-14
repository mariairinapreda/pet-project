package com.codecool.ppt.controller;

import com.codecool.ppt.model.Book;
import com.codecool.ppt.model.BookTemplate;
import com.codecool.ppt.model.ContentTemplate;
import com.codecool.ppt.service.BookService;
import com.codecool.ppt.service.ContentService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@RestController
@RequestMapping("/api/books")
@AllArgsConstructor
public class BookController {
    private final ContentService contentService;
    private final BookService bookService;


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
       bookService.insertBook(bookTemplate);
    }

   @GetMapping("/{name}")
    public int getNumberOfPagesForBook(@PathVariable("name") String name){
        return bookService.getNumberOfPages(name);
   }


}
