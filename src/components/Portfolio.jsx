import React from 'react'
import TitleHeader from "./TitleHeader"
import "../styles/TitleHeader.css"
import PortfolioCard from "./PortfolioCard"
import "../styles/Portfolio.css"
import { Container, Row, Col } from "reactstrap";


const Portfolio = () => {
  return (
    <section className="port-wrapper" id="portfolio">
      <div className="title-wrapper">
        <div className="port-title">
        <TitleHeader
        title="My Portfolio"
        />
        <h2>Visit My Portfolio & Keep Your Feedback</h2>
        </div>
      </div>
      <div className="card-wrapper">
        <Container>
          <Row>
            <Col lg="4" md="6" sm="12">
              <PortfolioCard/>
            </Col>
            <Col lg="4" md="6" sm="12">
              <PortfolioCard/>
            </Col> 
            <Col lg="4" md="6" sm="12">
              <PortfolioCard/>
            </Col>         
            
          </Row>
        </Container>
      </div>     
      
    </section>
    
      
    
  )
}

export default Portfolio
