package com.codecool.ppt.service;

import com.codecool.ppt.model.Reader;
import com.codecool.ppt.repository.ReaderRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class ReaderService {
    private final ReaderRepository repository;

    public Optional<Reader> getByMail(String email) {
        return repository.findByEmail(email);
    }

    public void addReader(Reader reader) {
        repository.save(reader);
    }

    public List<Reader> getAllReaders() {
        return repository.findAll();
    }

    public Reader getById(String id) {
        return repository.findById(id).get();
    }


}
