import React from 'react'
import Bio from './Bio'
import Projects from './Projects'

const Hero = () => {
    return(
        <div className = 'main-layout'>
           <Bio/>
           <Projects/>
        </div>
    )
}

export default Hero