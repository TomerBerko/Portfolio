import React from 'react'
import {IoLogoLinkedin} from 'react-icons/io'
import {AiOutlineGithub} from 'react-icons/ai'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/tomer-berkovich/" target="_blank" rel="noreferrer"><IoLogoLinkedin size="3em"/></a>
        <a href="https://github.com/TomerBerko/" target="_blank" rel="noreferrer"><AiOutlineGithub size="3em"/></a>
    </div>
  )
}

export default HeaderSocials