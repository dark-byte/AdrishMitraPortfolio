import React, { useEffect, useState } from 'react'

const FLoatingNav = () => {
    const [show, setShow] = useState(false)

    const scrollEvent = ()=>{
        window.scrollY > 80 ? setShow(true) : setShow(false)
    }

    useEffect(()=>{
        window.addEventListener('scroll', scrollEvent)
        return () =>{
            window.removeEventListener('scroll', scrollEvent)
        }
        
    }, [])

  return (
    <div>
      <div className={`nav floating-nav ${show && 'show-nav'}`}>
        <ul>
          {// eslint-disable-next-line
          }
          <li><a href="#landing">{'// home'}</a></li>
          <li><a href="#skills-container">{'// skills'}</a></li>
          <li><a href="#work">{'// work'}</a></li>
          <li><a href="#education">{'// education'}</a></li>
          <li><a href="#contact">{'// contact'}</a></li>
        </ul>
        </div>
    </div>
  )
}

export default FLoatingNav
