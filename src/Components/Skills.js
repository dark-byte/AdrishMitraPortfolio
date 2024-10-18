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
                            <p>Skilled in full stack development with a focus on the <span className='skill-highlight'>MERN stack</span>, I bring 3+ years of expertise in building<span className='skill-highlight'> responsive web applications</span> using MERN, ensuring seamless user experiences.</p>
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
                            <p>With 4+ years of experience in Python development, I have a strong background in creating<span className='skill-highlight'> bots, web scrapers, and automation tools</span>, delivering efficient and reliable solutions.</p>
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
                            <p>Throughout my engineering journey, I have developed a solid grasp of<span className='skill-highlight'> Data Structures, Algorithms, OOP, Cloud Computing and Machine Learning</span> allowing me to build efficient software systems.</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Skills
