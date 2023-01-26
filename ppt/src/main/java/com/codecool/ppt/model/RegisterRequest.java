package com.codecool.ppt.model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Setter
@Getter
@Builder
@Document
@AllArgsConstructor
@NoArgsConstructor
public class RegisterRequest {
private String firstname;
private String lastname;
private String email;
private String password;

}
