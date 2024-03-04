import './App.css'
import './components/Navbar'


import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Work from './pages/Work'

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
      </div>
      
      
    </>
  )
}

export default App
