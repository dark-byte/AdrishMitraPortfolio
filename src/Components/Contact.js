import React from 'react'
import {AiFillLinkedin, AiFillGithub, AiFillInstagram} from 'react-icons/ai'
import {MdEmail} from 'react-icons/md'

const Contact = () => {
  return (
    <div className='contact' id='contact'>
        <h1>Contact Me</h1>
        <p>Open to work, connect with me through the following platforms!</p>

        <div className="socials-container">
            <div className="socials" onClick={()=> window.open('mailto:adrishmitra710@gmail.com', '_blank')}>
                <MdEmail className='social-icon'/>
                <div className='socials-content'>
                    <p>email</p>
                    <a href='mailto:adrishmitra710@gmail.com' target='_blank' rel='noreferrer'>adrishmitra710@gmail.com</a>
                </div>
            </div>
            <div className="socials" onClick={()=> window.open('https://www.linkedin.com/in/adrish-mitra-b804a721b/', '_blank')}>
                <AiFillLinkedin className='social-icon'/>
                <div className="socials-content">
                    <p>linkedIn</p>
                    <a href='https://www.linkedin.com/in/adrish-mitra-b804a721b/' target='_blank' rel='noreferrer'>Adrish Mitra</a>
                </div>
            </div>
            <div className="socials" onClick={()=> window.open('https://github.com/dark-byte', '_blank')}>
                <AiFillGithub className='social-icon'/>
                <div className="socials-content">
                    <p>github</p>
                    <a href='https://github.com/dark-byte' target='_blank' rel='noreferrer'>dark-byte</a>
                </div>
            </div>
            <div className="socials" onClick={()=> window.open('https://www.instagram.com/adrish_mitra/', '_blank')}>
                <AiFillInstagram className='social-icon'/>
                <div className="socials-content">
                    <p>instagram</p>
                    <a href='https://www.instagram.com/adrish_mitra/' target='_blank' rel='noreferrer'>adrish_mitra</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact
