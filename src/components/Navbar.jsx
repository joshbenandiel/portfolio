import "../styles/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'reactstrap';
import { faSignature, faCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from "reactstrap";
import { useState } from "react"
import { Link } from "react-scroll";
import Toggle from "./Toggle"


const Navbar = ({ handleToggle , toggleOn}) => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  }



  const handleLinkClick = () => {
    setMenuOpen(!menuOpen);
  }


  return (
    
    <div>
      <Toggle
      toggle={toggleOn}
      toggleOn={handleToggle}
      />
      <div id="home">
        
        <div className={menuOpen ? "is-open" : "navbar-wrapper"}>
          <div className="menu-wrapper">
            {menuOpen && (
              <button
                onClick={toggleMenuOpen}
                className="btn burger-x"
                type="button">
                <FontAwesomeIcon
                  className="text-white"
                  size="2x"
                  icon={faTimes}
                />
              </button>
            )}
          </div>


          <ul className="new-menu-link">
            <Link
              onClick={handleLinkClick}
              className="menu-list"
              to="home"
              smooth={true}
              duration={1000}>Home
            </Link>
            <Link onClick={handleLinkClick} className="menu-list" to="about" smooth={true} duration={1000}>About</Link>
            <Link onClick={handleLinkClick} className="menu-list" to="portfolio" smooth={true} duration={1000}>Portfolio</Link>
            <Link onClick={handleLinkClick} className="menu-list" to="contact" smooth={true} duration={1000}>Contact</Link>
          </ul>
        </div>
        
        <Container

          className={menuOpen ?
             "container-nav-hide" :
              [
                (toggleOn ? "container-nav-on pt-5" : "container-nav pt-5")
              ]
            }
          fluid={false}>
          <Row>

            <Col className="my-navbar" lg="4" sm="6" xs="6" >


              <Link to="home" smooth={true} duration={1000}>
                <div className={toggleOn ? "nav-logo-on" : "nav-logo"}>
                  <FontAwesomeIcon className="logo-color" icon={faSignature} />
                  <p>Josh<FontAwesomeIcon className="logo-size" icon={faCircle} /></p>
                </div>
              </Link>


            </Col>
            <Col className="menu-var">
              <ul className="menu-link">
                <Link className={toggleOn ? "nav-list" : "nav-list-on"} to="home" smooth={true} duration={1000}>Home</Link>
                <Link className={toggleOn ? "nav-list" : "nav-list-on"} to="about" smooth={true} duration={1000}>About</Link>
                <Link className={toggleOn ? "nav-list" : "nav-list-on"} to="portfolio" smooth={true} duration={1000}>Portfolio</Link>
                <Link className={toggleOn ? "nav-list" : "nav-list-on"} to="contact" smooth={true} duration={1000}>Contact</Link>
              </ul>

            </Col>
            <Col className="col-button">
              <Link to="contact" smooth={true} duration={1000}><Button className="hire-me-button" color="danger" size="lg">Hire Me</Button></Link>
              {!menuOpen && (
                <div
                  className="burger"
                  onClick={toggleMenuOpen}>
                  <div className="line1"></div>
                  <div className="line2"></div>
                  <div className="line3"></div>
                </div>
              )}

            </Col>

          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Navbar
