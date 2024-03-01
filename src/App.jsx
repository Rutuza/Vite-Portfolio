import './App.css'
import './components/Navbar'
// import { Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import About from './pages/About'
import Skills from './pages/Skills'
import SlidingAnimation from './components/SlidingAnimation';



function App() {
  

  return (
    <>
      {/* <div className='App'>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='skills' element={<Skills/>} />
        </Routes>
      </div> */}
      <Navbar></Navbar>
      {/* <SlidingAnimation/> */}
      
      {/* <About />
      <Skills /> */}
      
    </>
  )
}

export default App
