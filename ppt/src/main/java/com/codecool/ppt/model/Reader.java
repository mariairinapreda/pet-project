package com.codecool.ppt.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

@Setter
@Getter
@Document
@AllArgsConstructor
@NoArgsConstructor
public class Reader extends Person{
    private String email;
    private Boolean isPremium;
}
