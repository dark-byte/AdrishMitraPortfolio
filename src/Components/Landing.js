import React from 'react'
import Hero from './Hero'
import Nav from './Nav'

const Landing = () => {
  return (
    <div className='landing snap-container' id='landing'>
      <Nav/>
      <Hero/>
    </div>
  )
}

export default Landing
