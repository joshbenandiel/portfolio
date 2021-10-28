import React from 'react'
import "../styles/ContactInput.css"



const ContactInput = ({contactInput , changeName, name, value , toggleOn}) => {

  
  return (
    <div >
      <input 
        name={name}
        value={value}
        onChange={changeName}
        className={toggleOn ? "contact-input-light" : "contact-input"}
        type="text" 
        placeholder={contactInput}></input>
    </div>
  )
}

export default ContactInput

