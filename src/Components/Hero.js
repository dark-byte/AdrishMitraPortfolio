import React from 'react'
import {HiDownload} from 'react-icons/hi'
import resume from '../Assets/Adrish-Resume-24.pdf'

const Hero = () => {
  return (
    <div className='hero'>
        <h1><span className='hero-highlight'>ADRISH</span> MITRA</h1>
        <p>Computer Science Student, Freelancer, Web Developer...</p>
        <div className="resume-btn-div">
          <button className='resume-btn'>
            <a href={resume} download='Adrish_Mitra_Resume' target='_blank' rel='noreferrer' className='resume-btn-a'>
              Download Resume <HiDownload style={{transform: 'translateY(2px)'}}/>
            </a>
          </button>
        </div>
        
    </div>
  )
}

export default Hero
