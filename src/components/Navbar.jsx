import React from "react";
import logo from "../assets/svg/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <header className="sticky top-0 flex justify-between items-center justify-items-center px-2 py-1 border-b-2 border-black bg-white">
      <div>
        <img src={logo} alt="" srcset="" />
      </div>

      <div className=" flex gap-10 text-base justify-between items-center">
        <nav>
          <ul className="absolute left-1/2 transform ">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <button className="sm:hidden block"><RxHamburgerMenu className="h-8 w-8"/></button>
      </div>
    </header>
  );
}

export default Navbar;
