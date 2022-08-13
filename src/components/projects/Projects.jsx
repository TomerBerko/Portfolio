import React , { useState, useEffect, useRef } from 'react'
import './projects.css'
import Communication from '../../assets/communication.png'
import Garage from '../../assets/garage.png'
import FireLoger from '../../assets/firelogger.png'
import Plane from '../../assets/plane.png'
import ReverseTicTac from '../../assets/reverse_tic_tac_toe.png'
import Paint from '../../assets/paint.png'
import Project from './Project'
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    id:"1",
    image:Communication,
    title:"Computer Security project", 
    description:"This project is a dummy telecommunication site that isvulnerable to SQL injection and XSS attacks. This was made to demonstrate the power of those attacks. The technologies used here are Python3, Django, HTML and MySQL.",
    gitubLink:"https://github.com/TomerBerko/ComputerSecurity",
  },
  {
    id:"2",
    image:Garage,
    title:"Garage Manager Console", 
    description:"OOP driven Garage manager console application. Currently supports Cars, Motorcycles (both fuel and electric) and Trucks. Each vehicle is wrapping common & unique objects and properties according to its type. Includes 5 actions such as refuel, inflating and more.",
    gitubLink:"https://github.com/TomerBerko/Garage-management",
  },
  {
    id:"3",
    image:FireLoger,
    title:"Firelogger",
    description:"Web application using HTML, CSS, JS and leaflet, user based visualized by local storage. The app allows the user to get information about past fires in Israel and to alart about new fires that are occuring. The app also provides uniqe admin options.",
    gitubLink:"https://github.com/TomerBerko/fireLogger",
  },
  {
    id:"4",
    image:Plane,
    title:"Flights Project",
    description:"Creating a Machine Learning Model using python for the prediction of an airline group category (if low-cost or not) using a few parameters : Crawling & Scrapping a data filled web-site, Data preprocessing, Visualization & Analyzation of the data, Creating & Training a model with the data.",
    gitubLink:"https://github.com/TomerBerko/DataScience_FlightsProject",
  },
  {
    id:"5",
    image:ReverseTicTac,
    title:"Reverse-Tic-Tac-Toe",
    description:"WinForms application using C# .NET and OOP to make a unique game of tic tac toe where the winner is the one that doesn't have a row at the end. There is an option for picking a bigger board and to choose a 2 player game or 1 against the computer. The app will count the scores and announce the winner.",
    gitubLink:"https://github.com/TomerBerko/Reverse-Tic-Tac-Toe",
  },
  {
    id:"6",
    image:Paint,
    title:"Paint-MFC",
    description:"MFC application using C++ and OOP to create a painting app, implementing OOP for the shapes. The app provides a few  options: choose a shape ,fill the shape with colors, control the line width, undo or redo, save the painting and load it.",
    gitubLink:"https://github.com/TomerBerko/Paint-MFC",
  }
  
]



const useRefContainer = (ref) => {
  const [dimensions, setDimensions] = useState({ width: 1, height: 2 })
  React.useEffect(() => {
    if (ref.current) {
      const { current } = ref
      const boundingRect = current.getBoundingClientRect()
      const { width, height } = boundingRect
      setDimensions({ width: Math.round(width), height: Math.round(height) })
      
    }
  }, [ref])
  return dimensions
}

const Projects = () => {
  const refContainer = useRef();
  const dimensions = useRefContainer(refContainer)
  const [divChange, setDivChange] = useState(<div className="custom-container projects__container" >
  {
    data.map(({id, image, title, description, gitubLink}) => {
      return(
        <div key={id} className="container project__container">
        <Project id = {id} image = {image}  title = {title} description ={description}  gitubLink = {gitubLink} />
        </div>
      )
      })
  }
</div>);
console.log(dimensions)
console.clear()
  useEffect(() => {
    
    if (refContainer.current.offsetWidth < 600) {
      setDivChange(<Swiper className="custom-container projects__container" 
      modules={[ Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
      {
        data.map(({id, image, title, description, gitubLink}) => {
          return(
            <SwiperSlide key={id} className="container project__container">
              <Project id = {id} image = {image}  title = {title} description ={description}  gitubLink = {gitubLink} size ={refContainer.current.offsetWidth}/>
            </SwiperSlide>
          )
      })
      }
    </Swiper>)
    }
  }, []);
  return (
    <section id='projects' ref={refContainer}>
      <h5 >My Projects</h5>
      {divChange}

    </section>
  )
}

export default Projects