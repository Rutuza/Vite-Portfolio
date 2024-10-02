import React from "react";
import Navbar from "./components/Navbar"; // Adjust path as per your folder structure
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <>
    <div className="bg-cream">
      <Navbar />
      <div className="home">
        <Homepage />
      </div>
      <div className="about">
        <About />
      </div>
      <div className="skills">
        <Skills />
      </div>
      <div className="projects">
        <Projects />
      </div>
      <div className="contact">
        <Contact />
      </div>
    </div>
    </>
  );
};

export default App;
