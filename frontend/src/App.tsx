import * as React from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {Header} from "./constants/header/Header"
import {Footer} from "./constants/footer/Footer";
import {HomePage} from "./pages/HomePage/components/HomePage";
import "./App.css"
import SignIn from "./pages/SignIn/SignIn";
import Register from "./pages/Register/Register";
import {Books} from "./pages/Books/Books";
import AddBook from "./pages/addBook/AddBook";
import ReadBookPage from "./pages/readBook/ReadBookPage";
import RequiredAuth from "./pages/RequiredAuth";

class App extends React.Component {

    render() {
        return (
            <Router>
                <div className="App text-center sm:text-left">
                    <Header/>
                </div>
                <Routes>
                    {/*public routes*/}
                    <Route path={"/"} element={<HomePage/>}/>
                    <Route path={"/signin"} element={<SignIn/>}/>
                    <Route path="/register" element={<Register/>}/>
                    <Route path={"/books"} element={<Books/>}/>

                    {/*secured routes*/}
                    <Route element={<RequiredAuth allowedRole={"USER"}/>}>
                        <Route path={"/books/:name"} element={<ReadBookPage/>}/>
                    </Route>


                    <Route element={<RequiredAuth allowedRole={"ADMIN"}/>}>
                        <Route path={"/authors"}/>
                        <Route path={"/books/add"} element={<AddBook/>}/>
                        <Route path={"/authors/add"}/>
                    </Route>
                </Routes>
                <Footer/>
            </Router>

        );

    }

}

export default App;
