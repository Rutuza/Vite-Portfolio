import React from 'react';
import circles from '../assets/svg/ellipse.svg'
import { useTypewriter, Cursor } from 'react-simple-typewriter';

import { ImLinkedin } from "react-icons/im";
import { VscGithubInverted } from "react-icons/vsc";
import { RiInstagramFill } from "react-icons/ri";
import { FaBehance } from "react-icons/fa";

function Home() {
  const [text] = useTypewriter({
    words: ['Jyotika Dalal', 'Developer', 'UI/UX Designer', 'Photographer'],
    loop: {},
    typeSpeed: 122,
});
  
  return (
    <div className='p-6 bg-gray-100'>
      <div className='lg:flex lg:items-center lg:justify-between lg:px-8 max-sm:grid max-sm:gap-10 max-lg:block max-lg:m-auto'>
        <div className='font-pop max-sm:text-center'>
          <h1 className='font-semibold text-4xl sm:text-5xl max-sm:text-3xl py-1'>Hello !</h1>
          <h1 className='font-semibold text-4xl sm:text-5xl max-sm:text-3xl py-1'>I am <span>{text}</span></h1>
          <p className='py-2 text-sm max-sm:text-sm'>Design and code what you think</p>
        </div>
        <div className=''>
          <img src={circles} alt="" />
        </div>
      </div>

      <div className="px-6 font-pop font-semibold flex items-center gap-4 max-sm:p-6">
        <span>Follow me on: </span>
        <ul className='flex gap-4'>
          <li><a href="#" target='_blank'><ImLinkedin /></a></li>
          <li><a href="#" target='_blank'></a><VscGithubInverted /></li>
          <li><a href="#" target='_blank'></a><RiInstagramFill /></li>
          <li><a href="#" target='_blank'></a><FaBehance /></li>
        </ul>
      </div>


    </div>
  );
}

export default Home;
