import React from 'react'
import josh from '../Photos/josh.png'
import logo from '../Photos/logo2.png'

const Homepage = () => {
    return (
        <div>
        <>
        <div>
            <h1>Joshua Simon</h1>
            <br></br>
            <br></br>
            <br></br>
            <h1 className = 'h1-webdev'>Web Developer</h1>
            <h2> Projects</h2>
            <div className = 'project-container'>
        <div className = 'hashigo'>
            <div>
           <h2 className = 'number'>1/</h2><h2 className = 'project-name'>Gig Fort</h2>
           <a href = 'https://gigfort.nz' target="_blank">
           <h3 className = 'links'>Website</h3>
           </a>
           <a href = 'https://github.com/joshua-simon/gig-fort' target="_blank">
           <h3 className = 'links'>Code</h3>
           </a>
           </div>
        </div>
        <div className = 'chore-share'>
            <div>
           <h2 className = 'number'>2/</h2><h2 className = 'project-name'>Hashigo Zake website</h2>
           <a href = 'https://hashigo-zake.herokuapp.com' target="_blank">
           <h3 className = 'links'>Website</h3>
           </a>
           <a href = 'https://github.com/joshua-simon/hashigo-zake-v2/' target="_blank">
           <h3 className = 'links'>Code</h3>
           </a>
           </div>
        </div>
        <div className = 'fml'>
            <div>
           <h2 className = 'number'>3/</h2><h2 className = 'project-name'>Follow My Lead</h2>
           <a href = 'https://f-m-l.herokuapp.com' target="_blank">
           <h3 className = 'links'>Website</h3>
           </a>
           <a href = 'https://github.com/kahu-2020/Follow-My-Lead' target="_blank">
           <h3 className = 'links'>Code</h3>
           </a>
           </div>
        </div>
        </div>
        </div>
        </>
        </div>
    )
}

export default Homepage