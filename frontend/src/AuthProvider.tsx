import React, {createContext,useState}  from "react";
import {getEmptyUser, User} from "./types/User";
import {useAtom} from "jotai";
import {UserAtom} from "./pages/SignIn/UserAtom";
const AuthContext= createContext<User>(getEmptyUser());

export  const AuthProvider : React.FC<any>= ({children})=>{
const [auth,] = useAtom(UserAtom);
return (
    <AuthContext.Provider value={auth}>
        {children}
</AuthContext.Provider>
)
}
export default AuthContext;