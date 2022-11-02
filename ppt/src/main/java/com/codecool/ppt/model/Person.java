package com.codecool.ppt.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import org.springframework.data.annotation.Id;

import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
abstract class Person {
    @Id
    protected UUID id;
    protected String firstName;
    protected String lastName;

}
