import React from 'react'
import './App.css';
import Gilded from '../../assets/my-pic.png'
import John from '../../assets/john.jpeg'
import Manoj from '../../assets/manoj.jpeg'
import Pankaj from '../../assets/pankaj.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar: Gilded,
    name: 'Gilded Digital Solutions',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolorem. Quas, pariatur tempora cumque assumenda mollitia natus molestias vitae, vel ratione, at fugiat iure voluptatibus voluptas dolores voluptate impedit exercitationem.'
  },
  {
    avatar: John,
    name: 'John Abraham',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolorem. Quas, pariatur tempora cumque assumenda mollitia natus molestias vitae, vel ratione, at fugiat iure voluptatibus voluptas dolores voluptate impedit exercitationem.'
  },
  {
    avatar: Manoj,
    name: 'Manoj Bajpai',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolorem. Quas, pariatur tempora cumque assumenda mollitia natus molestias vitae, vel ratione, at fugiat iure voluptatibus voluptas dolores voluptate impedit exercitationem.'
  },
  {
    avatar: Pankaj,
    name: 'Pankaj Tripathi',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, dolorem. Quas, pariatur tempora cumque assumenda mollitia natus molestias vitae, vel ratione, at fugiat iure voluptatibus voluptas dolores voluptate impedit exercitationem.'
  }
]


function index() {
  return (
    <section id='testimonial'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {data.map(({avatar, name, review,}, index) =>{
          return(
            <SwiperSlide key={index} className='testimonial'>
              <div className='client_avatar'>
                <img src={avatar}/>
              </div>
              <h5 className='client_name'>{name}</h5>
              <small className='client_review'>{review}</small>
            </SwiperSlide>
          )
        }
        )}
      </Swiper>
    </section>
  )
}

export default index