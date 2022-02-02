import React from 'react'
import "../styles/Who.css"
import { Container, Row, Col } from "reactstrap";
import { Button } from 'reactstrap';
import TitleHeader from "./TitleHeader"
import MyPicture from "../images/main-img.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import pdf from '../pdf/Resume-2022.pdf'


const WhoAmI = ({toggleOn}) => {

    useEffect(() => {
        AOS.init({duration: 1000});
    }, [])
    return (
      <Container id="about">
        <Row>
          <Col className='d-flex justify-content-center align-items-center' lg={{ size: 6, order: 1}} sm={{ size: 12, order: 2}} xs={{ size: 12, order: 2}}>
            <div className={toggleOn ? "second-col-who-light" : "second-col-who"} data-aos="slide-right">
              <img  className="who-picture"  src={MyPicture} alt="formal-attire"></img>
            </div>
          </Col>
          <Col className='d-flex justify-content-center align-items-center mt-5'lg={{ size: 6, order: 1}}  sm={{ size: 12, order: 1}} xs={{ size: 12, order: 1}}>
            <div className="who-content col">  
              <div className='who-title-header'>
                <TitleHeader
                toggleOn={toggleOn}
                title="Who I am?"
                />
              </div>      
              <p className="main-paragraph" data-aos="fade-left" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p className="main-paragraph mb-5" data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <div className="w-100 text-center">
                <a href={pdf} download='Jacinto-Joshua-Resume'>
                  <Button className="download-pdf" color="danger" size="lg" data-aos="fade-up">Download PDF</Button>
                </a>
              </div>
            </div>        
          </Col>
        </Row>
      </Container>
    )
}

export default WhoAmI
