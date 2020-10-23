import React from "react";
import mainLogo from "../assets/bethechange_logo.png";
import "./Header.css";



function Header() {
    return (
        <div class="header-bar">
            <img class="logo" src={mainLogo} alt="website logo" />
        </div>
    )
}

export default Header;




