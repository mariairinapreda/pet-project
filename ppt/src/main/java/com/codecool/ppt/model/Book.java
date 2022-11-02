package com.codecool.ppt.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.annotation.Transient;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.UUID;

@Document(collection = "books")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Book {

    @Id
    private UUID id;
    private String name;
    private Author author;

}
