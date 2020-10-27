import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";




function Nav() {
    return (
        <nav class="header">
            <Link class="nav-link" to="/">Home</Link>
            <Link class="nav-link" to="/project">Project</Link>
            <Link class="nav-link" to="/login">Login</Link>
            {/* <Link class="nav-link" to="/logout">Login</Link> */}
        </nav>
    );
}



export default Nav;