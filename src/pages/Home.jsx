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
    <>
      <section className=''>
        <div className='sm:grid sm:grid-flow-row sm:justify-center lg:flex lg:items-center lg:justify-between lg:p-10'>
          <div className='py-12'>
            <h1 className="p-2 max-sm:text-center max-sm:font-bold max-sm:text-3xl w-full sm:text-center sm:text-5xl sm:font-semibold lg:text-left lg:text-7xl">Hello!</h1>
            <h1 className="p-2 max-sm:text-center max-sm:font-bold max-sm:text-3xl w-full sm:text-center sm:text-5xl sm:font-semibold lg:text-left lg:text-7xl">I am <span>{text}</span></h1>
          </div>
          <div className=''>
            <img src={circles} alt="" srcset="" />
          </div>
        </div>

        <div className='py-3 flex flex-row items-center gap-4 font-pop font-semibold max-sm:pt-4 max-sm:flex max-sm:justify-center max-sm:text-sm sm:justify-center sm:pt-5 lg:absolute lg:left-12 lg:bottom-0'>
          <span>Follow me on: </span>
          <ul className='flex gap-4'>
            <li><a href="https://www.linkedin.com/in/jyotika-dalal-2bb242240/" target='_blank'><ImLinkedin /></a></li>
            <li><a href="https://github.com/Rutuza" target='_blank'><VscGithubInverted /></a></li>
            <li><a href="https://www.instagram.com/rxtu_004/" target='_blank'><RiInstagramFill /></a></li>
            {/* <li><a href="#" target='_blank'></a><FaBehance /></li> */}
          </ul>
        </div>
      </section>
    </>
  );
}

export default Home;
