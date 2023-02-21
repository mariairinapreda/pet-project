package com.codecool.ppt.service;

import com.codecool.ppt.model.Content;
import com.codecool.ppt.repository.ContentRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;

@Service
@AllArgsConstructor
public class ContentService {
    private final ContentRepository repository;


    public void addContent(MultipartFile multipartFile, String name) throws IOException {
        if (!repository.existsContentByNameEquals(name)) {
            byte[] fileBytes = multipartFile.getBytes();
            Content content = new Content();
            content.setName(name);
            content.setMultipartFile(fileBytes);
            repository.save(content);
        }
    }

    public byte[] getContent(String name) throws IOException {
        Content content = repository.findContentByNameEquals(name);
        byte[] fileBytes = content.getMultipartFile();
        return Base64.getEncoder().encode(fileBytes);
    }


}
