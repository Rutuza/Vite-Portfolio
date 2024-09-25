import React, { useState } from "react";
import logo from "../assets/svg/logo.svg";
import { RxCross2 } from "react-icons/rx";
import Footer from "./Footer";

function Navbar() {
  const menuItems = ["Home", "About", "Skills", "Work", "Contact"];
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="sticky top-0 z-10 bg-cream">
      <header className="relative">
        <nav className="px-10 flex justify-between items-center border-b-2 border-gray-900">
          <div className="flex items-center gap-2">
            <img src={logo} alt="" />
            <div className="name text-sm">Jyotika Dalal</div>
            <div className="pronoun text-sm text-zinc-500">(She/her)</div>
          </div>

          <div
            className={`max-sm:absolute max-sm:h-screen top-0 -left-0 py-5 w-full duration-1000 ease-in-out max-sm:text-white max-sm:bg-warmGray flex justify-around sm:justify-end sm:translate-y-0 ${
              isVisible && " -translate-y-[300%]"
            } `}
          >
            <ul className=" font-pop font-medium flex justify-center items-center max-sm:flex-col sm:gap-4">
              {menuItems.map((item) => (
                <li
                  key={item}
                  className="max-sm:w-full max-sm:py-4 max-sm:text-2xl">
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
            <div className="fixed right-10 top-10 sm:hidden">
              <RxCross2
                className="w-7 h-7"
                onClick={() => {
                  setIsVisible(!isVisible);
                }}
              />
            </div>
          </div>

          <div
            onClick={() => {
              setIsVisible(!isVisible);
            }}
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
}

export default Navbar;
