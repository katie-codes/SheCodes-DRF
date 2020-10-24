import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProjectPage() {
    const [projectData, setProjectData] = useState({ projects: [], pledges: [] });
    const { id } = useParams();

    useEffect(() => {
        const token = window.localStorage.getItem("token")

        fetch(`${process.env.REACT_APP_API_URL}projects/${id}/`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })

        .then((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectData(data);
        });
    }, [id]);





return (
    <div>
        <h2>{projectData.title}</h2>
        <h3>Created at: {projectData.date_created}</h3>
        <h3>Project Type: {projectData.category}</h3>
        <h3>Goal: {projectData.goal}</h3>
        <h3>{`Status: ${projectData.is_open}`}</h3>
        <p>{projectData.description}</p>        
        <h3>Goal: {projectData.owner}</h3>
        <h3>Pledges:</h3>
        {(projectData.pledges) ? 
        <ul>
            {projectData.pledges.map((pledgeData, key) => {
            return (
                <li key={key}>
                    ${pledgeData.amount} from {pledgeData.supporter_id}
                </li>
                );
            })}
        </ul>: null }
    </div>

);
}

export default ProjectPage;
