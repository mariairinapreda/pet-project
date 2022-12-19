import React, {Component} from 'react';
import {Box, Button, ButtonGroup, FormControl, FormHelperText, Input} from "@chakra-ui/react";
import "./Register.css"

class Register extends Component {
    render() {
        return (
            <Box id={"signin"} className={" place-items-center\t rounded-lg grid grid-cols-2 gap-4 place-content-center h-48 flex flex-col "}>
                <div>
                    <h1 className={""} >Register</h1>
                </div>
                <div>
                    <FormControl id={"forms"} className={"mb-8"} >
                        <FormHelperText >Type your name</FormHelperText>
                        <Input type='name'  className={"text-black"} focusBorderColor={"none"} placeholder={"name"} />
                        <FormHelperText >Type your mail</FormHelperText>
                        <Input type='mail'  className={"text-black"} focusBorderColor={"none"} placeholder={"mail"} />
                        <FormHelperText >Type the password</FormHelperText>
                        <Input  type='password'  className={"text-black"} focusBorderColor={"none"} placeholder={"password"} />
                    </FormControl>
                    <ButtonGroup className={""}>
                        <Button type={"submit"} style={{backgroundColor:"lightgreen"}}>Cancel</Button>
                        <Button type={"submit"} style={{backgroundColor:"lightgreen"}}>Submit</Button>
                    </ButtonGroup>
                </div>

            </Box>
        );
    }
}

export default Register;