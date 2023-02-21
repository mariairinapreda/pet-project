import {RenderableBook} from "../types/RenderableBook";

export const BASE_URL = "http://localhost:8080";

export let bookList: [RenderableBook] = [{
    name: "",
    id: '',
    numberOfPages: 0,
    author: '',
    description: '',
    text: '',
    imageUrl: ''
}];
//it will start with a lower or uppercase letter, it can be followed by 3->23 char that can be letters or numbers, -,_
export const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
//it has to contain a lowercase, a uppercase, a number, or symbol, between 8-24 length
export const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
export const EMAIL_REGEX = /^[\w-]+@([\w-]+\.)+[\w-]{2,4}$/;