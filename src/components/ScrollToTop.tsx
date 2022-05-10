import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp} from '@fortawesome/free-solid-svg-icons'
import "../styles/ScrollToTop.css"
import { useWindowScroll } from "react-use"
import { useState , useEffect} from "react"
import {animateScroll as scroll} from "react-scroll"
import { IconProp } from '@fortawesome/fontawesome-svg-core'

const ScrollToTop = () => {

  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisible] = useState(false);


  useEffect(() => {

    if (pageYOffset > 400) {
      setVisible(true);

    } else {
      setVisible(false);
    }
  }, [pageYOffset]);


  return (
   <>
    { visible && (
      <div className="scroll-wrapper">
        <div 
        onClick={() =>{
          scroll.scrollToTop(1000)
        }}
        className="scroll-to-top">
          <FontAwesomeIcon className="chevron" size="2x" icon={faChevronUp as IconProp} />
        </div>
      </div>
    )}
   </>
  )
}

export default ScrollToTop
