package com.codecool.ppt.controller;

import com.codecool.ppt.model.Reader;
import com.codecool.ppt.service.ReaderService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/admin/reader")
public class ReaderController {
private final ReaderService service;



@GetMapping()
    public List<Reader> getAll(){
    return service.getAllReaders();
}
@GetMapping("/{id}")
    public Reader getReaderById(@PathVariable("id")String id){
    return service.getById(id);
}
@PostMapping()
    public void saveReader(@RequestBody Reader reader){
    service.addReader(reader);
}


}
