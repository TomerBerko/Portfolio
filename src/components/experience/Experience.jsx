import React from 'react'
import './experience.css'
import {AiOutlineCheckCircle} from 'react-icons/ai'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Skills</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <h4>C</h4>
            </article>
            <article className='experience__details'>  
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <h4>C#</h4>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <h4>.NET</h4>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <h4>OOP</h4>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <h4>JavaScript</h4>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <h4> HTML & CSS</h4>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <h4>React & Node</h4>
            </article>
            <article className='experience__details'>
              <AiOutlineCheckCircle className='experience__details-icon'/>
              <h4>MySQL</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience