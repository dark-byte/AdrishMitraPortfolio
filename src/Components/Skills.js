import React from 'react'
import {BsGlobe} from 'react-icons/bs'
import {TbBrandPython} from 'react-icons/tb'
import {MdOutlineDataObject} from 'react-icons/md'

const Skills = () => {
  return (
    <div className='skills snap-container' id='skills-container'>
        <div className="skills-content">
            <h1>My Skills</h1>
            <div className="skills-container">

                <div className="skill-box">
                    <div className="skill-box-top">
                        <div style={{display: 'flex'}}>
                            <BsGlobe className='skill-icon'/>
                            <h2>Full Stack Web <br></br> Development</h2>
                        </div>
                        <div className="skill-box-top-content">
                            <p>Experienced in Full Stack development, specializing in the <span className='skill-highlight'>MERN</span> Stack, with focus on <span className='skill-highlight'> React, NodeJS, ExpressJS, and MongoDB</span>, accumulating over 3+ years of expertise in these technologies.</p>
                        </div>
                    </div>
                </div>

                <div className="skill-box">
                    <div className="skill-box-top">
                        <div style={{display: 'flex'}}>
                            <TbBrandPython className='skill-icon'/>
                            <h2>Python App <br></br> Development</h2>
                        </div>
                        <div className="skill-box-top-content">
                            <p>Possessing over 4+ years of hands-on experience in crafting Python-based <span className='skill-highlight'>bots and web scrapers</span>, I have a proven track record of developing numerous <span className='skill-highlight'> automation projects and applications.</span></p>
                        </div>
                    </div>
                </div>

                <div className="skill-box">
                    <div className="skill-box-top">
                        <div style={{display: 'flex'}}>
                            <MdOutlineDataObject className='skill-icon'/>
                            <h2>Software <br></br>Development</h2>
                        </div>
                        <div className="skill-box-top-content">
                            <p>I have acquired a comprehensive understanding of <span className='skill-highlight'>Data Structures, Algorithms, and Object-Oriented Programming </span>principles during my engineering education.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Skills
