import React from 'react'
import './header.css'
import CTA from './CTA'
import MyAvatar from '../../assets/myavatar.png'
import HeaderSocials from './HeaderSocials'
import 'animate.css';

const Header = () => {
  
  return (
    <header>
      <div className="container header__container animate__animated animate__fadeInUp">
        <h5>Hello I'm</h5>
        <h1>Tomer Berkovich</h1>
        <h5 className="text-light">Computer science graduate</h5>
        <CTA />
        <HeaderSocials />

        <div className='myAvatar' >
          <img src={MyAvatar} alt="myAvatar" className='img_header' />
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header