import React from 'react';
import circles from '../assets/svg/ellipse.svg'
import { useTypewriter, Cursor } from 'react-simple-typewriter';

import { ImLinkedin } from "react-icons/im";
import { VscGithubInverted } from "react-icons/vsc";
import { RiInstagramFill } from "react-icons/ri";
import { FaBehance } from "react-icons/fa";

function Home() {
  const [text] = useTypewriter({
    words: ['Jyotika Dalal', 'Developer', 'Designer', 'Photographer'],
    loop: {},
    typeSpeed: 122,
});
  
  return (
    // <div className='p-6 bg-gray-100 h-full relative'>
    //   <div className='font-pop flex justify-between items-center p-5 flex-wrap'>
    //     <div className='max-sm:text-sm'>
    //       <h1 className='font-semibold text-4xl sm:text-5xl max-sm:text-3xl py-1'>Hello !</h1>
    //       <h1 className='font-semibold text-4xl sm:text-5xl max-sm:text-3xl py-1'>I am <span>{text}</span></h1>
    //       <p className='py-2 text-sm max-sm:text-sm'>Design and code what you think</p>
    //     </div>
    //     <div className=''>
    //       <img src={circles} alt="" />
    //     </div>
    //   </div>

    //   <div className="px-6 font-pop font-semibold flex items-center gap-4">
    //     <span>Follow me on: </span>
    //     <ul className='flex gap-4'>
    //       <li><a href="#" target='_blank'><ImLinkedin /></a></li>
    //       <li><a href="#" target='_blank'></a><VscGithubInverted /></li>
    //       <li><a href="#" target='_blank'></a><RiInstagramFill /></li>
    //       <li><a href="#" target='_blank'></a><FaBehance /></li>
    //     </ul>
    //   </div>


    // </div>
    <>
      <div className=''>
        <div className='sm:grid sm:grid-flow-row sm:justify-center lg:flex lg:items-center lg:justify-between lg:p-10'>
          <div className='py-12'>
            <h1 className="p-2 max-sm:text-center max-sm:font-bold max-sm:text-3xl w-full sm:text-center sm:text-5xl sm:font-semibold lg:text-left">Hello!</h1>
            <h1 className="p-2 max-sm:text-center max-sm:font-bold max-sm:text-3xl w-full sm:text-center sm:text-5xl sm:font-semibold lg:text-left">I am <span>{text}</span></h1>
          </div>
          <div className=''>
            <img src={circles} alt="" srcset="" />
          </div>
        </div>

        <div className='py-3 flex flex-row items-center gap-4 font-pop font-semibold max-sm:pt-4 max-sm:flex max-sm:justify-center max-sm:text-sm sm:justify-center sm:pt-5 lg:absolute lg:left-12 lg:bottom-0'>
          <span>Follow me on: </span>
          <ul className='flex gap-4'>
            <li><a href="#" target='_blank'><ImLinkedin /></a></li>
            <li><a href="#" target='_blank'></a><VscGithubInverted /></li>
            <li><a href="#" target='_blank'></a><RiInstagramFill /></li>
            <li><a href="#" target='_blank'></a><FaBehance /></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
