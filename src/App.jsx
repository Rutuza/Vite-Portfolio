import React from 'react'
import './App.css'

import './components/Navbar'
import Navbar from './components/Navbar'
import About from './pages/About'
import Skills from './pages/Skills'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Footer from './components/Footer'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Homepage from './pages/Homepage'
import Projects from './pages/Projects'
import PhotographsPage from './pages/PhotographsPage'

function App() {
  

  return (
    <>
    <div className="App">
      <Navbar />
      {/* <Homepage /> */}
      {/* <About /> */}
      <Skills />
      {/* <Work /> */}
      {/* <Projects /> */}
      {/* <PhotographsPage /> */}
      {/* <Contact /> */}
    </div>

      {/* <div id='root'>
        <Router>
          <Navbar />
            <Routes>
              <Route path='./about' element={<About/>} />
              <Route path='./skills' element={<Skills/>} />
              <Route path='./work' element={<Work/>} />
              <Route path='./project' element={<Project/>}/>
              <Route path='./contact' element={<Contact/>} />
            </Routes>

        </Router>
          
      </div> */}
      
      
    </>
  )
}

export default App
