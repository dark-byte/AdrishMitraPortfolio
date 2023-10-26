import React, { useEffect, useState } from 'react'
import {BsArrowUp} from  'react-icons/bs'

const GoToTop = () => {
    const [showBtn, setShowBtn] = useState(false);
    useEffect(()=>{
        const handScrollBtnVisibility = ()=>{
            window.scrollY > 800 ? setShowBtn(true) : setShowBtn(false)
        }

        window.addEventListener('scroll', handScrollBtnVisibility)
        return ()=>{
            window.removeEventListener('scroll', handScrollBtnVisibility)
        }
    },[])
  return (
    <div id="goto-btn" className={`${showBtn ? 'goto-top-btn view-goto': 'goto-top-btn'}`}>
        <button onClick={()=> document.querySelector('#landing').scrollIntoView({behavior: 'smooth'})}><BsArrowUp/></button>
    </div>
  )
}

export default GoToTop
