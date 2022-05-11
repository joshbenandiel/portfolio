import React from 'react'
import TitleHeader from "./TitleHeader"
import "../styles/TitleHeader.css"
import "../styles/Portfolio.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import '../styles/PortfolioCard.css'
import netflix from '../images/netflix.png'
import ecommerce from '../images/ecommerce.png'
import emart from '../images/emart.jpg'
import facebook from '../images/facebook.png'

const mixitup = require('mixitup');

interface Props {
  toggleOn: boolean | null
}

const Portfolio: React.FC<Props> = ({toggleOn}) => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])
  
  const filtering = () => {
    var containerEl = document.querySelector('.portfolio-container');
    mixitup(containerEl, {
      selectors: {
          target: '.mix'
      },
      animation: {
          duration: 300
      }
    });
  }

  useEffect(() => {
    filtering()
  })
  
  return (
    <section className="port-wrapper" id="portfolio">
      <div className="title-wrapper">
        <div className="port-title">
        <TitleHeader
        toggleOn={toggleOn}
        title="My Portfolio"
        />
        <h2 data-aos="fade-up">Visit My Portfolio & Keep Your Feedback</h2>
        </div>
      </div>
      <div className="card-wrapper">
        <div className='portfolio-button-section' data-aos="slide-right">
          <button className='btn btn-danger' type="button" data-filter="all">All</button>
          <button className='btn btn-danger' type="button" data-filter=".category-b">Ecommerce</button>
          <button className='btn btn-danger' type="button" data-filter=".category-a">User</button>
        </div>
        <div className='portfolio-wrapper'>
          <div className="portfolio-container mt-5" data-aos="slide-left">
            <div className="mix category-a" data-order="1">
              <div className={toggleOn ? "portfolio-card-light" : "portfolio-card"}>
                  <img className='netflix-website' src={netflix} alt="netflix-website" />
                  <div className='visit-page-button'>
                    <a href="https://netflixapi.netlify.app/" target='_blank' rel="noopener noreferrer">     
                      <button className='btn btn-outline-danger' type="button">Visit Page</button>
                    </a>
                  </div>
              </div>
            </div>
            <div className="mix category-b" data-order="2">
              <div className={toggleOn ? "portfolio-card-light" : "portfolio-card"}>
                  <img className='netflix-website' src={ecommerce} alt="netflix-website" />
                  <div className='visit-page-button'>
                    <a href="https://applestoreecom.netlify.app/" target='_blank' rel="noopener noreferrer">
                      <button className='btn btn-outline-danger' type="button">Visit Page</button>
                    </a>
                  </div>
              </div>
            </div>
            <div className="mix category-b" data-order="3">
              <div className={toggleOn ? "portfolio-card-light" : "portfolio-card"}>
                  <img className='netflix-website' src={emart} alt="netflix-website" />
                  <div className='visit-page-button'>
                    <a href="https://ecommerceapi.netlify.app/" target='_blank' rel="noopener noreferrer">
                      <button className='btn btn-outline-danger' type="button">Visit Page</button>
                    </a>
                  </div>
              </div>
            </div>
            <div className="mix category-a" data-order="4">
              <div className={toggleOn ? "portfolio-card-light" : "portfolio-card"}>
                  <img className='netflix-website' src={facebook} alt="netflix-website" />
                  <div className='visit-page-button'>
                    <a href="https://facebookv2.netlify.app/" target='_blank' rel="noopener noreferrer">     
                      <button className='btn btn-outline-danger' type="button">Visit Page</button>
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>     
      
    </section>
    
      
    
  )
}

export default Portfolio
