import React from "react";
import banner1 from "../assets/bethechange_banner_1260x600_1.jpg";
import banner2 from "../assets/buttons_createchange2.jpg";
import "./Carousel.css";
import { Link } from "react-router-dom";






function Carousel() {
    return (
        <div class="carousel-wrapper">
            <img class="banner" src={banner1} alt="" />

            <Link to={`/newproject`}>
            <img class="banner2" src={banner2}/> </Link>

        </div>
    )
}

  
  export default Carousel;
























