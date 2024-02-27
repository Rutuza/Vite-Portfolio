import React from "react";
import logo from "../assets/svg/logo.svg";
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
  return (
    <header className="sticky top-0 flex justify-between items-center justify-items-center px-2 py-1 border-b-2 border-black bg-white">
      <div>
        <img src={logo} alt="" srcset="" />
      </div>
  
        <nav>
          <ul className="md:flex items-center z-[-1]">
            <li className="mx-4 my-6 md:my-0"><a href="#" className="text-xl hover:text-red-500 duration-400">Home</a></li>
            <li className="mx-4 my-6 md:my-0"><a href="#" className="text-xl hover:text-red-500 duration-400">About</a></li>
            <li className="mx-4 my-6 md:my-0"><a href="#" className="text-xl hover:text-red-500 duration-400">Skills</a></li>
            <li className="mx-4 my-6 md:my-0"><a href="#" className="text-xl hover:text-red-500 duration-400">Work</a></li>
            <li className="mx-4 my-6 md:my-0"><a href="#" className="text-xl hover:text-red-500 duration-400">Contact</a></li>
          </ul>
        </nav>
        <button className="sm:hidden block"><RxHamburgerMenu className="h-8 w-8"/></button>
      
    </header>
  );
}

export default Navbar;
