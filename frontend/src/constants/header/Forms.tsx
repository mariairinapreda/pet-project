import React, {Component} from 'react';
import {FormControl, FormHelperText, Input} from "@chakra-ui/react"
class Forms extends Component {
    render() {
        return (
            <div>
                <FormControl>
                    <Input type='search'  className={"text-white"} focusBorderColor={"#A84839"} placeholder={"search"} />
                    <FormHelperText fontFamily={"Lobster"}>We have all the answers</FormHelperText>
                </FormControl>
            </div>
        );
    }
}

export default Forms;