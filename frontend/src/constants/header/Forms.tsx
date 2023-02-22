import React, {useState} from 'react';
import {FormControl, FormHelperText, Input} from "@chakra-ui/react"
import axios from "axios";
import {getEmptySearch} from "../../types/SearchInput";
import {BASE_URL, bookList} from "../constants";


const Forms = () => {
    const [search, setSearch] = useState(getEmptySearch);
    let [input, setInput] = useState([]);
    if (search.input !== "") {
        axios.get(BASE_URL + `/api/books/filter/${search.input}`).then(res => {
            setInput(res.data)
            for (const renderableBook of bookList) {
                bookList.pop();
            }
            bookList.pop();
            for (const inputElement of input) {
                bookList.push(inputElement);
            }
        })
    }
    if (search.input === "") {
        for (const inputElement of input) {
            input.pop();
        }
        input.pop();
        input = []
        for (const renderableBook of bookList) {
            bookList.pop();
        }
        bookList.push({name: "", id: '', numberOfPages: 0, author: '', description: '', text: '', imageUrl: ''});
    }

    return (
        <div>
            <FormControl>
                <Input type='search' onChange={(e) => setSearch(prevState => ({...prevState, "input": e.target.value}))}
                       className={"text-white"} focusBorderColor={"#A84839"} placeholder={"search"}/>
                <FormHelperText fontFamily={"Lobster"}>We have all the answers</FormHelperText>
            </FormControl>
        </div>
    );
}
export default Forms;