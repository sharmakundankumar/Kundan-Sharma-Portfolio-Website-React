import React from 'react'
import './App.css';
import CTA from './CTA';
import ME from '../../assets/my-pic.png'
import HeaderSocials from './headerSocials';

function index() {
  return (
    <header>
      <div className="container header_container">
          <h5>Hello I'm</h5>
          <h1>Kundan Sharma</h1>
          <h5 className='text-light'>Front-End Developer</h5>
          <CTA/>
          <HeaderSocials/>
          <div className="me">
            <img src={ME} alt="me" />
          </div>
          <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>

    </header>
  )
}

export default index;