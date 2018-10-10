import React, {Component} from 'react';
import { Link } from 'react-router-dom'

const Project = ({project}) => {
    console.log("proj", project)
    return(    
      <div>
        { project ? 
          
          <div className="project-card">
            <h3 className="project-card__title">{project.name}</h3>
            <h4 className="project-card__subtitle">By, {project.user_name}</h4>
            <p className="project-card__paragraph">{project.description}</p>
            <h6 className="project-card__subtitle">Technologies: {project.technology}</h6>
            <h6 className="project-card__subtitle">Duration: {project.duration}</h6>
            <p><a href={project.github_link} className="project-card__link" target="_blank">Github</a></p>
            <Link key={project.id} to={`/projects/${project.id}`} className="project-card__link">Learn More</Link>
          </div>
        : <p>Loading...</p>}
      </div>
        
    )
 
}

export default Project;
