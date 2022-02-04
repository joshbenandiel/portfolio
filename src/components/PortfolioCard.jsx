import React, { useState } from 'react'
import "../styles/PortfolioCard.css"
import ReactCardFlip from 'react-card-flip';
import ecomImage from '../images/ecom-image.PNG'
import netflixImage from '../images/netflix-image.PNG'

const PortfolioCard = (toggleOn) => {

  const [isFlipped, setIsFlipped] = useState(false)

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  const [heartIsClick , setHeartIsClick] = useState(false)
  const [heartIsClick1 , setHeartIsClick1] = useState(false)
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedFrontToBack='1' flipSpeedFrontToFront='1'>
        <div className='d-flex justify-content-center align-items-center'>
          <div className={toggleOn ? "portfolio-card-light" : "portfolio-card"}>
              <img className='netflix-website' src={netflixImage} alt="netflix-website" />
              <i onClick={() => setHeartIsClick(!heartIsClick)} className={`bx bxs-heart bx-lg ${heartIsClick ? `heart-button-active` : `heart-button`}`}></i>
              <a href="https://main.d31g18hqzwqtzt.amplifyapp.com/" target='_blank' rel="noopener noreferrer">
               <button className='btn btn-outline-danger visit-button'>Visit Website</button>
              </a>
          </div>
        </div>
        <div className='d-flex justify-content-center align-items-center'>
          <div className={toggleOn ? "portfolio-card-light" : "portfolio-card"}>
           <img className='ecommerce-website' src={ecomImage} alt="ecommerce-website" />
           <i onClick={() => setHeartIsClick1(!heartIsClick1)} className={`bx bxs-heart bx-lg ${heartIsClick1 ? `heart-button-active` : `heart-button`}`}></i>
           <a href="https://master.d2e9splpji5fdj.amplifyapp.com/" target='_blank' rel="noopener noreferrer">
            <button  className='btn btn-outline-danger visit-button'>Visit Website</button>
           </a>
          </div>
        </div>
      </ReactCardFlip>
      <button className={isFlipped ? 'flip-button-active' :'flip-button'} onClick={handleClick}><i className="fas fa-sync-alt"></i></button>
    </div>
  )
}

export default PortfolioCard
