export type RenderableBook ={
    name:string,
    author:string,
    description: string,
    imageUrl:string,
    text:any,
    numberOfPages: number,
    id: string
}

export function getEmptyFile(): RenderableBook{
    return {
        name:"",
        author:"",
        description: "",
        imageUrl:"",
        text: null,
        numberOfPages: 0,
        id: ""
    }

}