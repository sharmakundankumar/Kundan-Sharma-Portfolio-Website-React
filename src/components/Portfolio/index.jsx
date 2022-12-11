import React from 'react'
import './App.css';
import Img1 from '../../assets/project1.png'
import Img2 from '../../assets/project2.png'
import Img3 from '../../assets/project3.png'
import Img4 from '../../assets/project4.png'
import Img5 from '../../assets/project5.png'

function index() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Img1} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Img2} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Img3} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Img4} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio_item'>
          <div className='portfolio_item-image'>
            <img src={Img5} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
          <a href="https://github.com" className='btn' target='_blank'>GitHub</a>
          <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        
      </div>
    </section>
  )
}

export default index