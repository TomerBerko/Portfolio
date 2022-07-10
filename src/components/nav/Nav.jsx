import React from 'react'
import './nav.css'
import{AiOutlineHome}from 'react-icons/ai'
import{AiOutlineUser}from 'react-icons/ai'
import{BsBook}from 'react-icons/bs'
import{AiOutlineAppstore}from 'react-icons/ai'
import{TbMessageDots}from 'react-icons/tb'
import{useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav ] = useState('#')

  function checkForActive(temp){
    if(temp === activeNav)
    {
      return('active')
    }
    else
    {
      return('')
    }
  
    
  }
  return (
    <nav>
      <a href="/#" onClick={()=>setActiveNav('#')} className={checkForActive('#')}><AiOutlineHome/></a>
      <a href="/#about" onClick={()=>setActiveNav('#about')} className={checkForActive('#about')}><AiOutlineUser/></a>
      <a href="/#experience" onClick={()=>setActiveNav('#experience')} className={checkForActive('#experience')}><BsBook/></a>
      <a href="/#projects" onClick={()=>setActiveNav('#projects')} className={checkForActive('#projects')}><AiOutlineAppstore/></a>
      <a href="/#contact" onClick={()=>setActiveNav('#contact')} className={checkForActive('#contact')}><TbMessageDots/></a>
    </nav>
  )
}

export default Nav