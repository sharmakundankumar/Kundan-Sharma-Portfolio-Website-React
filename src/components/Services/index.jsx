import React from 'react'
import './App.css';
import {BiCheck} from 'react-icons/bi'

function index() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className='service'>
          <div className="service_head">
            <h3>Digital Marketing</h3>
          </div>

            <ul className="services_list">
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur  vitae.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur  vitae.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur  vitae.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur  vitae.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur  vitae.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur  vitae.</p>
              </li>
            </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>Web Devlopment</h3>
          </div>

            <ul className="services_list">
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur  vitae.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur  vitae.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur  vitae.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur  vitae.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur  vitae.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur  vitae.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur  vitae.</p>
              </li>
            </ul>
        </article>

        <article className='service'>
          <div className="service_head">
            <h3>App Development</h3>
          </div>

            <ul className="services_list">
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur  vitae.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur  vitae.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur  vitae.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur  vitae.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur  vitae.</p>
              </li>
              <li>
                <BiCheck className='service_list-icon'/>
                <p>Lorem ipsum dolor sit, amet consectetur  vitae.</p>
              </li>
            </ul>
        </article>
      </div>
    </section>
  )
}

export default index