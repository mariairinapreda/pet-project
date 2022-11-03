package com.codecool.ppt.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;
import java.util.UUID;


@Document(collection = "authors")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Author extends Person {
    private List<Book> books;

}
