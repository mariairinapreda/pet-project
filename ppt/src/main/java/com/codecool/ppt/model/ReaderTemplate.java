package com.codecool.ppt.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ReaderTemplate {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
}
