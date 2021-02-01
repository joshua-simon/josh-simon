import React from 'react'
import react_logo from '../Photos/react_logo.png'
import redux_logo from '../Photos/redux_logo.png'
import css_logo from '../Photos/css_logo.jpg'
import firebase_logo from '../Photos/firebase_logo.png'
import sqlite_logo from '../Photos/sqlite_logo.png'
import node_image from '../Photos/node_image.png'
import {Link} from 'react-router-dom'

const Bio = () => {
    return(
        <div className = 'bio'>
            <h2>Hi! I'm Josh</h2>
           <p> I'm a <a href = 'https://github.com/joshua-simon'>web developer</a>, <Link to = {'/thesis'}> scientist</Link> and <a href = 'https://soundcloud.com/josh-simon-264281792'>musician</a>. <br></br>
           <br></br>
            I'm good with React.js, building engaging UI and UX, and all things
            involving front-end development. <br></br>
            Pretty savvy with back-end stuff too. <br></br>
            <br></br>
            I enjoy working with people, as well as the process of product development, and 
            would like to join a Wellington-based tech company. <br></br>
            <br></br>
            Here's my skill set:
            </p>
            <ul>
                <div className = 'skill'>
                <img src = {react_logo}></img><li>React</li>
                </div>
                <div className = 'skill'>
                <img src = {redux_logo}></img><li>Redux</li>
                </div>
                <div className = 'skill'>
                <img src = {css_logo}></img><li>CSS</li>
                </div>
                <div className = 'skill'>
                <img src = {node_image}></img><li>Node</li>
                </div>
                <div className = 'skill'>
                <img src = {firebase_logo}></img><li>Firebase</li>
                </div>
                <div className = 'skill'>
                <img src = {sqlite_logo}></img><li>SQLite3</li>
                </div>
                <li>Responsive web design</li>
                <li>RESTful APIs</li>
            </ul>
        </div>
    )
}

export default Bio