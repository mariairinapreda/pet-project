export type Book ={
    name:string,
    author:string,
    description: string,
    imageUrl:string,
    text:any,
    objectUrl: string
}

export function getEmptyBook(): Book {
    return {
        name:"",
        author:"",
        description: "",
        imageUrl:"",
        text: null,
        objectUrl: ""
    }
}
