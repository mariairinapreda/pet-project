package com.codecool.ppt.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.io.File;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class ContentTemplate {

    private String id;
    private String name;
    private File multipartFile;
}
