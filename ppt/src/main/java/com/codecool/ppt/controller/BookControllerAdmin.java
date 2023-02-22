package com.codecool.ppt.controller;

import com.codecool.ppt.model.BookTemplate;
import com.codecool.ppt.service.BookService;
import com.codecool.ppt.service.ContentService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequestMapping("/api/admin/books")
@AllArgsConstructor
public class BookControllerAdmin {
    private final ContentService contentService;

    private final BookService bookService;


    @PostMapping("/file/{name}")
    public void addFile(@RequestParam("file.pdf") MultipartFile multipartFile, @PathVariable("name") String name) throws IOException {
        contentService.addContent(multipartFile, name);
    }

    @PostMapping
    public void add(@RequestBody BookTemplate bookTemplate){
        System.out.println(bookTemplate.getAuthor());
        bookService.insertBook(bookTemplate);
    }
}
