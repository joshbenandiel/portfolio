import React from 'react'
import "../styles/ContactInput.css"
const ContactInput = ({contactInput}) => {
  return (
    <div >
      <input className="contact-input" type="text" placeholder={contactInput}></input>
    </div>
  )
}

export default ContactInput

