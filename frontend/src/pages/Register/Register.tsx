import React, {useEffect, useRef, useState} from 'react';
import {Box, Button, ButtonGroup, FormControl, FormHelperText, Input, Link} from "@chakra-ui/react";
import "./Register.css"
import axios from "../../api/Axios"
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {EMAIL_REGEX, PWD_REGEX, USER_REGEX} from "../../constants/constants";


const Register = () => {
    const navigate = useNavigate();
    const errRef = useRef();

    const [lastname, setLastname] = useState("");
    const [validUserLastname, setValidLastName] = useState(false);
    const [userLastnameFocus, setUserLastnameFocus] = useState(false);

    const [firstname, setFirstname] = useState<string>("");
    const [validFirstName, setValidFirstName] = useState(false);
    const [userFirstnameFocus, setUserFirstnameFocus] = useState(false);

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);


    const [password, setPassword] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState("");
    const [matchValidPwd, setMatchValidPwd] = useState(false);
    const [matchPwdFocus, setMatchPwdFocus] = useState(false);

    const [errMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);


    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])
    useEffect(() => {
        setValidFirstName(USER_REGEX.test(firstname));
    }, [validFirstName])
    useEffect(() => {
        setValidLastName(USER_REGEX.test(lastname));
    }, [validUserLastname])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setMatchValidPwd(password === matchPwd);
    }, [password, matchPwd])


    useEffect(() => {
        setErrorMessage("");
    }, [firstname, lastname, password, matchPwd])

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        const validFirst = USER_REGEX.test(firstname);
        const validLast = USER_REGEX.test(lastname);
        const validPwd = PWD_REGEX.test(password);
        const validEmail = EMAIL_REGEX.test(email);
        if (!validFirst || !validLast || !validPwd || !validEmail) {
            setErrorMessage("Invalid entry");
            return;
        }
        try {
            const response = await axios.post("api/auth/register", JSON.stringify({
                firstname, lastname, email, password
            }), {
                headers: {
                    "Content-Type": "application/json",
                    'Access-Control-Allow-Credentials': "true"
                }, withCredentials: true
            })
            setSuccess(true);
            // navigate("/signin")
        } catch (e) {
            setErrorMessage("Registration failed")
        }

    }

    return (
        <>{success ? (
            <section><h1>Success!!!</h1>
                <Link href={"/signin"}>Sign in</Link>
            </section>
        ) : (
            <div id={"border"}>
                <Box id={"register"} fontFamily={"Nunito"} fontWeight={"bold"}
                     className={" place-items-center\t rounded-lg grid grid-cols-2 gap-4 place-content-center h-48 flex flex-col "}>
                    <div>
                        <h1 className={""}>Register</h1>
                    </div>
                    <div>
                        <FormControl id={"forms"} className={"mb-8"}>
                            <FormHelperText>Type your first name
                                <span className={validFirstName ? "valid" : "hide"}>
                                <FontAwesomeIcon icon="check"/>
                        </span>
                                <span className={validFirstName || !firstname ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon="times"/>
                        </span>
                            </FormHelperText>
                            <p ref={() => errRef} className={errMessage ? "errmsg" : "offscreen"}
                               aria-live="assertive">{errMessage}</p>
                            <Input type='name' onChange={(e) => {
                                setFirstname(e.target.value)
                                setValidFirstName(USER_REGEX.test(firstname))
                            }} autoComplete={"off"} required aria-describedby={"uidnote"} onFocus={() => {
                                setUserFirstnameFocus(true);
                            }}
                                   onBlur={() => {
                                       setUserFirstnameFocus(false);
                                   }} aria-invalid={validFirstName ? "false" : "true"} className={"text-black"}
                                   focusBorderColor={"none"} placeholder={"name"}/>
                            <p id={"uidnote"}
                               className={userFirstnameFocus && firstname && !validFirstName ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon="info-circle"/>
                                4 to 24 characters <br/>
                                Must begin with a letter <br/>
                                Letters, numbers, underscores, hyphens allowed <br/>
                            </p>
                            <FormHelperText>Type your last name
                                <span className={validUserLastname ? "valid" : "hide"}>
<FontAwesomeIcon icon="check"/>
                        </span>
                                <span className={validUserLastname || !lastname ? "hide" : "invalid"}>
<FontAwesomeIcon icon="times"/>
                        </span>
                            </FormHelperText>
                            <p ref={() => errRef} className={errMessage ? "errmsg" : "offscreen"}
                               aria-live="assertive">{errMessage}</p>
                            <Input type='name' onChange={(e) => {
                                setLastname(e.target.value)
                                setValidLastName(USER_REGEX.test(lastname))
                            }} autoComplete={"off"} required aria-describedby={"lastnamenote"} onFocus={() => {
                                setUserLastnameFocus(true);
                            }}
                                   onBlur={() => {
                                       setUserLastnameFocus(false);
                                   }} aria-invalid={validUserLastname ? "false" : "true"} className={"text-black"}
                                   focusBorderColor={"none"} placeholder={"name"}/>
                            <p id={"lastnamenote"}
                               className={userLastnameFocus && lastname && !validUserLastname ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon="info-circle"/>
                                4 to 24 characters <br/>
                                Must begin with a letter <br/>
                                Letters, numbers, underscores, hyphens allowed <br/>
                            </p>
                            <FormHelperText>Type your mail
                                <span className={validEmail ? "valid" : "hide"}>
<FontAwesomeIcon icon="check"/>
                        </span>
                                <span className={validEmail || !email ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon="times"/>
                                </span></FormHelperText>
                            <Input type='mail' onChange={(e) => {
                                setEmail(e.target.value)
                            }} required aria-invalid={validEmail ? "false" : "true"} onBlur={() => {
                                setEmailFocus(false);
                            }} aria-describedby={"emailnote"} onFocus={() => setEmailFocus(true)}
                                   className={"text-black"} focusBorderColor={"none"} placeholder={"mail"}/>
                            <p id={"emailnote"}
                               className={emailFocus && email && !validEmail ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon="info-circle"/>
                                The email must contain @ <br/>
                            </p>
                            <FormHelperText>Type the password
                                <span className={validPwd ? "valid" : "hide"}>
<FontAwesomeIcon icon="check"/>
                        </span>
                                <span className={validPwd || !password ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon="times"/>
                            </span>
                            </FormHelperText>
                            <Input type='password' onChange={(e) => {
                                setPassword(e.target.value)
                            }} required aria-invalid={validPwd ? "false" : "true"} onBlur={() => {
                                setPwdFocus(false);
                            }} aria-describedby={"pwdnote"} onFocus={() => setPwdFocus(true)} className={"text-black"}
                                   focusBorderColor={"none"} placeholder={"password"}/>
                            <p id={"pwdnote"}
                               className={pwdFocus && password && !validPwd ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon="info-circle"/>
                                8 to 24 characters <br/>
                                Must contain a lowercase letter, an uppercase letter, a number and a special
                                character <br/>
                            </p>
                            <FormHelperText>Confirm password
                                <span className={matchValidPwd && matchPwd ? "valid" : "hide"}>
<FontAwesomeIcon icon="check"/>
                        </span>
                                <span className={matchValidPwd || !matchPwd ? "hide" : "invalid"}>
                                <FontAwesomeIcon icon="times"/>
                                </span></FormHelperText>
                            <Input type='password' onChange={(e) => {
                                setMatchPwd(e.target.value)
                            }} required aria-invalid={matchValidPwd ? "false" : "true"} onBlur={() => {
                                setMatchPwdFocus(false);
                            }} aria-describedby={"pwdmatchnote"} onFocus={() => setMatchPwdFocus(true)}
                                   className={"text-black"} focusBorderColor={"none"} placeholder={"confirm_password"}/>
                            <p id={"pwdmatchnote"}
                               className={matchPwdFocus && matchPwd && !matchValidPwd ? "instructions" : "offscreen"}>
                                <FontAwesomeIcon icon="info-circle"/>
                                Must be the same as first password typed above <br/>
                            </p>
                        </FormControl>
                        <ButtonGroup className={""}>
                            <Button type={"submit"} style={{backgroundColor: "lightgreen"}}
                                    onClick={() => window.location.href = '/'}>Cancel</Button>
                            <Button type={"submit"} onClick={(e) => handleSubmit(e)}
                                    disabled={!validEmail || !validFirstName || !validUserLastname || !matchValidPwd || !validPwd}
                                    style={{backgroundColor: "lightgreen"}}>Submit</Button>
                        </ButtonGroup>
                    </div>
                    <p>
                        Already registered? :) <br/>
                        <Link href={"/signin"}>Sign in</Link>
                    </p>

                </Box>
            </div>
        )} </>)


}

export default Register;