package com.codecool.ppt.service;

import com.codecool.ppt.model.Author;
import com.codecool.ppt.model.Book;
import com.codecool.ppt.model.BookTemplate;
import com.codecool.ppt.repository.BookRepository;
import org.apache.tika.exception.TikaException;
import org.apache.tika.metadata.Metadata;
import org.apache.tika.parser.ParseContext;
import org.apache.tika.parser.pdf.PDFParser;
import org.apache.tika.sax.BodyContentHandler;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.xml.sax.SAXException;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Scanner;
import java.util.UUID;

@Service
public class BookService {
    private BookRepository repository;

    @Autowired
    public BookService(BookRepository repository) {
        this.repository = repository;
    }

    public Book addBook(Book book) {
        if (book == null) throw new IllegalArgumentException();
        book.setId(UUID.randomUUID());
        return repository.save(book);
    }

    public List<Book> getAllBooks() {
        return repository.findAll();
    }

    public Optional<Book> getById(UUID id) {
        try {
            return repository.findById(id);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }
        return Optional.empty();
    }

    public Book createBookByBookTemplate(BookTemplate bookTemplate, Author author) throws TikaException, IOException, SAXException {
        Book book = new Book();
        book.setName(bookTemplate.getName());
        book.setAuthor(author);
        book.setDescription(bookTemplate.getDescription());
        String text;
        String text1 = bookTemplate.getText();
        text = parsePdf(text1);
        cleanString(text);
        book.setText(text1);
        book.setImageUrl(bookTemplate.getImageUrl());
        return book;
    }

    public String cleanString(String cleanThis) {
        return cleanThis.replace("�", "").replace("½", "").replace("ï", "").replace("¿", "");

    }

    public List<Book> getByAuthor(Author author) {
        try {
            return repository.findBooksByAuthor(author);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }
        return new ArrayList<>();
    }

    public List<Book> getByName(String name) {
        return repository.findBooksByNameContainingIgnoreCase(name);
    }

    public void deleteBook(UUID id) {
        try {
            repository.deleteById(id);
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        }
    }

    public String parsePdf(String file) throws IOException, SAXException, TikaException {
        String text = "i wonder if it works this time";
//        BodyContentHandler contenthandler
//                = new BodyContentHandler();
        File file1 = new File("ppt\\");
        Scanner myReader = new Scanner(file);
        FileWriter myWriter = new FileWriter("ppt\\");
        while (myReader.hasNextLine()) {
            String data = myReader.nextLine();
            myWriter.write(data);

        }
        myWriter.close();
        myReader.close();
        // Create a file in local directory
        // Create a file input stream
        // on specified path with the created file
//        FileInputStream fstream = new FileInputStream(file1);
//
//        // Create an object of type Metadata to use
//        Metadata data = new Metadata();
//
//        // Create a context parser for the pdf document
//        ParseContext context = new ParseContext();
//
//        // PDF document can be parsed using the PDFparser
//        // class
//        PDFParser pdfparser = new PDFParser();
//
//        // Method parse invoked on PDFParser class
//        pdfparser.parse(fstream, contenthandler, data,
//                context);
//
//        // Printing the contents of the pdf document
//        // using toString() method in java
//        contenthandler.toString().replace("ï", "");
//        contenthandler.toString().replace("¿", "");
//        contenthandler.toString().replace("½", "");
//        contenthandler.toString().replace("�", "");
//        System.out.println("Extracting contents :"
//                + contenthandler);
//        String text;
//        PDFParser parser = new PDFParser((RandomAccessRead) new RandomAccessFile(file1, "r"));
//        parser.parse();
//        COSDocument cosDoc = parser.getDocument();
//        PDFTextStripper pdfStripper = new PDFTextStripper();
//        PDDocument pdDoc = new PDDocument(cosDoc);
//        text = pdfStripper.getText(pdDoc);
//        PDDocument doc = PDDocument.load(file1);
//        doc.close();
//        PDDocument doc = PDDocument.load(file1);
//        PDFTextStripper stripper = new PDFTextStripper();
//        String texts = stripper.getText(doc);
//        System.out.println(texts);
//        doc.close();
        BodyContentHandler handler = new BodyContentHandler();
        Metadata metadata = new Metadata();
        FileInputStream inputstream = new FileInputStream(file1);

        ParseContext pcontext = new ParseContext();

        //parsing the document using PDF parser
        PDFParser pdfparser = new PDFParser();
        pdfparser.parse(inputstream, handler, metadata, pcontext);
        String[] metadataNames = metadata.names();
        return String.valueOf(handler);
    }

}
