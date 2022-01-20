
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Website/Home";
import Service from "./Website/Service";
import Contact from "./Website/Contact";
import About from "./Website/About";
import Navbar from "./Website/Navbar";
import { Redirect, Route, Switch } from "react-router-dom";
import Footer from "./Website/Footer";
const App =() =>
{
    return (<>
            <Navbar/>
            <Switch>

                <Route exact path="/home" component ={Home}/>
                <Route exact path="/contact" component ={Contact}/>
                <Route exact path="/service" component ={Service}/>
                <Route exact path="/about" component ={About}/>
                
                <Redirect to="/home"/>
            </Switch>
            <Footer/>
           </>);
}

export default App;