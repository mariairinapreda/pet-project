import React, {useState} from "react";
import {Box, Button, FormControl, FormHelperText, Input} from "@chakra-ui/react";
import "./addBook.css"
import {infoBookAtom} from "./infoBookAtom";
import {Book} from "../../types/Book";
import {PrimitiveAtom} from "jotai";
import axios from "axios";
import {BASE_URL} from "../../constants/constants";
import {NavigateFunction, useNavigate} from "react-router-dom";

const formData = new FormData();


let name = "";
const HandleSendData = (data: PrimitiveAtom<Book>, navigate: NavigateFunction) => {

    axios.post(BASE_URL + '/api/admin/books', data, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,

        }
    }).catch((error) => {
        if (error.response.status === 403) {
            navigate("/forbidden")
        }
    });

    axios.post(BASE_URL + `/api/admin/books/file/${name}`, formData, {
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
        }
    }).catch((error) => {
        if (error.response.status === 403) {
            navigate("/forbidden")
        }
    });
}


const AddBook = () => {
    const navigate = useNavigate();
    const [file, setFile] = useState(infoBookAtom);
    return (<Box id={"addBook"} className={""}>
            Add book
            <FormControl>
                <Input type='name' name={"name"} className={"text-black"}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                           name = event.target.value;
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
                <Input type='numberOfPages' name={"numberOfPages"}
                       onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
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
                <Button type={"submit"} onClick={() => HandleSendData(file, navigate)}
                        style={{backgroundColor: "lightgreen"}}>Add</Button>
                <Button type={"submit"} onClick={() => navigate("/")}
                        style={{backgroundColor: "lightgreen"}}>Home</Button>
            </FormControl>
        </Box>
    )
}

export default AddBook;