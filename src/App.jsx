import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
      <>
        <div className="backgrounddiv">
        <Header />
        <Nav />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
        <ToastContainer />
        </div>
        
      </>
    )
}


export default App