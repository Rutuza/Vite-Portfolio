import React from 'react'
import './App.css'
import './index.css'

import './components/Navbar';
import Navbar from './components/Navbar';

import About from './pages/About';
import Skills from './pages/Skills';
import Work from './pages/Work';
import Contact from './pages/Contact';

import { BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Homepage from './pages/Homepage'

function App() {
  return (
    <>
        <Router>
          <Navbar />
          <Routes>
              <Route exact path='/' element={<Homepage />}/>
              <Route path='/about' element={<About />}/>
              <Route path='/skills' element={<Skills />}/>
              <Route path='/work' element={<Work />}/>
              <Route path='/contact' element={<Contact />}/>
              
          </Routes>

        </Router>
          
      
      
      
    </>
  )
}

export default App
