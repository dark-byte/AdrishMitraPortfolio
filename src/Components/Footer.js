import React from 'react'
import {BiLogoReact} from 'react-icons/bi'

const Footer = () => {
  return (
    <div className='footer'>
      <p className='footer-p-bottom'>Made With React <BiLogoReact className='react-icon'/></p>
      <hr />
      <p>© 2023 Adrish Mitra. All Rights Reserved.</p>
    </div>
  )
}

export default Footer
