import React from 'react';
import ellipse from '../assets/svg/ellipse.svg';
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Home() {
  const [text] = useTypewriter(
    {
      words: ['Jyotika Dalal', 'Developer', 'Designer', 'Photographer'],
      loop: 0,
    }
  )
  return (
    <div className='m-8 font-pop max-sm:mt-28'>
      <div className="max-sm:grid max-sm:gap-y-12 flex justify-between items-center md:text-3xl">
        <div className="text-content">
          <h1 className='font-bold text-6xl max-sm:text-3xl'>Hi <br />
          I am <span>{text}</span><Cursor cursorColor='#936BE8' /></h1>

          <h6 className='text-lg mt-3'>Design and code what you think</h6>
        </div>
        <div className="circles">
          <img src={ellipse} alt=""/>
        </div>
      </div>
    </div>
  );
}

export default Home;
