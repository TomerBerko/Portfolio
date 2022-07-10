import React from 'react'
import './project.css'

const Project = (props) => {
  function checkForSwiper (size){
    if(size < 600)
    {
      return 'project__item-for-swiper'
    }
    else
    {
      return 'project__item'
    }
  }
  return (
    <div key = {props.id} >
        <article className={checkForSwiper(props.size)}>
          <div className="project__item-image">
            <img src={props.image} alt="garage" className='img_project'/>
          </div>
          <h3>{props.title}</h3>
          <p>{props.description}</p>
          <div className="project__item-cta">
          <a href={props.gitubLink} className='btn' target='_blank' rel="noreferrer">Github</a>
          </div>
        </article> 
    </div>
    
  )
}

export default Project