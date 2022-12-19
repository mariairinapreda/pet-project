export type Book ={
    name:string,
    author:string,
    description: string,
    imageUrl:string,
    text:string
}

export function getEmptyBook(): Book {
    return {
        name:"",
        author:"",
        description: "",
        imageUrl:"",
        text: ""
    }
}
