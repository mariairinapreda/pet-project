import React from 'react';
import {useAtom} from "jotai";
import {DataAtom} from "../HomePage/components/bookData";
import axios from "axios";

const URL = 'http://localhost:8080/authors';
const Authors = () => {
    const [authors, setAuthors] = useAtom(DataAtom);
    axios.get(URL).then(res => setAuthors(res.data))
    return (
        <div>

        </div>
    );

}

export default Authors;