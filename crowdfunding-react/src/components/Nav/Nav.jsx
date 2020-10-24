import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";




function Nav() {
    return (
        <nav class="header">
            <Link class="nav-link" to="/">Home</Link>
            <Link class="nav-link" to="/project">Project</Link>
            <p> </p>


        </nav>
    );
}



export default Nav;