import React from 'react'
import projects from '../projectData'
import ProjectItem from './ProjectItem'

const Projects = () => {
    return(
        <div className = 'projects'>
            <h2>Projects</h2>
            <div className = 'project-container-container'>
            <ProjectItem projects = {projects}/>
            </div>
        </div>
    )
}

export default Projects