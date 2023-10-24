import React from 'react'
import {AiFillHtml5} from 'react-icons/ai'
import {SiCsswizardry, SiMysql} from 'react-icons/si'
import {BiLogoJavascript, BiLogoPython, BiLogoJava, BiLogoReact, BiLogoMongodb, BiLogoAdobe} from 'react-icons/bi'
import {FaNode} from 'react-icons/fa'
import {TbBrandCpp} from 'react-icons/tb'

const Icons = () => {
  return (
    <div className='icons-array'>

      <div className="icons-item">
        <AiFillHtml5/>
      </div>

      <div className="icons-item">
        <SiCsswizardry/>
      </div>

      <div className="icons-item">
        <BiLogoJavascript/>
      </div>
      <div className="icons-item">
        <BiLogoPython/>
      </div>
      <div className="icons-item">
        <FaNode/>
      </div>
      <div className="icons-item">
        <BiLogoReact/>
      </div>
      <div className="icons-item">
        <BiLogoMongodb/>
      </div>
      <div className="icons-item">
        <SiMysql/>
      </div>
      <div className="icons-item">
        <BiLogoJava/>
      </div>
      <div className="icons-item">
        <TbBrandCpp/>
      </div>
      <div className="icons-item">
        <BiLogoAdobe/>
      </div>
    </div>
  )
}

export default Icons
