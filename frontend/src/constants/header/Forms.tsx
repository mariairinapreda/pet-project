import React, {Component, useState} from 'react';
import {FormControl, FormHelperText, Input} from "@chakra-ui/react"
import axios from "axios";
import {useAtom} from "jotai";
import {getEmptySearch} from "../../types/SearchInput";
import {DataAtom} from "../../pages/HomePage/components/bookData";
const Forms =()=>{
    const [search, setSearch] = useState(getEmptySearch);
    const[input , setInput] = useAtom(DataAtom);
    // axios.get(`http://localhost:8080/api/books/filter/${search}`, {
    //     headers: {
    //         "Access-Control-Allow-Origin":`http://localhost:8080/api/books/filter/${search}`
    //     }
    // }).then(res => setInput(res.data))
        return (
            <div>
                <FormControl>
                    <Input type='search' onChange={(e)=>setSearch(prevState =>({ ...prevState,"input": e.target.value}))} className={"text-white"} focusBorderColor={"#A84839"} placeholder={"search"} />
                    <FormHelperText fontFamily={"Lobster"}>We have all the answers</FormHelperText>
                </FormControl>
            </div>
        );
    }
export default Forms;