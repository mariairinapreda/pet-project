import {atom} from "jotai";
import {Book, getEmptyBook} from "../../../types/Book";



export const DataAtom=atom<[Book]>([getEmptyBook()]);

