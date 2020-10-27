import React from "react";
import mainLogo from "../assets/bethechange_logo.png";
import "./Header.css";
import { Link } from "react-router-dom";



function Header() {
    return (
        <div class="header-bar">
            <Link to={`/`}>
            <img class="logo" src={mainLogo}/> </Link>
        </div>
    )
}




export default Header;




