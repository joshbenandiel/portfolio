import "../styles/Navbar.css"
import { useState } from "react"
import { Link } from "react-scroll";
import logo from '../images/logo.png'


const Navbar = ({ handleToggle , toggleOn}) => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenuOpen = () => {
    setMenuOpen(!menuOpen);
  }


  const handleLinkClick = () => {
    setMenuOpen(!menuOpen);
  }

  const [isOpen, setIsOpen] = useState(false)

  return ( 
   <div className='position-relative'>
    <div className={isOpen ? 'navbar-open-container-true' : 'navbar-open-container'}>
    </div>
    <ul className='text-white nav_menu_list_open p-0'>
      <Link onClick={() => setIsOpen(false)} className={`menu-link-open ${isOpen ? `home-open` : `home`}`} to="home" spy={true} smooth={true} duration={1000}>Home</Link>
      <Link onClick={() => setIsOpen(false)} className={`menu-link-open ${isOpen ? `about-open` : `about`}`} to="about" spy={true} smooth={true} duration={1000}>About</Link>
      <Link onClick={() => setIsOpen(false)}  className={`menu-link-open ${isOpen ? `portfolio-open` : `portfolio`}`} to="portfolio" spy={true} smooth={true} duration={1000}>Portfolio</Link>
      <Link onClick={() => setIsOpen(false)} className={`menu-link-open ${isOpen ? `contact-open` : `contact`}`} to="contact" spy={true} smooth={true} duration={1000}>Contact</Link>
    </ul>
    <nav id='home' className='container-xxl navbar-container'>
      <div className="row">
        <div className="col-4 nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="col-4 d-flex align-items-center">
          <ul className='text-white nav-menu'>
            <Link className={toggleOn ? 'nav-link-on' : 'nav-link'} to="home" spy={true} smooth={true} duration={1000}>Home</Link>
            <Link className={toggleOn ? 'nav-link-on' : 'nav-link'} to="about" spy={true} smooth={true} duration={1000}>About</Link>
            <Link className={toggleOn ? 'nav-link-on' : 'nav-link'} to="portfolio" spy={true} smooth={true} duration={1000}>Portfolio</Link>
            <Link className={toggleOn ? 'nav-link-on' : 'nav-link'} to="contact" spy={true} smooth={true} duration={1000}>Contact</Link>
          </ul>
        </div>
        <div className="col-4 hire-me-button">
          <Link className='nav-link' to="contact" spy={true} smooth={true} duration={1000}>
            <button className='btn btn-danger btn-lg'>Hire Me</button>
          </Link>
        </div>
      </div>
    </nav>
      <button onClick={() => setIsOpen(!isOpen)} className='hamburger-button' type="button">
        <div className='hamburger-menu-container'>
          <div className={isOpen ? 'hamburger-line-open' : 'hamburger-line'}>
          </div>
        </div>
      </button>
      <button onClick={handleToggle} className='theme__button'>
        <i className={`bx bx-moon bx-md ${toggleOn ? `moon__button__open` : 'moon__button'}`}></i>
        <i className={`bx bx-sun bx-md ${toggleOn ? `sun__button__open` : 'sun__button'}`}></i>
      </button>
    </div>
  )
}

export default Navbar
