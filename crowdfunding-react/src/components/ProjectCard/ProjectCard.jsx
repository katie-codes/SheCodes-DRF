import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.css";
import wind from "../assets/bethechange_icons_wind.png";




function ProjectCard(props) { 
    
const { projectData } = props; 
return (
    <div className="project-card">
    <Link to={`/projects/${projectData.id}`}>
    <img src={projectData.image}/> </Link>
    <h3>{projectData.title}</h3>

    
    <p> ${projectData.sum} raised of ${projectData.goal} goal</p>
    <p>{projectData.short_description}</p>


    <Link to={`/projects/${projectData.id}`}>
    <h5>Read More</h5></Link>

    {/* <img class="icon" src={wind} alt="wind" /> */}

    </div>
    
    ); 
}

export default ProjectCard;