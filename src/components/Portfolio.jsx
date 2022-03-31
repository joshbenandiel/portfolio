import React from 'react'
import TitleHeader from "./TitleHeader"
import "../styles/TitleHeader.css"
import PortfolioCard from "./PortfolioCard"
import "../styles/Portfolio.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import '../styles/PortfolioCard.css'
import mixitup from 'mixitup'
import netflix from '../images/netflix.png'
import ecommerce from '../images/ecommerce.png'
import emart from '../images/emart.png'



const Portfolio = ({toggleOn}) => {

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
        <div className='portfolio-button-section'>
          <button className='btn btn-danger' type="button" data-filter="all">All</button>
          <button className='btn btn-danger' type="button" data-filter=".category-b">Ecommerce</button>
          <button className='btn btn-danger' type="button" data-filter=".category-a">User</button>
        </div>

        <div className="portfolio-container mt-5">
          <div className="mix category-a" data-order="1">
            <div className={toggleOn ? "portfolio-card-light" : "portfolio-card"}>
                <img className='netflix-website' src={netflix} alt="netflix-website" />
                <div className='visit-page-button'>
                  <a href="https://main.d31g18hqzwqtzt.amplifyapp.com/" target='_blank' rel="noopener noreferrer">     
                    <button className='btn btn-outline-danger' type="button">Visit Page</button>
                  </a>
                </div>
            </div>
          </div>
          <div className="mix category-b" data-order="2">
            <div className={toggleOn ? "portfolio-card-light" : "portfolio-card"}>
                <img className='netflix-website' src={ecommerce} alt="netflix-website" />
                <div className='visit-page-button'>
                  <a href="https://master.d2e9splpji5fdj.amplifyapp.com/" target='_blank' rel="noopener noreferrer">
                    <button className='btn btn-outline-danger' type="button">Visit Page</button>
                  </a>
                </div>
            </div>
          </div>
          <div className="mix category-b" data-order="3">
            <div className={toggleOn ? "portfolio-card-light" : "portfolio-card"}>
                <img className='netflix-website' src={emart} alt="netflix-website" />
                <div className='visit-page-button'>
                  <a href="https://master.d3lks2nb203l3p.amplifyapp.com/" target='_blank' rel="noopener noreferrer">
                    <button className='btn btn-outline-danger' type="button">Visit Page</button>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>     
      
    </section>
    
      
    
  )
}

export default Portfolio
