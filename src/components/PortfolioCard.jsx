import React, { useState } from 'react'
import "../styles/PortfolioCard.css"
import ReactCardFlip from 'react-card-flip';
import ecommerce from '../images/ecom-image.PNG'
import netflix from '../images/netflix-image.PNG'

const PortfolioCard = (toggleOn) => {

  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }
  return (
    <>
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedFrontToBack='1' flipSpeedFrontToFront='1'>
      <div>
        <div className={toggleOn ? "portfolio-card-light" : "portfolio-card"}>
            <h1 className='text-white'>front</h1>
        </div>
        <button className='flip-button' onClick={handleClick}><i class="fas fa-sync-alt"></i></button>
      </div>
      <div>
        <div className={toggleOn ? "portfolio-card-light" : "portfolio-card"}>
            <h1 className='text-white'>back</h1>
        </div>
        <button className='flip-button' onClick={handleClick}><i class="fas fa-sync-alt"></i></button>
      </div>
    </ReactCardFlip>
    </>
  )
}

export default PortfolioCard
