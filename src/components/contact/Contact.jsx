import React,{useRef} from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {IoLogoWhatsapp} from 'react-icons/io'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h26tfz3', 'template_2cutgmq', form.current, 'HDTPuP21O3lj51dO5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className="contact__option">
            <HiOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>tomerberko2@gmail.com</h5>
            <a href="mailto:tomerberko2@gmail.com" target="_blank" rel="noreferrer">Send a messege</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>0524615761</h5>
            <a href="https://api.whatsapp.com/send?phone=972524615761" target="_blank" rel="noreferrer">Send a messege</a>
          </article>
        </div>
        <form ref={form} onSubmit = {sendEmail}>
          <input type="text" name='name' placeholder='Your full name' required/>
          <input type="email" name='email' placeholder='Your email' required/>
          <textarea name="message" rows="7" placeholder='Your message' required></textarea>
          <button type='submit' className='btn btn-primary'> Send message</button>

        </form>
      </div>
    </section>
  )
}

export default Contact