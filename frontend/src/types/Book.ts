export type Book ={
    name:string,
    author:string,
    description: string,
    imageUrl:string,
    text:any,
    numberOfPages: number
}

export function getEmptyBook(): Book {
    return {
        name:"",
        author:"",
        description: "",
        imageUrl:"",
        text: null,
        numberOfPages: 0
    }
}
