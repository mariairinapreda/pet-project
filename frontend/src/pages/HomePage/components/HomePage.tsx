import React from 'react';
import axios from "axios";
import {useAtom} from "jotai";
import {Box} from "@chakra-ui/react";
import {CardComponent} from "./CardComponent";
import "./homepage.css"
import Slider from "./Carousel";
import {DataAtom} from "./bookData";


const URL = 'http://localhost:8080/api/books';

export const HomePage = () => {
    const [books, setBooks] = useAtom(DataAtom);
    axios.get(URL).then(res => setBooks(res.data))
    return(<Box id={"imageContainer"}  >
            <Slider/>
            <CardComponent  props={books}/>
            </Box>
    )
}

