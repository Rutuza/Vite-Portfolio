import React from 'react'
import './App.css'
import './components/Navbar'

import Navbar from './components/Navbar'

import Homepage from './pages/Homepage'
import About from './pages/About'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

import Footer from './components/Footer'

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Navigation from './components/Navigation'

const App = () => {
  return (
    <>
    {/* <div className="App p-2 bg-cream">
      <Navbar />
      <Homepage /> 
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div> */}
      

      <Router>
        <div className="App bg-cream">

          {/* <Navigation /> */}
          <Navbar />
          <Routes>
            <Route exact path='/' Component={Homepage}/>
            <Route path='/about' Component={About} />
            <Route path='/skills' Component={Skills} />
            <Route path='/projects' Component={Projects} />
            <Route path='/contact' Component={Contact} />
          </Routes>
          <Footer />
        </div>
      </Router>

    </>
  )
}

export default App
