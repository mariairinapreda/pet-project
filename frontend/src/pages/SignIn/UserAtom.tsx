import {atom} from "jotai";
import {getEmptyUser, User} from "../../types/User";

export const UserAtom = atom<User>(getEmptyUser());