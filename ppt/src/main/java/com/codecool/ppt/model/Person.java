package com.codecool.ppt.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.Id;

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
