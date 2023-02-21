import {atom} from "jotai"
import {Content, getEmptyContent} from "../../types/Content";

export const infoContentAtom = atom<Content>(getEmptyContent());