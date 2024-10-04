import React, { useState } from "react";
import logo from "../assets/svg/logo.svg";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll"; // Import Link from react-scroll

// Navbar Component
const Navbar = () => {
  const routes = [
    { path: "home", label: "Home" }, // Use section IDs without the hash
    { path: "about", label: "About" },
    { path: "skills", label: "Skills" },
    { path: "projects", label: "Projects" },
    { path: "contact", label: "Contact" },
  ];

  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="sticky top-0 z-10 bg-cream">
      <header className="relative">
        <nav className="flex justify-between items-center shadow-lg px-5 shadow-cream-300">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Logo" />
            <div className="name text-sm">Jyotika Dalal</div>
            <div className="pronoun text-sm text-zinc-500">(She/her)</div>
          </div>

          {/* Navigation Links */}
          <div
            className={`max-sm:absolute max-sm:h-screen top-0 -left-0 py-5 w-full duration-1000 ease-in-out max-sm:text-white max-sm:bg-warmGray flex justify-around sm:justify-end sm:translate-y-0 ${
              isVisible ? "translate-y-0" : "-translate-y-[300%]"
            }`}
          >
            <ul className="font-pop font-semibold gap-x-10 flex justify-center items-center max-sm:flex-col">
              {routes.map((route) => (
                <li
                  key={route.path}
                  className="max-sm:w-full max-sm:py-4 max-sm:text-2xl cursor-pointer"
                >
                  <Link
                    to={route.path} // Link to section ID
                    smooth={true} // Enable smooth scroll
                    duration={500} // Scroll duration
                    spy={true} // Active class based on scroll position
                    offset={-50} // Offset to adjust scroll position
                    onClick={() => setIsVisible(!isVisible)} // Close menu after click
                  >
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="fixed right-10 top-10 sm:hidden">
              <RxCross2
                className="w-7 h-7"
                onClick={() => setIsVisible(!isVisible)}
              />
            </div>
          </div>

          {/* Hamburger Icon */}
          <div
            onClick={() => setIsVisible(!isVisible)}
            className="lg:hidden flex flex-col justify-center items-end sm:hidden"
          >
            <div className="w-6 h-[2.5px] m-[1px] border-0 rounded bg-black"></div>
            <div className="w-4 h-[2.5px] m-[1px] border-0 rounded bg-black"></div>
            <div className="w-6 h-[2.5px] m-[1px] border-0 rounded bg-black"></div>
            <div className="w-4 h-[2.5px] m-[1px] border-0 rounded bg-black"></div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;