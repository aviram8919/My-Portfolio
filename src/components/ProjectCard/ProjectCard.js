import React from 'react'

import './project-card.css';

export const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <p><b>Name:</b> {project.name}</p>
            <p><b>Aim:</b> {project.Aim}</p>
            <p><b>Learning-Outcome:</b> {project.LearningOutcome}</p>
            <p><b>Link:</b> <a href={project.link}>{project.link}</a> </p>
        </div>
    )
}