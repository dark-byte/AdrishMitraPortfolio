import React, { useState } from 'react'

const Work = () => {

  const [selected, setSelected] = useState(0);

  return (
    <div className='work snap-container' id='work'>
      <h1>My Work</h1>
      <div className="work-container">
        <h3>Filter by 
          <span onClick={()=> setSelected(0)} className= {`${ selected === 0 ? 'selected' : ''} filter-options all`} id='filter-all'> All</span>/ 
          <span onClick={()=> setSelected(1)} className={`${ selected === 1 ? 'selected' : ''} filter-options`} id='filter-web'> Web Development</span>/
          <span onClick={()=> setSelected(2)} className={`${ selected === 2 ? 'selected' : ''} filter-options`} id='filter-python'> Python</span>
        </h3>


      </div>

    </div>
  )
}

export default Work
