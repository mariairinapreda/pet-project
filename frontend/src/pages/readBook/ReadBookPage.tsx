import React, {useState} from 'react';
import {useAtom} from "jotai";
import axios from "axios";
import {useParams} from "react-router-dom";
import {infoContentAtom} from "../addBook/infoContentAtom";
import {Document, Page} from "react-pdf/dist/esm/entry.webpack"
import {Button} from "@chakra-ui/react";
import "./ReadBook.css"


const ReadBookPage =()=> {
const [numPage, setNumPages] = useState<number>(227);
const [pageNumber, setPageNumber] = useState(1);
function onDocumentLoadSuccess(numPages: number){
setNumPages(numPages);
setPageNumber(1);
}
function changePage(offset: number){
    setPageNumber(prevState => prevState + offset);
}
function changePageBack(){
    changePage(-1);
}
function changePageNext(){
    changePage(1);
}
    let { name } = useParams<{ name: string}>();
    const [book, setBook]=useAtom(infoContentAtom);

    axios.get(`http://localhost:8080/api/books/${name}`).then(res =>setBook(res.data))
    const b64toBlob = require('b64-to-blob');

    const contentType = 'application/pdf';

    const blob = b64toBlob(book, contentType);
    const objectUrl = window.URL.createObjectURL(blob);

        return (
            <div id={"pdf"}>
                <Document file={objectUrl}   renderMode={"canvas"} onLoadSuccess={()=>onDocumentLoadSuccess}>
                    <Page renderTextLayer={false} renderAnnotationLayer={false}  renderMode={"canvas"}  height={600} pageNumber={pageNumber}/>
                </Document>
                <p> Page number {pageNumber} of {numPage}</p>
                {pageNumber > 1 &&
                    <Button id={"left"} onClick={changePageBack}>Previous</Button>}
                {pageNumber < numPage &&

                    <Button id={"right"} onClick={changePageNext}>Next</Button>}
            </div>
        );

}

export default ReadBookPage;