package com.codecool.ppt.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "clients")
@AllArgsConstructor
@NoArgsConstructor
public class Reader extends Person{
    private String email;
    private Boolean isPremium;
}
