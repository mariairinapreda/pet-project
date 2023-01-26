import "./Header.css"
import {Button, Img, Link} from "@chakra-ui/react";
import Forms from "./Forms";



export const Header = () => {
    const signOut = () =>{
        localStorage.clear();
    }
    const user = localStorage.getItem("name");
  return(<nav  className={" md:items-center z-[-1] md:z-auto md:static absolute static sticky\t md:flex md:justify-between  rounded-br-[50px] rounded-bl-[50px] p-1 bg-gradient-to-r from-orange-400 to-rose-400 shadow"}>
    <Img className={"border-color-orange-400 rounded-full " }  id={"picture"} src={"https://user-images.githubusercontent.com/89586309/200301912-d3b3742d-3098-451b-950c-770334781987.png"} alt={"logo"}/>
     <p  className={"text-[30px] text-white "}>{user!==null ? user+"😎" : ""}</p>
      <Forms/>
    <div  className={"space-x-5 mr-5 text-white\t "} >
        <Link className={"text-[30px] md:my-0"} textDecoration={"initial"}   href={"/register"}>Register</Link>
        <Link className={"text-[30px] md:my-0"} textDecoration={"initial"}   href={"/signin"}>Sign in</Link>
        {user!==null ? (
            <Button  variant='link' colorScheme={"whiteAlpha"} onClick={()=>signOut()}><Link className={"text-[30px] md:my-0"} textDecoration={"initial"}   href={"/"}>Log out</Link></Button>
        ) : null}
      <Link className={"text-[30px] md:my-0"}  href={"/"}  textDecoration={"initial"} >Home</Link>
       <Link className={"text-[30px] md:my-0"} textDecoration={"initial"} href={"/books"}>Books</Link>
    <Link className={"text-[30px] md:my-0"} textDecoration={"initial"}   href={"/authors"}>Authors</Link>

    </div>
  </nav>)
}