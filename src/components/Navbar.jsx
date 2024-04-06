import React, { useState } from 'react';
import logo from '../assets/svg/logo.svg';
import { RxCross2 } from "react-icons/rx";
import Footer from './Footer';

function Navbar() {
  const[isVisible, setIsVisible] = useState(false);
  return (
    <div className='sticky top-0 bg-white z-10'>
      <header className='relative'>
        <nav className='px-10 flex justify-between items-center border-b-2 border-gray-900'>

          <div className='flex justify-center items-start gap-2'>
            <img src={logo} alt="" />
            <div className="name text-sm">Jyotika Dalal</div>
            <div className="pronoun text-sm text-zinc-500">(She/her)</div>
          </div>

            <div className={`max-sm:absolute top-0 -left-0 py-5 w-full max-sm:h-48 duration-700 ease-in-out max-sm:text-white max-sm:bg-warmGray flex justify-around sm:justify-end sm:translate-y-0 ${isVisible && ' -translate-y-[300%]'} `}>
              <ul className='flex items-center sm:justify-end sm:gap-8 gap-4 font-semibold max-sm:flex-wrap max-sm:gap-x-0 w-4/5 font-pop'>
                <li className='max-sm:w-1/3 hover:border-b-2 hover:border-violet-400'><a href="#">Home</a></li>
                <li className='max-sm:w-1/3 hover:border-b-2 hover:border-violet-400'><a href="#">About</a></li>
                <li className='max-sm:w-1/3 hover:border-b-2 hover:border-violet-400'><a href="#">Skills</a></li>
                <li className='max-sm:w-1/3 hover:border-b-2 hover:border-violet-400'><a href="#">Work</a></li>
                <li className='max-sm:w-1/3 hover:border-b-2 hover:border-violet-400'><a href="#">Contact</a></li>
              </ul>
              <div className='sm:hidden'><RxCross2 className='w-5 h-5' onClick={() => {setIsVisible(!isVisible)}}/></div>

            </div>
            
            <div onClick={() => {setIsVisible(!isVisible)}} className='sm:hidden max-sm:hidden'>
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
