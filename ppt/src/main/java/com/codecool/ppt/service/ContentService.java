package com.codecool.ppt.service;

import com.codecool.ppt.model.Content;
import com.codecool.ppt.model.ContentTemplate;
import com.codecool.ppt.repository.ContentRepository;
import com.mongodb.BasicDBObject;
import com.mongodb.DBObject;
import com.mongodb.client.gridfs.model.GridFSFile;

import com.mongodb.gridfs.GridFS;
import com.mongodb.gridfs.GridFSDBFile;
import lombok.AllArgsConstructor;
import org.bson.Document;
import org.bson.types.Binary;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsOperations;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Base64;

@Service
@AllArgsConstructor
public class ContentService {
    private ContentRepository repository;
    private GridFsTemplate gridFsTemplate;
    private GridFsOperations operations;


    public void addContent(MultipartFile multipartFile, String name) throws IOException {
        byte [] fileBytes = multipartFile.getBytes();
        Content content = new Content();
        content.setName(name);
        content.setMultipartFile(fileBytes);
        repository.save(content);
    }

    public byte[] getContent(String name) throws IOException {
        Content content=repository.findContentByNameEquals(name);
        byte [] fileBytes = content.getMultipartFile();
//        File file1=new File("new_intro.pdf");
//        Files.write(file1.toPath(), fileBytes);
//
//
        byte[] encoded = Base64.getEncoder().encode(fileBytes);
        return encoded;
    }


}
