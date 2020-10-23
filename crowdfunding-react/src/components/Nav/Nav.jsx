import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";



function Nav() {
    return (
        <nav class="header">
            <img class="logo" src="../assets/bethechange_logo.png"></img>
            <Link class="nav-link" to="/">Home</Link>
            <Link class="nav-link" to="/project">Project</Link>
        </nav>
    );
}



export default Nav;