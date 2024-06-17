import './App.css'
import './components/Navbar'


import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Work from './pages/Work'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Rough from './pages/Rough'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Rough from './pages/Rough'

function App() {
  
  return (
    <>
      <div id='root'>
        <Router>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/skills' element={<Skills/>} />
              <Route path='/work' element={<Work/>} />
              <Route path='/contact' element={<Contact/>} />
            </Routes>

        </Router>
          {/* <Footer /> */}
      </div>
      
      
    </>
  )
}

export default App
