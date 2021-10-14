import "../styles/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'reactstrap';
import ReactDOM from 'react-dom'
import { faSignature, faCircle, faCross, faTimes } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from "reactstrap";
import { useState, useEffect } from "react"
import classnames from 'classnames';
import { Link } from "react-scroll";




const Navbar = () => {



  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  }

  const [width, setWidth] = useState(false);


  function useWindowSize() {

    const [windowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
      function handleResize() {


        if (window.innerWidth < 1000) {
          setWidth(!width)
        } else {
          setWidth(false)
        }

      };
      window.addEventListener("resize", handleResize);
    }, []);
    return windowSize;

  }

  const windowSize = useWindowSize();

  console.log(windowSize);

  const handleLinkClick = () => {
    setMenuOpen(!menuOpen);
  }


  return (

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

        className={menuOpen ? "container-nav-hide" : "container-nav pt-5"}
        fluid={width ? true : false}>
        <Row>

          <Col className="my-navbar" lg="4" sm="6" xs="6" >


            <Link to="home" smooth={true} duration={1000}>
              <div className="nav-logo">
                <FontAwesomeIcon className="logo-color" icon={faSignature} />
                <p>Josh<FontAwesomeIcon className="logo-size" icon={faCircle} /></p>
              </div>
            </Link>


          </Col>
          <Col className="menu-var">
            <ul className="menu-link">
              <Link className="nav-list" to="home" smooth={true} duration={1000}>Home</Link>
              <Link className="nav-list" to="about" smooth={true} duration={1000}>About</Link>
              <Link className="nav-list" to="portfolio" smooth={true} duration={1000}>Portfolio</Link>
              <Link className="nav-list" to="contact" smooth={true} duration={1000}>Contact</Link>
            </ul>

          </Col>
          <Col className="col-button">
            <Button className="hire-me-button" color="danger" size="lg">Hire Me</Button>
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
  )
}

export default Navbar
