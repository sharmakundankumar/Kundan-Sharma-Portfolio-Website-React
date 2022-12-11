import React from 'react'
import './App.css';
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'


function Index  ()  {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_aa31tjt', 'template_yoq4jsf', form.current, 'b-2cksZ4XTLK06qz8')

    e.target.reset()
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className='contact_option'>
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>gildedkundansharma@gmail.com</h5>
            <a href="mailto:gildedkundansharma@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <RiMessengerLine className='contact_option-icon'/>
            <h4>Messanger</h4>
            <h5>Gilded Sharma</h5>
            <a href="https://m.me/gildedkundansharma" target="_blank">Send a message</a>
          </article>
          <article className='contact_option'>
            <BsWhatsapp className='contact_option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+91 7250054122</h5>
            <a href="https://api.whatsapp.com/send?phone+917250054122" target="_blank">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <input type="whatsappnumber" name='number' placeholder='Your WhatsApp' required />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Index;