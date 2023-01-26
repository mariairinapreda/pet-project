package com.codecool.ppt.repository;

import com.codecool.ppt.model.Reader;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.Optional;

public interface ReaderRepository extends MongoRepository<Reader, String> {
    Optional<Reader> findByEmail(String email);
}
