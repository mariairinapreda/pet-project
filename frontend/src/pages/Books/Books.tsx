import React from "react";
import {useAtom} from "jotai";
import {DataAtom} from "../HomePage/components/bookData";
import axios from "axios";
import {CardComponent} from "../HomePage/components/CardComponent";

const URL = 'http://localhost:8080/books';


export  const Books = () => {
    const [books, setBooks] = useAtom(DataAtom);
    axios.get(URL).then(res => setBooks(res.data))
  return(<div>
      <CardComponent props={books}/>
  </div>);
}