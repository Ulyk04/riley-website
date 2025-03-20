import { div } from 'framer-motion/client';
import React from 'react'
import { useState } from 'react'
import '../styles/accordian.css'

const Accordian = ({title , content}) => {

    const [isActive , setisActive] = useState(false);

  return (
    <div className='accordian'>

        <div className="accordian-item">
            <div className="accordian-title" onClick={() => setisActive(!isActive)} >
                <div> <h1>{title}</h1>   </div>
                <div> <h1>{isActive ? '-' : '+'} </h1>  </div>
            </div>
            <div className="accordian-content">
                {isActive &&  <div className='accordian-desc' >  <p> {content} </p> </div>}
            </div>
        </div>

    </div>
  )
}

export default Accordian