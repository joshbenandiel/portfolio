import React from 'react';
import TitleHeader from "./TitleHeader"
import "../styles/Contact.css"
import '../styles/ContactInput.css'
import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMapMarkerAlt, faEnvelope} from '@fortawesome/free-solid-svg-icons'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState, useEffect, useRef } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import emailjs from 'emailjs-com'
import { useFormik } from 'formik'
import CircularProgress from '@mui/material/CircularProgress';
import Tooltip from '@mui/material/Tooltip';




const Contact: React.FC<any>= ({toggleOn, setIsLoading, isLoading}) => {

  const ref = useRef<any>()


  const [modal, setModal] = useState(false);

  const onSubmit = async() => {
    setIsLoading(true)
    try {
      await emailjs.sendForm(
        'service_z09q1kc', 
        'template_9wowlzb', 
        ref.current,
        'user_zMajlKQXAY3vDd0PLmMAu'
      )
      setIsLoading(false)
      setModal(true)
    } catch(err){
      console.log(err)
    } 
  }
  const validate = (values: any) => {
    let errors: any = {}
    const mailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(!values.name){
      errors.name = 'Name Required'
    }
    if(!values.email){
      errors.email = 'Email Required'
    } else if (!values.email.match(mailFormat)){
      errors.email = 'Not Valid Email Address'
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

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])
  

  const toggle = () => {
    setModal(!modal);
  }
  const clearInput = () => {
    formik.resetForm()
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
  return (
    <div className="contact-wrap position-relative" id="contact">
      <TitleHeader
        toggleOn={toggleOn}
        title="Have a Question?"
      />
      <h2 data-aos="fade-up">Contact Me Now</h2>
      <form ref={ref} onSubmit={formik.handleSubmit} className='d-flex justify-content-center flex-column w-100'>
        <div className="container">
          <div className="row">
            <div className="col-md-6" data-aos="fade-right">
              <div className='position-relative'>
                <input 
                  {... formik.getFieldProps('name')}
                  className={toggleOn ? `contact-input-light ${formik.errors.name && formik.touched.name && `red`}` : `contact-input ${formik.errors.name && formik.touched.name && `red`}`}
                  type="text" 
                  placeholder='Enter your name'
                >
                </input>
                <div>
                 {formik.errors.name && formik.touched.name && 
                  (
                  <Tooltip title={formik.errors.name} placement='top-start'>
                    <i className='bx bxs-message-alt-error error-icon'></i>
                  </Tooltip>
                  )
                 }
                </div>
              </div>
              <div className='position-relative'>
                <input 
                  {... formik.getFieldProps('email')}
                  className={toggleOn ? `contact-input-light ${formik.errors.email && formik.touched.email && `red`}` : `contact-input ${formik.errors.email && formik.touched.email && `red`}`}
                  type="email" 
                  placeholder='Enter email address'>
                </input>
                <div>
                 {formik.errors.email && formik.touched.email && 
                  (
                  <Tooltip title={formik.errors.email} placement='top-start'>
                    <i className='bx bxs-message-alt-error error-icon'></i>
                  </Tooltip>
                  )
                 }
                </div>
              </div>
              <div className='position-relative'>
                <input 
                  {... formik.getFieldProps('phone')}
                  className={toggleOn ? `contact-input-light ${formik.touched.phone && formik.errors.phone && `red`}` : `contact-input ${formik.touched.phone && formik.errors.phone && `red`}`}
                  type="text" 
                  placeholder='Enter phone number'
                  onKeyPress={(event) => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}>
                </input>
                <div>
                 {formik.errors.phone && formik.touched.phone && 
                  (
                  <Tooltip title={formik.errors.phone} placement='top-start'>
                    <i className='bx bxs-message-alt-error error-icon'></i>
                  </Tooltip>
                  )
                 }
                </div>
              </div>
            </div>
            <div className="col-md-6 position-relative" data-aos="fade-left">
              <input
                className={toggleOn ? `contact-textarea-light ${formik.touched.message && formik.errors.message && `red`}` : `contact-textarea ${formik.touched.message && formik.errors.message && `red`}`}
                {... formik.getFieldProps('message')}
                type='textarea'
                placeholder='Enter your message'
              >
              </input>
              <div>
                 {formik.errors.message && formik.touched.message && 
                  (
                  <Tooltip title={formik.errors.message} placement='top-start'>
                    <i className='bx bxs-message-alt-error error-icon-text'></i>
                  </Tooltip>
                  )
                 }
                </div>
            </div>
          </div>
        </div>
        <div className='w-100 d-flex justify-content-center'>
         <button className='btn btn-danger btn-lg mt-3' type='submit'>Submit</button>
        </div>
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
    {isLoading && (
      <div className='circular-progress'>
        <CircularProgress color="success" />
      </div>
    )}
    </div>
  )
}

export default Contact
