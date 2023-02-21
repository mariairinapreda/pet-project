import {atom} from "jotai"
import {Book, getEmptyBook} from "../../types/Book";

export const infoBookAtom = atom<Book>(getEmptyBook());