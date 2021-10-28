import React from 'react'
import "../styles/Who.css"
import { Container, Row, Col } from "reactstrap";
import { Button } from 'reactstrap';
import TitleHeader from "./TitleHeader"
import MyPicture from "../images/main-img.png"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const WhoAmI = ({toggleOn}) => {

    useEffect(() => {
        AOS.init({duration: 1000});
    }, [])
    return (
        <Container id="about">
            <Row>
                    <Col lg={{ size: 6, order: 1}} sm={{ size: 12, order: 2}} xs={{ size: 12, order: 2}}>
                        <div className={toggleOn ? "second-col-who-light" : "second-col-who"} data-aos="slide-right">
                         <img  className="who-picture"  src={MyPicture} alt="my-picture"></img>
                        </div>
                    </Col>
                    <Col lg={{ size: 6, order: 1}}  sm={{ size: 12, order: 1}} xs={{ size: 12, order: 1}}>
                        <div className="who-content col">        
                            <TitleHeader
                            toggleOn={toggleOn}
                            title="Who I am?"
                            />
                            <p className="main-paragraph" data-aos="fade-left" >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <p className="main-paragraph mb-5" data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            <div className="d-flex justify-content-start mt-5">
                                <Button className="download-pdf" color="danger" size="lg" data-aos="fade-up">Download PDF</Button>
                            </div>
                        </div>
                       
                    </Col>
            </Row>
        </Container>
    )
}

export default WhoAmI
