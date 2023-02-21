import React, {FC, useState} from "react";
import {Box, Button, ButtonGroup, Img, Link} from "@chakra-ui/react";
import {Book} from "../../../types/Book";
import {RenderableBook} from "../../../types/RenderableBook";
import axios from "axios";
import {getEmptyContent} from "../../../types/Content";
import {BASE_URL} from "../../../constants/constants";


const DownloadTxtFile: (book: Book) => void = (book: Book) => {
    const [book1, setBook1] = useState(getEmptyContent);
    axios.get(BASE_URL + `/api/content/${book.name}`).then(res => setBook1(res.data))
    const b64toBlob = require('b64-to-blob');

    const contentType = 'application/pdf';

    const blob = b64toBlob(book1, contentType);
    const element = document.createElement("a");
    element.href = URL.createObjectURL(blob);
    element.download = book.name + ".pdf";
    document.body.appendChild(element);
    element.click();
}

const ChangeColor = (event: React.MouseEvent<HTMLSpanElement>) => {
    const box: HTMLSpanElement = event.currentTarget;
    box.style.backgroundColor = "#2C7A7B";
    box.style.textDecoration = "none";

}
const ChangeColorBack = (event: React.MouseEvent<HTMLSpanElement>) => {
    const box: HTMLSpanElement = event.currentTarget;
    box.style.backgroundColor = "#319795\n";
}


export const CardComponent: FC<{ props: [RenderableBook] }> = (books) => {
    return (<div style={{display: "flex", width: "100%", height: "100%", flexWrap: "wrap"}}
                 className={"flex space-x-9 "}> {books.props.map(book =>
            <Box key={book.id} style={{display: "row", flex: " 1 0 21%"}} maxW='sm' overflow='initial'>
                <Img className={"rounded-lg"} src={book.imageUrl} width={300} height={300}/>
                <Box p='6'>
                    <ButtonGroup size='xs' display='flex' style={{display: "inline"}} width={50} alignItems='baseline'>
                        <Button as={"samp"} borderRadius='full' px='1' fontSize={"md"} colorScheme='teal'><Link
                            color={"white"} textDecoration={"none"} href={`/books/${book.name}`}
                            onMouseLeave={(e) => ChangeColorBack(e)} onMouseEnter={(e) => {
                            ChangeColor(e)
                        }} borderRadius='full' px='1' backgroundColor={"teal.500"}>Read
                        </Link></Button>
                        <Button as={"samp"} borderRadius='full' px='1' fontSize={"md"} colorScheme='teal'
                                id="downloadBtn" value="download"
                                onClick={() => DownloadTxtFile(book)}>Download</Button>
                    </ButtonGroup>

                    <Box
                        mt='1'
                        fontWeight='semibold'
                        as='h4'
                        lineHeight='tight'
                        noOfLines={1}
                        fontSize={"2xl"}
                    >
                        {book.name}
                    </Box>
                </Box>
            </Box>
        )}
        </div>
    )

}