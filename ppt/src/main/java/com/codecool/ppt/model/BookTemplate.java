package com.codecool.ppt.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

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
