import * as React from 'react'
import { HashRouter as Router, Route,Routes } from "react-router-dom"
import {Header} from "./constants/header/Header"
import {Footer} from "./constants/footer/Footer";

class App extends React.Component {
  render() {
    return (
        <Router>
            <div className="App">
                <Header/>

                <Footer/>
            </div>
            <Routes>
                <Route path={"/"} />
                <Route  path={"/books"}/>
                <Route  path={"/authors"} />
                <Route path={"/books/add"} />
                <Route  path={"/authors/add"} />
            </Routes>
        </Router>

    );

  }

}

export default App;
