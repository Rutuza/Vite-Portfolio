import React from "react";
import logo from "../assets/svg/logo.svg";


function Navbar() {
  return (
    <nav>
      <div>
        <img src={logo} alt="" srcset="" />
      </div>
      <div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Work</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
