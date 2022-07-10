import React from 'react'
import './footer.css'
import {IoLogoLinkedin} from 'react-icons/io'
import {AiOutlineGithub} from 'react-icons/ai'

const footer = () => {
  return (
    <footer>
      <a href='/#' className='footer__logo'>Thank you for visiting :D</a> 

      <ul className='permalink'>
        <li><a href="/#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/tomer-berkovich/" target="_blank" rel="noreferrer"><IoLogoLinkedin/></a>
        <a href="https://github.com/TomerBerko/" target="_blank" rel="noreferrer"><AiOutlineGithub/></a>
      </div>
    </footer>
  )
}

export default footer