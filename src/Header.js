import React from 'react';
import Home from "./Home.js";
import AboutMe from "./AboutMe.js";
import Projects from "./Projects.js";
import Contact from "./ContactMe";
import {Link} from 'react-router-dom';

function Header(){
    return(
        <div className = "header">
            <nav className = "Navbar">
        
                <Link to = "/Home" exact component = {Home}> Home </Link>
                <Link to = "/AboutMe" exact component = {AboutMe}> About Me </Link>
                <Link to = "/Projects" exact component = {Projects}> Projects </Link>
                <Link to = "/Contact" exact component = {Contact}> Contact </Link>
                
            </nav>
        </div>
    );
}

export default Header;