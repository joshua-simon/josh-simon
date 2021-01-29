import React from 'react'

const ProjectItem = (props) => {
    const {projects} = props
    return(
        <div>
            {
                projects.map(project => {
                    const {name, image, techStack,blurb, url} = project
                    return (
                        <div className = 'project-container'>
                            <h3>{name}</h3>
                            <p>Tech stack: {techStack}</p>
                            <p>{blurb}</p>
                            <br></br>
                            <img src = {image}></img>
                            <h4><a href = {url} style  = {{'text-decoration': 'none'}}>Website</a></h4>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default ProjectItem