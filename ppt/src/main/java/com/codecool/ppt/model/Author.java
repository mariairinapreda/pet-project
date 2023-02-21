package com.codecool.ppt.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;


@Document
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Author extends Person {
    private List<Book> books = new ArrayList<>();

}
