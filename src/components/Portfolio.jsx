import React from 'react'
import TitleHeader from "./TitleHeader"
import "../styles/TitleHeader.css"
import PortfolioCard from "./PortfolioCard"
import "../styles/Portfolio.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



const Portfolio = ({toggleOn}) => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])
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
        <PortfolioCard
        toggleOn={toggleOn}
        />
      </div>     
      
    </section>
    
      
    
  )
}

export default Portfolio
