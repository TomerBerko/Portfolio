import React from 'react'
import './about.css'
import ME from '../../assets/myAvatarAboutNoBack.png'


const About = () => {
  return (
    <section id='about' name='about'>
      
      <h5>Get To Know</h5>
      <h2>About me</h2>
      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="AboutImage" className='img_about_size' />
          </div>
        </div>
        <div className='about__content'>
        <p>
          Computer science graduate,<br />
          passionate about software development.<br /><br />
          Pleasent & serious, highly motivated to work,  learn, commit and succeed.<br /><br />
          Responsible, a quick learner with great self learning ability, and a problem-solving oriented thinker
          </p>

        <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About