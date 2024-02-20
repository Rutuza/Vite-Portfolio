import React from "react";
import logo from "../assets/svg/logo.svg";


function Navbar() {
  return (
    <header className="sticky top-0 flex justify-between items-center justify-items-center px-2 py-1 border-b-2 border-black bg-white">
      <div>
        <img src={logo} alt="" srcset="" />
      </div>

      <div className="flex gap-10 text-base justify-items-center items-center">
        <nav>
          <ul className="flex gap-5 font-semibold">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <button>toggle</button>
      </div>
    </header>
  );
}

export default Navbar;
