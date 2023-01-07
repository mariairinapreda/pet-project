export type RenderableBook ={
    name:string,
    author:string,
    description: string,
    imageUrl:string,
    text:any,
    objectUrl: string,
    id: string
}

export function getEmptyFile(): RenderableBook{
    return {
        name:"",
        author:"",
        description: "",
        imageUrl:"",
        text: null,
        objectUrl: "",
        id: ""
    }

}