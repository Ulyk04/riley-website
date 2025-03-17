import React from 'react'
import '../styles/card.css'

const Card = ({children , text , desc}) => {
  return (
    <div className='card-component' >
        <div className="main-card">
            <img src={children} alt="" />
            <h1> {text} </h1>
            <p> {desc} </p>
        </div>
    </div>
  )
}

export default Card