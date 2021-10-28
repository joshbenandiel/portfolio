import React from 'react';
import TitleHeader from "./TitleHeader"
import "../styles/Contact.css"
import ContactInput from './ContactInput';
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';



const Contact = ({toggleOn}) => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])

  

  const [modal, setModal] = useState(false);

 
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    message: ""

  })
  const handleChange = (e) =>{
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value
    });

    console.log(formData);
  
  }

  const toggle = () => {
    
    setModal(!modal);
  }

  const clearInput = (e) => {
    setModal(!modal);
    setFormData({
      name: "",
      email: "",
      phone:"",
      message: ""

    })
    
  }
  
  
  return (
    <div className="contact-wrap" id="contact">
      <TitleHeader
        toggleOn={toggleOn}
        title="Have a Question?"
      />
      <h2 data-aos="fade-up">Contact Me Now</h2>

      <Container>
        <Row>
          <Col md="6">
            <div data-aos="fade-right">
              <ContactInput
                toggleOn={toggleOn}
                name="name"
                value={formData.name}
                changeName={handleChange}
                contactInput="Your Name"
              />
              <ContactInput
                toggleOn={toggleOn}
                name="email"
                value={formData.email}        
                changeName={handleChange}
                contactInput="Your Email"
              />
              <ContactInput
                toggleOn={toggleOn}
                name="phone"   
                value={formData.phone}  
                changeName={handleChange}
                contactInput="Your Phone"
              />
            </div>
          </Col>
          <Col md="6">
            <div data-aos="fade-left">
              <textarea value={formData.message}  name="message" onChange={handleChange} className={toggleOn ? "contact-textarea-light" : "contact-textarea"} form="userform" placeholder="Your Message"></textarea>
            </div>
          </Col>
        </Row>
      </Container>

      <div>
        <Button
          onClick={toggle}
          className="submit-form"
          color="danger"
          size="lg">Submit Form</Button>
        <Modal isOpen={modal} toggle={toggle} odalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 700 }}>
          <ModalHeader >
          <h1>Email Sent!</h1>
          </ModalHeader>
          <ModalBody>
            <div>
              <p>Name: {formData.name}</p>
              <p>Email: {formData.email}</p>
              <p>Phone: {formData.phone}</p>
              <p>Message: {formData.message}</p>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="success" onClick={clearInput}>OK</Button>
          </ModalFooter>
        </Modal>
      </div>




      <Container className="info-wrapper">
        <Row>
          <Col lg="4" md="4">
            <div className="phone-wrapper" data-aos="slide-up" data-aos-delay="50">
              <FontAwesomeIcon className="info-phone" size="2x" icon={faPhone} />
              <h4>+639154752974</h4>
            </div>
          </Col>
          <Col lg="4" md="4">
            <div className="map-wrapper" data-aos="slide-up" data-aos-delay="200">
              <FontAwesomeIcon className="info-map" size="2x" icon={faMapMarkerAlt} />
              <h4>Blk 7 Lot 5 Villa Carpio Subd. Parian Calamba City Laguna</h4>
            </div>
          </Col>
          <Col lg="4" md="4">
            <div className="email-wrapper" data-aos="slide-up" data-aos-delay="400">
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
