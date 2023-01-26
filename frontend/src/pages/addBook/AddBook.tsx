import React, {useState} from "react";
import {Box, Button, FormControl, FormHelperText, Input} from "@chakra-ui/react";
import "./addBook.css"
import {infoBookAtom} from "./infoBookAtom";
import {Book} from "../../types/Book";
import {PrimitiveAtom, useAtom} from "jotai";
import axios from "axios";
import {UserAtom} from "../SignIn/UserAtom";

const formData=new FormData();
let name="";
const HandleSendData = (data: PrimitiveAtom<Book>) => {
        axios.create(({
            headers: {
                "Content-type": "application/json",
            }
        }))
        axios.post('http://localhost:8080/api/books', data);
        axios.create(({
            headers: {
                "Content-type": "multipart/form-data",
            }
        }))
        axios.post(`http://localhost:8080/api/books/file/${name}`, formData);

}



const AddBook = () => {
    const [user, ]= useAtom(UserAtom);
    console.log(user);
    const [file, setFile] = useState(infoBookAtom);
    return (<Box id={"addBook"} className={""}>
            Add book
            <FormControl>
                <Input type='name' name={"name"} className={"text-black"}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                           name=event.target.value;
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
                <Input type='numberOfPages' name={"numberOfPages"} onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setFile(prev => ({...prev, [event.target.name]: event.target.value}));
                }} className={"text-black"} focusBorderColor={"none"} placeholder={"number of pages"}/>
                <FormHelperText>Type the number of pages</FormHelperText>
                <Input type='file' name={"text"}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                               formData.append("file.pdf", event?.target?.files?.item(0)!);
                       }
                       }
                />
                <FormHelperText fontFamily={"Lobster"}>Add a book </FormHelperText>
                <Button type={"submit"} onClick={() => HandleSendData(file)}
                        style={{backgroundColor: "lightgreen"}}>Add</Button>
            </FormControl>
        </Box>
    )
}

export default AddBook;