import './App.css'
import './components/Navbar'


import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Work from './pages/Work'
import Footer from './components/Footer'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  
  return (
    <>
      <div id='root'>
        <Router>
          <Navbar />

          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/skills' element={<Skills />}/>
            <Route path='/work' element={<Work />} />
          </Routes>

        </Router>
          {/* <Footer /> */}
      </div>
      
      
    </>
  )
}

export default App
