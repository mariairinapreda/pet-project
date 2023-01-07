package com.codecool.ppt.repository;

import com.codecool.ppt.model.Content;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContentRepository extends MongoRepository<Content, String> {
    boolean existsContentByNameEquals(String name);

    Content findContentByNameEquals(String name);
}
