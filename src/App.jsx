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
      <div id="home">
        <Homepage />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
    </>
  );
};

export default App;
