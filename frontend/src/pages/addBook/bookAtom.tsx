import {atom} from "jotai"
import {File, getEmptyFile} from "../../types/File";

export const bookAtom=atom<File>(getEmptyFile());