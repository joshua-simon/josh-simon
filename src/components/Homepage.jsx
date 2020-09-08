import React from 'react'
import josh from '../Photos/josh.png'

const Homepage = () => {
    return (
        <div>
        <>
        <div>
            <h1>Joshua Simon / Web Developer</h1>
            <h2>/ Projects</h2>
        <div className = 'hashigo'>
            <div>
           <h2 className = 'number'>1/</h2><h2 className = 'project-name'>Hashigo Zake Website</h2>
           <a href = 'https://hashigo-zake.herokuapp.com'>
           <h3 className = 'links'>Website</h3>
           </a>
           <a href = 'https://github.com/joshua-simon/hashigo-zake-v2/'>
           <h3 className = 'links'>Code</h3>
           </a>
           </div>
        </div>
        <div className = 'chore-share'>
            <div>
           <h2 className = 'number'>2/</h2><h2 className = 'project-name'>Chore Share (in progress)</h2>
           <a href = 'https://chore-share.herokuapp.com/'>
           <h3 className = 'links'>Website</h3>
           </a>
           <a href = 'https://github.com/joshua-simon/chore-share-v2'>
           <h3 className = 'links'>Code</h3>
           </a>
           </div>
        </div>
        <div className = 'fml'>
            <div>
           <h2 className = 'number'>3/</h2><h2 className = 'project-name'>Follow My Lead</h2>
           <a href = 'https://f-m-l.herokuapp.com'>
           <h3 className = 'links'>Website</h3>
           </a>
           <a href = ''>
           <h3 className = 'links'>Code</h3>
           </a>
           </div>
        </div>
        <div className = 'skills'>
        <h2>/ Skills</h2>
        <p>/ Version control: <br></br>
            Git, Github <br></br>
            / Javascript frameworks and libraries: <br></br>
            React, Redux, Node, Express <br></br>
            / Design: <br></br>
            Photoshop, figma, responsive design <br></br>
            / Soft skills: <br></br>
            Patience, communication, initiative, Agile <br></br>
            / Currently learning: <br></br>
            Typescript, Firebase

        </p>
        </div>
        </div>
        <img src = {josh}></img>
        </>
        </div>
    )
}

export default Homepage