import { useEffect, useState } from 'react'
import '../styles/languages.css'
import react from '../images/languages/react.png'
import javascript from '../images/languages/javascript.png'
import css from '../images/languages/css.png'
import typescript from '../images/languages/typescript.png'
import material from '../images/languages/material.png'
import bootstrap from '../images/languages/bootsrap.png'
import redux from '../images/languages/redux.png'
import html from '../images/languages/html.png'
import TitleHeader from './TitleHeader'
import AOS from 'aos';
import { Typewriter } from 'react-simple-typewriter'

export const Languages = () => {

  const [active, setActive] = useState(false)

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])

  return (
    <div className='language-container'>
      <div className="port-title">
        <TitleHeader
        // toggleOn={toggleOn}
        title="Technologies Used"
        />
        <h2 data-aos='fade-up' className='language-text'>Client Side</h2>
      </div>
      <div 
        onClick={() => setActive(!active)}
        className={`language-box ${active ? 'active' : ''}`}>
        <div className='language-wrapper'>
          {/* <IoMdAdd className='add-icon-language' size={50}/> */}
        </div>
        {images.map((img,index) => {
          return (
          <li style={{'--i':index + 1}} key={index} className='language-images-wrapper'>
            <img className='language-images' src={img.url} alt=''/>
          </li>
          )
        })}
      </div>
      <span className='language-typewritter'style={{color: '#A1A2A3', fontFamily: 'Red Hat Display', fontSize: '3rem'}}>
        <Typewriter
          words={['Click the circle.', 'Click again to close.']}
          loop={0}
          cursor
          cursorStyle='|'
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </span>
    </div>
  )
}



const images =[
  {url: react},
  {url: javascript},
  {url: css},
  {url: bootstrap},
  {url: typescript},
  {url: material},
  {url: html},
  {url: redux},
]

