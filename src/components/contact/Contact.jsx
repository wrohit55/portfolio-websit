import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from 'react-icons/md'
import { BsFacebook } from 'react-icons/bs'
import { ImWhatsapp } from 'react-icons/im'
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com'



const contact = () => {
  //   const form = useRef();

  //   const sendEmail = (e) => {
  //     e.preventDefault();

  //     emailjs.sendForm('service_wab9qcn', 'template_zofatp6', form.current, 'bNU2pQLECrwuhDSnD')

  //   };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact_options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon' />
            <h4>Email</h4>
            <h5>rohyt99@gmail.com</h5>
            <a href="mailto:rohyt99@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <BsFacebook className='contact__option-icon' />
            <h4>FaceBook</h4>
            <h5>rohyt99@gmail.com</h5>
            <a href="https://m.me/rohyt99">Send a message</a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5>9746888890</h5>
            <a href="https://api.whatsapp.com/send?phone9804385275">Send a message</a>
          </article>
        </div>

        {/* Ends of contact options */}
        {/* <form ref={form} onSubmit={sendEmail}> */}
        <form action=''>
          <input type="text" name='name' placeholder='Your Full name' required />
          <input type="email" name='email' placeholder='YOur Email' required />
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact