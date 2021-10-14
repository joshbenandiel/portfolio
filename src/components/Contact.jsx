import React from 'react';
import TitleHeader from "./TitleHeader"
import "../styles/Contact.css"
import ContactInput from './ContactInput';
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Button } from 'reactstrap';



const Contact = () => {
  return (
    <div className="contact-wrap" id="contact">
      <TitleHeader
        title="Have a Question?"
      />
      <h2>Contact Me Now</h2>

      <Container>
        <Row>
          <Col md="6">
            <div className='col-wrapper1'>
              <ContactInput
                contactInput="Your Name"
              />
              <ContactInput
                contactInput="Your Email"
              />
              <ContactInput
                contactInput="Your Phone"
              />
            </div>
          </Col>
          <Col md="6">
            <div className='col-wrapper2'>
              <textarea className="contact-textarea" form="userform" placeholder="Your Message"></textarea>
            </div>
          </Col>
        </Row>
      </Container>
      <Button className="submit-form" color="danger" size="lg">Submit Form</Button>


      <Container className="info-wrapper">
        <Row>
          <Col lg="4" md="4">
            <div className="phone-wrapper">
              <FontAwesomeIcon className="info-phone" size="2x" icon={faPhone} />
              <h4>+639154752974</h4>
            </div>
          </Col>
          <Col lg="4" md="4">
            <div className="map-wrapper">
              <FontAwesomeIcon className="info-map" size="2x" icon={faMapMarkerAlt} />
              <h4>Blk 7 Lot 5 Villa Carpio Subd. Parian Calamba City Laguna</h4>
            </div>
          </Col>
          <Col lg="4" md="4">
            <div className="email-wrapper">
              <FontAwesomeIcon className="info-envelope" size="2x" icon={faEnvelope} />
              <h4>joshjacinto22@gmail.com</h4>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Contact
