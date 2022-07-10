import React from 'react'
import './about.css'
import ME from '../../assets/myAvatarAboutNoBack.png'
import 'animate.css';


const About = () => {
  return (
    <section id='about' name='about'>
      
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className='container about__container animate__animated animate__fadeInLeft'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="AboutImage" className='img_about_size' />
          </div>
        </div>
        <div className='about__content'>
        <p>
        Passionate and highly motivated software developer , enthusiastic about coding and logic, eager to learn and create.
        <br />I am a quick learner, self learner and a problem-solving oriented thinker.</p>

        <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About