package com.codecool.ppt.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;


@Document
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class Author extends Person{
    private List<Book> books = new ArrayList<>();

}
