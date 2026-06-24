import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import ProjectCard from './Components/ProjectCard'
import Projects from './Components/Projects'
import About from './Components/About'
import Skills from './Components/Skills'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div style={{ 
      backgroundColor: 'var(--bg)', 
      color: 'var(--text)' }} 
      className="overflow-x-hidden">
        <Navbar/>
        <Hero/>
        {/* <ProjectCard/> */}
        <Projects/>
        <About/>
        <Skills/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default App