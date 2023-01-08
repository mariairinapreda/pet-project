package com.codecool.ppt.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class BookTemplate {
    private String name;
    private String author;
    private String description;
    private String imageUrl;
    private int numberOfPages;
}
