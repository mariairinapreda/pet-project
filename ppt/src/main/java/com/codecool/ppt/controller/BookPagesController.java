package com.codecool.ppt.controller;

import com.codecool.ppt.service.ContentService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;

@RestController
@RequestMapping("/api/content")
@AllArgsConstructor
public class BookPagesController {
    private final ContentService contentService;

    @GetMapping("/{name}")
    public byte[] getContentBook(@PathVariable("name") String name) {
        try {
            return contentService.getContent(name);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

}
