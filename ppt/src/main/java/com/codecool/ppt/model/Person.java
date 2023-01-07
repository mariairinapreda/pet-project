package com.codecool.ppt.model;

import lombok.*;
import org.springframework.data.annotation.Id;

import java.util.UUID;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
abstract class Person {
    @Id
    protected String id;
    protected String firstName;
    protected String lastName;

}
