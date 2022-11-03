import React from 'react';
import axios from "axios";
import {useAtom} from "jotai";
import {DataAtom} from "./bookData";


import {CardComponent} from "./CardComponent";
const URL ='http://localhost:8080/books';


export const HomePage = () => {
    const [books, setBooks]=useAtom(DataAtom);
  axios.get(URL).then(res => setBooks(res.data))
    return <div><CardComponent  props={books}/></div>
}