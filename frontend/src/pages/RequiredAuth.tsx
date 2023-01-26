import {useLocation, Navigate, Outlet} from "react-router-dom";
import React from "react";
import {AllowedRole} from "../types/AllowedRole";



const RequiredAuth :React.FC<AllowedRole> =(allowedRole)=>{
const user= localStorage.getItem("name");
const role =localStorage.getItem("role");
const location = useLocation();
return (
    user!==null
    ?(allowedRole.allowedRole===role ? <Outlet/>
        : <Navigate to={"/"} state={{from:location}} replace/> )
        : <Navigate to={"/signin"} state={{from:location}} replace/>
)



}

export  default  RequiredAuth;