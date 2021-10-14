import React from 'react'
import "../styles/TitleHeader.css"

const TitleHeader = ({title}) => {
  return (
    <div className="title-wrapper">
      <h1 className="title-name">{title}</h1>
      <div className="red-underline"/>
    </div>
  )
}

export default TitleHeader
