import React from 'react';
import ellipse from '../assets/svg/ellipse.svg';
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
  const [text] = useTypewriter(
    {
      words: ['Jyotika Dalal', 'Developer', 'Designer'],
      loop: 0,
    }
  )
  return (
    <div className='m-8 font-pop max-sm:mt-28 md:justify-center md:items-center md:p-10'>
      <div className="max-sm:grid max-sm:gap-y-12 flex flex-wrap justify-between items-center lg:block">
        <div className="text-content">
          <h1 className='font-bold text-5xl max-sm:text-3xl max-md:p-4'>Hello ! <br />
          I am <span>{text}</span><Cursor cursorColor='#936BE8' /></h1>

          <h6 className='w-60 text-lg max-sm:text-xs max-md:text-sm max-md:pl-4 max-md:w-64'>Design and code what you think</h6>
        </div>
        <div className="max-lg:m-10 md:mt-20">
          <img src={ellipse} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Home;
