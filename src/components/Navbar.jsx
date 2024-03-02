import React, { useState } from 'react';
import logo from '../assets/svg/logo.svg';
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const[isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <header className='relative'>
        <nav className='p-2 flex justify-between items-center border-b-2 border-gray-900'>

          <div>
            <img src={logo} alt="" />
          </div>

            <div className={`max-sm:absolute top-0 -left-0 py-5 w-full max-sm:h-48 duration-700 ease-in-out max-sm:text-white max-sm:bg-warmGray flex justify-around sm:justify-end sm:translate-y-0 ${isVisible && ' -translate-y-[300%]'} `}>
              <ul className='flex items-center sm:justify-end sm:gap-8 gap-4 font-semibold max-sm:flex-wrap max-sm:gap-x-0 w-4/5 font-pop'>
                <li className='max-sm:w-1/3'><a href="#">Home</a></li>
                <li className='max-sm:w-1/3'><a href="#">About</a></li>
                <li className='max-sm:w-1/3'><a href="#">Skills</a></li>
                <li className='max-sm:w-1/3'><a href="#">Work</a></li>
                <li className='max-sm:w-1/3'><a href="#">Contact</a></li>
              </ul>
              <div className='sm:hidden'><RxCross2 className='w-5 h-5' onClick={() => {setIsVisible(!isVisible)}}/></div>

            </div>
            
          

            <div onClick={() => {setIsVisible(!isVisible)}} className='sm:hidden'>
              <div className='w-8 h-1.5 m-2 border rounded bg-black'></div>
              <div className='w-8 h-1.5 m-2 border rounded bg-black'></div>
              <div className='w-8 h-1.5 m-2 border rounded bg-black'></div>
            
            </div>
        </nav>
      </header>
    </div>
  );
}

export default Navbar;
