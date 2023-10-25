import React, { useState } from 'react'
import eduList from '../Data/Edu'
import {AiOutlinePlusCircle, AiOutlineMinusCircle} from 'react-icons/ai'
import {MdLocationOn} from 'react-icons/md'

const Education = () => {
    const [active, setActive] = useState(null)
    const toggleActive = (id)=>{
        if(active === id){
            setActive(null)
        }else{
            setActive(id)
        }
    }
  return (
    <div className='education snap-container' id='education'>
      <h1>My Education</h1>
      <div className="edu-card-container">
        {
            eduList.map(item =>{
                return(
                    <div key = {item.id} style={{transition: 'all ease 0.5s'}}>
                        <div className={`${active === item.id? "edu-card edu-card-highlight" : 'edu-card'}`}id={item.id} onClick={()=>toggleActive(item.id)}>
                            <h3>{item.institution}</h3>
                            <div className="edu-card-right" >
                                <h3>{item.duration} 
                                {item.id === active ? 
                                    <AiOutlineMinusCircle className='edu-icon'/> :
                                    <AiOutlinePlusCircle className='edu-icon'/>  
                                }
                                </h3>
                            </div>
                        </div>
                        <div className={`${active === item.id ? 'edu-card-info edu-view' : 'edu-card-info'}`}>
                            <div style={{margin: '1rem 0', padding: '2rem'}}>
                                <h3><MdLocationOn className='edu-location-icon'/> {item.location}</h3>
                                <p>{item.info}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  )
}

export default Education