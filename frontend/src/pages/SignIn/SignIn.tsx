import React, {useEffect, useRef, useState} from 'react';
import {Box, Button, ButtonGroup, FormControl, FormHelperText, Input, Link} from "@chakra-ui/react";
import "./signin.css"
import axios from "../../api/Axios";
import {useNavigate} from "react-router-dom";
import {UserAtom} from "./UserAtom";
import {useAtom} from "jotai";

const SignIn = () => {
    const [, setUser] = useAtom(UserAtom);
    const navigate = useNavigate();
    const mailRef = useRef<any>();
    const errRef = useRef<any>();
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        if (mailRef.current !== undefined) {
            mailRef?.current.focus();
        }
    }, [])
    useEffect(() => {
        setErrorMessage("")
    }, [mail, password])
    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        //prevent default is to stop the form from reloading the page
      e.preventDefault();

        try {
            const response = await axios.post("/api/auth/authenticate", JSON.stringify({
                "email": mail, password
            }), {
                headers: {
                    "Content-Type": "application/json"
                }, withCredentials: true
            })
            const token = response?.data?.token;
            const role = response?.data?.role;
            const id = response?.data?.id;
            const name = response?.data?.name;
            localStorage.setItem("token", token);
            localStorage.setItem("role", role);
            localStorage.setItem("id", id);
            localStorage.setItem("name", name);
            setUser({name, id, role, token})
            setUser(prev => ({...prev, "token":token}))
            setMail("");
            setPassword("");
            setSuccess(true);
            navigate("/");
        } catch (e) {
            setErrorMessage("There was a problem. Please try again later!")
            if (errRef.current !== undefined) {
                errRef.current.focus();
            }
        }

    }
    return (<div id={"border"}>
            <>{success ? (
                <section>
                    You are logged in !!! :D
                </section>
            ) : (
                <Box id={"signin"} fontFamily={"Nunito"} fontWeight={"bold"}
                     className={"place-items-center\t rounded-lg grid grid-cols-2 gap-4 place-content-center h-48 flex flex-col "}>
                    <div>
                        <h1 className={"mt-[-30px]"}>Sign in</h1>
                    </div>
                    <p ref={() => errRef} className={errorMessage ? "errmsg" : "offscreen"} aria-live={"assertive"}>
                        {errorMessage}
                    </p>
                    <div>
                        <FormControl id={"forms"} className={"mb-8"}>
                            <FormHelperText>Type your mail</FormHelperText>
                            <Input type='mail'
                                   ref={() => mailRef}
                                   autoComplete={"off"}
                                   className={"text-black"}
                                   focusBorderColor={"none"}
                                   placeholder={"mail"}
                                   onChange={(e) => setMail(e.target.value)}
                                   required
                                   value={mail}
                            />

                            <FormHelperText>Type the password</FormHelperText>

                            <Input type='password'
                                   required
                                // autoComplete={"off"} is unnecessary because this is a type password
                                   onChange={(e) => setPassword(e.target.value)}
                                   className={"text-black"}
                                   focusBorderColor={"none"}
                                   value={password}
                                   placeholder={"password"}/>
                        </FormControl>


                        <ButtonGroup>
                            <Button type={"submit"}
                                    // onClick={() => window.location.href = '/'}
                                    style={{backgroundColor: "lightgreen"}}>Cancel</Button>
                            <Button type={"submit"} onClick={(e) => {
                                e.preventDefault();
                                handleSubmit(e)}}
                                    style={{backgroundColor: "lightgreen"}}>Submit</Button>
                        </ButtonGroup>
                    </div>
                    <p>
                        Need an account? :) <br/>
                        <Link href={"/register"}>Create new account</Link>
                    </p>
                </Box>)}</>
        </div>
    );
}


export default SignIn;