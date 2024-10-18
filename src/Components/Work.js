import React, { useState } from 'react'
import works from '../Data/WorkData';
import icon from '../Assets/skills-bg.jpg'
import {BsArrowRight} from 'react-icons/bs'

const Work = () => {

  const [workslist, setWorkList] = useState(works)
  const [selected, setSelected] = useState('all');

  const filterList = (currSel)=>{
    setSelected(currSel)
    const newList = works.filter(item =>{
      if(currSel === 'all'){
        return true
      }
      return item.category === currSel
    })
    setWorkList(newList)
  }

  return (
    <div className='work snap-container' id='work'>
      <h1>My Work</h1>
      <div className="work-container">
        <h3>Filter by 
          <span onClick={()=> filterList('all')} className={`${ selected === 'all' ? 'selected' : ''} filter-options all`} id='filter-all'> All</span>/ 
          <span onClick={()=> filterList('web')} className={`${ selected === 'web' ? 'selected' : ''} filter-options`} id='filter-web'> Web Development</span>/
          <span onClick={()=> filterList('python')} className={`${ selected === 'python' ? 'selected' : ''} filter-options`} id='filter-python'> Python</span>/
          <span onClick={()=> filterList('java')} className={`${ selected === 'java' ? 'selected' : ''} filter-options`} id='filter-java'> Java</span>/
          <span onClick={()=> filterList('cloud')} className={`${ selected === 'cloud' ? 'selected' : ''} filter-options`} id='filter-cloud'> Cloud</span>
        </h3>

        <div className="work-card-container">
          {
            workslist.map(item =>{
              return(
                <div key={item.title} className="work-card" onClick={()=> window.open(item.link, '_blank')}>
                  <div className="work-card-img-container">
                    {item.img ? 
                        <img src={item.img} alt={item.title} /> :
                        <img className='default-img' src={icon} alt={item.title}></img>
                    }
                  </div>
                  <h2>{item.title}</h2>
                  <a href={item.link} target='_blank' rel='noreferrer'>View Project <BsArrowRight style={{transform: 'translateY(3px)'}}/></a>
                  <p>{item.category}</p>
                </div>
              )
            })
          }
      </div>

      </div>

    </div>
  )
}

export default Work
