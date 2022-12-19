import React, {FC, ReactElement, useState} from "react";
import {Box, Button, FormControl, FormHelperText, Input} from "@chakra-ui/react";
import "./addBook.css"
import {infoBookAtom} from "./infoBookAtom";
import {Book} from "../../types/Book";
import {PrimitiveAtom} from "jotai";
import axios from "axios";
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';


const Appearance : FC<string | Uint8Array> = (url: string | Uint8Array) : ReactElement=>{
    if(url==="")return (<div></div>)
return (<Worker workerUrl="https://unpkg.com/pdfjs-dist@3.1.81/build/pdf.worker.min.js">
    <Viewer fileUrl={url} />;
</Worker>)

}
const HandleSendData = (data: PrimitiveAtom<Book>) => {
    if (data.read.length > 0) {
        axios.post('http://localhost:8080/api/books', data);
        console.log("a trecut de post");
    }
}



const AddBook = () => {
    const [file, setFile] = useState(infoBookAtom);
    const [url, setUrl] = useState("");
    return (<Box id={"addBook"} className={""}>
            Add book
            <FormControl>
                <Input type='name' name={"name"} className={"text-black"}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                           setFile(prev => ({...prev, [event.target.name]: event.target.value}));
                       }} focusBorderColor={"none"} placeholder={"title"}/>
                <FormHelperText>Type the title</FormHelperText>
                <Input type='description' name={"description"}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                           setFile(prev => ({...prev, [event.target.name]: event.target.value}));
                       }} className={"text-black"} focusBorderColor={"none"} placeholder={"description"}/>
                <FormHelperText>Type the description</FormHelperText>
                <Input type='author' name={"author"} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setFile(prev => ({...prev, [event.target.name]: event.target.value}));
                }} className={"text-black"} focusBorderColor={"none"} placeholder={"author"}/>
                <FormHelperText>Type the author</FormHelperText>
                <Input type='imageUrl' name={"imageUrl"} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setFile(prev => ({...prev, [event.target.name]: event.target.value}));
                }} className={"text-black"} focusBorderColor={"none"} placeholder={"imageUrl"}/>
                <FormHelperText>Type the image url</FormHelperText>
                <Input type='file' name={"text"}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                           event?.target?.files?.item(0)?.text().then(contents => {
                               const objectURL = window.URL.createObjectURL(event?.target?.files?.item(0)!);
                               setUrl(objectURL);
                               setFile(prev => ({
                                       ...prev, [event.target.name]: contents
                                   })
                               )
                           });

                       }
                       }
                />
                <FormHelperText fontFamily={"Lobster"}>Add a book </FormHelperText>
                <Button type={"submit"} onClick={() => HandleSendData(file)}
                        style={{backgroundColor: "lightgreen"}}>Add</Button>
            </FormControl>
           <div>{Appearance(url)}</div>
        </Box>
    )
}

export default AddBook;