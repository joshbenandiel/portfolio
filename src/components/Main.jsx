import "../styles/Main.css"
import React from "react"
import { Container, Row, Col } from "reactstrap";
import  MainImage from "../images/main-img.png" 



const Main = ({toggleOn}) => {
    return (
    <>
    <Container className="main" fluid={false}>
        <Row>
            <Col lg="6" sm='12'>
              <div className="main-col pr-3 mb-5">
                  <p className="welcome">WELCOME TO MY WORLD</p>
                  <h1 className={toggleOn ? "name-on" : "name"}>Hi, I'm <span className="name-color">Joshua Jacinto</span></h1>
                  <h1 className={toggleOn ? "web-light" : "web"}>a Front-End Web Developer.</h1>
                  <p className="main-paragraph">Bachelor of Science in Computer Engineering</p>
                  <p className="find">FIND WITH ME</p>
                  <div className="logo-position">
                    <div className={toggleOn ? 'logo-theme-light' : 'logo__container'}>
                      <a href="https://facebook.com/joshbenandiel" target='_blank' rel="noopener noreferrer">
                        <i className={`${toggleOn ? `logo-light`: `logo`} bx bxl-facebook`}></i>
                      </a>
                    </div>
                    <div className={toggleOn ? 'logo-theme-light' : 'logo__container'}>
                      <a href="https://instagram.com/joshbenandiel" target='_blank' rel="noopener noreferrer">
                        <i className={`${toggleOn ? `logo-light`: `logo`} bx bxl-instagram`}></i>
                      </a>
                    </div>
                    <div className={toggleOn ? 'logo-theme-light' : 'logo__container'}>
                      <a href="https://www.linkedin.com/in/joshua-jacinto-b357541b2/" target='_blank' rel="noopener noreferrer">
                        <i className={`${toggleOn ? `logo-light`: `logo`} bx bxl-linkedin`}></i>
                      </a>
                    </div>
                  </div>                
              </div>
            </Col>
            <Col className='d-flex align-items-center justify-content-center' lg="6" sm='12'>
              <div className={toggleOn ? "second-col-light" : "second-col"}>
                <img  className="main-image"src={MainImage} alt="formal-attire"></img>      
              </div>
            </Col>
        </Row>
    </Container>
    </>
    )
}

export default Main
