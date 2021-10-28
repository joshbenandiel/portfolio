import "../styles/Main.css"
import React from "react"
import { Container, Row, Col } from "reactstrap";
import  MainImage from "../images/main-img.png" 
import ScrollToTop from "./ScrollToTop";


const Main = ({toggleOn}) => {
    return (
    <>
        <Container className="main" fluid={false}>
            <Row>
                <Col lg="6" sm="12">
                   <div className="main-col pr-3">
                        <p className="welcome">WELCOME TO MY WORLD</p>
                        <h1 className={toggleOn ? "name-on" : "name"}>Hi, I'm <span className="name-color">Joshua Jacinto</span></h1>
                        <h1 className={toggleOn ? "web-light" : "web"}>a Front-End Web Developer.</h1>
                        <p className="main-paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                        <p className="find">FIND WITH ME</p>
                        <div className="logo-position">
                            <i className="logo fab fa-facebook-square"></i>
                            <i className="logo fab fa-instagram"></i>
                            <i class="logo fab fa-linkedin"></i>
                        </div>                
                   </div>
                </Col>
                <Col lg="6" sm="12">
                    <div className="picture-img ">
                        <div className={toggleOn ? "second-col-light" : "second-col"}>
                            <img  className="main-image"src={MainImage} alt="formal-picture"></img>
                            
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        
    </>
    )
}

export default Main
