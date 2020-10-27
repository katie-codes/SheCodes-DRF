
import React, { useState, useEffect } from "react";
// import { allProjects } from "../data";
import ProjectCard from "../components/ProjectCard/ProjectCard";
import Categories from "../components/Categories/Categories";



function HomePage() {
    const [projectList, setProjectList] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}projects/`, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
        })

        .then ((results) => {
            return results.json();
        })
        .then((data) => {
            setProjectList(data);
        });
    }, []);

return (

<div>
<div id="project-list">
    {projectList.map((projectData, key) => {
        return <ProjectCard key={key} projectData={projectData} id={projectData.id}/>;
    })}
</div>
<Categories />
</div>
);
}


{/* <div class="header" href="/">
    <img src="/assets/bethechange_logo.jpg"> 
    </img>
</div> */}










export default HomePage;