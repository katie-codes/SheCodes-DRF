import React from "react";
import cycling from "../assets/bethechange_cycling.png";
import bags from "../assets/bethechange_icons_bags.png";
import bins from "../assets/bethechange_icons_bins.png";
import electric from "../assets/bethechange_icons_electric.png";
import event from "../assets/bethechange_icons_event.png";
import planting from "../assets/bethechange_icons_planting.png";
import plastic from "../assets/bethechange_icons_plastic.png";
import solar from "../assets/bethechange_icons_solar.png";
import wind from "../assets/bethechange_icons_wind.png";
import "./Categories.css";



function Categories() {
    return (
        
        // <div>
        // <Link to={`/projects/${projectData.category}`}>
        // <img src={cycling}/> </Link>
        // <h3>{projectData.category}</h3>
        // </div>

        <div class="icons-container">
            <h1>Choose a category</h1>
            <br></br>
            <img class="icons" src={wind} alt="wind" />
            <img class="icons" src={cycling} alt="cycling" />
            <img class="icons" src={bags} alt="bags" />
            <img class="icons" src={planting} alt="planting" />
            <img class="icons" src={solar} alt="solar" />
            <img class="icons" src={event} alt="event" />
            <img class="icons" src={plastic} alt="plastic" />
            <img class="icons" src={electric} alt="electric" />
        </div>











    )
}

export default Categories;

