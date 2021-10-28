import React from 'react'
import "../styles/Toggle.css"

const Toggle = ({ toggleOn , toggle }) => {
  return (
    <div
    onClick={toggleOn} 
    className={toggle ? "switch" : "switchOn"}>
      <div  className="slider">      
      <span className={toggle ? "round" : "roundOn"}></span>
      </div>
    </div>
  )
}

export default Toggle
