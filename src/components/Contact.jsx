import React from 'react';
import TitleHeader from "./TitleHeader"
import "../styles/Contact.css"
import '../styles/ContactInput.css'
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import emailjs from 'emailjs-com'
import { useFormik } from 'formik'




const onSubmit = (event, values) => {
  emailjs.sendForm(
  'service_z09q1kc', 
  'template_9wowlzb', 
  event.target,
  'user_zMajlKQXAY3vDd0PLmMAu'
  ).then(res => {
    console.log(res)
  }).catch(err => console.log(err))
}
const validate = (values) => {
  let errors = {}
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!values.name){
    errors.name = 'Name Required'
  }
  if(!values.email){
    errors.email = 'Email Required'
  } else if (!values.email.match(mailFormat)){
    errors.email = '*Not Valid Email Address'
  }
  if(!values.phone){
    errors.phone = 'Phone Number Required'
  } else if(values.phone.length > 11 || values.phone.length < 11){
    errors.phone = 'Invalid Phone Number'
  }
  if(!values.message){
    errors.message = 'Message Required'
  }
  return errors
}

const Contact = ({toggleOn}) => {

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  }
  const clearInput = (e) => {
    setModal(!modal); 
  }
  
  const formik = useFormik({
    initialValues: {
      name:'',
      email:'',
      phone:'',
      message: ''
    },
    onSubmit,
    validate,
  })

  console.log(formik.errors)
 
  return (
    <div className="contact-wrap" id="contact">
      <TitleHeader
        toggleOn={toggleOn}
        title="Have a Question?"
      />
      <h2 data-aos="fade-up">Contact Me Now</h2>
      <form onSubmit={formik.handleSubmit} className='d-flex justify-content-center flex-column'>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <input 
                name='name'
                value={formik.values.name}
                onChange={formik.handleChange}
                className={toggleOn ? "contact-input-light" : "contact-input"}
                type="text" 
                placeholder='Enter your name'>
              </input>
              <input 
                name='email'
                value={formik.values.email}
                onChange={formik.handleChange}
                className={toggleOn ? "contact-input-light" : "contact-input"}
                type="email" 
                placeholder='Enter email address'>
              </input>
              <input 
                name='phone'
                value={formik.values.phone}
                onChange={formik.handleChange}
                className={toggleOn ? "contact-input-light" : "contact-input"}
                type="text" 
                placeholder='Enter phone number'
                onKeyPress={(event) => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}>
              </input>
            </div>
            <div className="col-md-6">
              <textarea
                name='message'
                value={formik.values.message}
                onChange={formik.handleChange}
                type='text'
                placeholder='Enter your message'
                className={toggleOn ? "contact-textarea-light" : "contact-textarea"}>
              </textarea>
            </div>
          </div>
        </div>
        <button className='btn btn-danger btn-lg mt-3' type='submit'>Submit</button>
      </form>
    <div>
      <Modal isOpen={modal} toggle={toggle} odalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 700 }}>
        <ModalHeader >
        <h1>Email Sent!</h1>
        </ModalHeader>
        <ModalBody>
          <div>
            <p>Name: {formik.values.name}</p>
            <p>Email: {formik.values.email}</p>
            <p>Phone: {formik.values.phone}</p>
            <p>Message: {formik.values.message}</p>
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
