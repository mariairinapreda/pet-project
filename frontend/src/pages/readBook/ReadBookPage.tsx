import React, {useState} from 'react';
import {useAtom} from "jotai";
import axios from "axios";
import {useParams} from "react-router-dom";
import {infoContentAtom} from "../addBook/infoContentAtom";
import {Document, Page} from "react-pdf/dist/esm/entry.webpack"
import "./ReadBook.css"
import {BASE_URL} from "../../constants/constants";


const ReadBookPage = () => {
    let {name} = useParams<{ name: string }>();
    const [book, setBook] = useAtom(infoContentAtom);
    const [numberOfPages, setNumberOfPages] = useState<number>(0);
    axios.get(BASE_URL + `/api/content/${name}`).then(res => setBook(res.data))
    axios.get(BASE_URL + `/api/books/${name}`).then(res => setNumberOfPages(res.data))
    const [numPage, setNumPages] = useState<number>(0);
    const [pageNumber, setPageNumber] = useState(1);

    function changePage(offset: number) {
        setPageNumber(prevState => prevState + offset);
    }

    function opacifyNavbar() {
        const footer = document.getElementById("footer");
        if (footer !== null) {
            footer.style.opacity = "0.3";
        }
        const list = new Array(document.querySelector("nav"));
        list.forEach(n => {
            if (n !== null) {
                n.style.opacity = "0.3";
            }
        })

    }

    function changePageBack() {
        changePage(-1);
    }

    function changePageNext() {
        changePage(1);
    }

    const b64toBlob = require('b64-to-blob');

    const contentType = 'application/pdf';

    const blob = b64toBlob(book, contentType);
    const objectUrl = window.URL.createObjectURL(blob);
    return (
        <div id={"pdf"}>

            <Document file={objectUrl} renderMode={"canvas"} onLoadSuccess={() => {
                setNumPages(numberOfPages);
                opacifyNavbar();
            }}>
                <Page renderTextLayer={false} renderAnnotationLayer={false} renderMode={"canvas"} height={800}
                      pageNumber={pageNumber}/>
            </Document>
            <p> Page number {pageNumber} of {numPage}</p>
            {pageNumber > 1 &&
                <span id={"left"} onClick={changePageBack}>&#10094;</span>}
            {pageNumber < numPage &&

                <span id={"right"} onClick={changePageNext}>&#10095;</span>}
        </div>
    );

}

export default ReadBookPage;