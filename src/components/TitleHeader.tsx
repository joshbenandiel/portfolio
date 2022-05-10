import React from 'react'
import "../styles/TitleHeader.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

interface Props {
  title: string
  toggleOn: boolean
}


const TitleHeader: React.FC<Props> = ({ title, toggleOn }) => {


  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])
  return (
    <div className="title-wrapper" data-aos="fade-down">
      <h1 className={toggleOn? "title-name-light" : "title-name"}>{title}</h1>
      <div className="red-underline" />
    </div>
  )
}

export default TitleHeader
