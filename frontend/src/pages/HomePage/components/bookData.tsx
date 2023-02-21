import {atom} from "jotai";
import {getEmptyFile, RenderableBook} from "../../../types/RenderableBook";


export const DataAtom = atom<[RenderableBook]>([getEmptyFile()]);

