import React from 'react';
import axios from "axios";
import {useAtom} from "jotai";
import {Box} from "@chakra-ui/react";
import {CardComponent} from "./CardComponent";
import "./homepage.css"
import Slider from "./Carousel";
import {DataAtom} from "./bookData";
import {BASE_URL, bookList} from "../../../constants/constants";


const URL = BASE_URL + '/api/books';

export const HomePage = () => {
    const [books, setBooks] = useAtom(DataAtom);
    if (bookList.length === 1) {
        axios.get(URL).then(res => setBooks(res.data))
    } else {
        setBooks(bookList);
    }
    return (<Box id={"imageContainer"}>
            <Slider/>
            <CardComponent props={books}/>
        </Box>
    )
}

