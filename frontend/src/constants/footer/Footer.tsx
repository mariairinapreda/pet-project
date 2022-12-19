import "./Footer.css"
import {Link} from "@chakra-ui/react";


export const Footer = () => {
  return(<nav   className={"fixed bottom-0  md:flex md:mb-0\\t  md:text-center  text-white z-[-1] left-0 right-0 md:z-auto md:justify-between rounded-tr-[50px] rounded-tl-[50px] p-1 bg-gradient-to-r from-orange-400 to-rose-400 shadow "}>
    <div className={" text-[30px] md:mx-4 my-6  md:my-0"} ><p>DMT &copy; 2022 Codecool Bucharest</p></div>
    <Link className={"text-[30px] md:mx-4 my-6  md:my-0"} textDecoration={"initial"}  fontFamily={"Lobster"} href={"https://www.linkedin.com/in/preda-maria-irina-768195245/"}>Maria Irina Preda</Link>
  </nav>)
}