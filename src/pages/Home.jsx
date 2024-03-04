import React from 'react';
import circles from '../assets/svg/ellipse.svg'
import { useTypewriter, Cursor } from 'react-simple-typewriter';

function Home() {
  const [text] = useTypewriter({
    words: ['Jyotika Dalal', 'Developer', 'UI/UX Designer', 'Photographer'],
    loop: {},
    typeSpeed: 122,
});
  
  return (
    <div className='p-6'>
      <div className='lg:flex lg:items-center lg:justify-between lg:px-8 max-sm:grid max-sm:gap-10'>
        <div className='font-pop'>
          <h1 className='font-semibold text-4xl sm:text-5xl max-sm:text-3xl py-1'>Hello !</h1>
          <h1 className='font-semibold text-4xl sm:text-5xl max-sm:text-3xl py-1'>I am <span>{text}</span></h1>
          <p className='py-2 text-sm max-sm:text-sm'>Design and code what you think</p>
        </div>
        <div className=''>
          <img src={circles} alt="" />
        </div>
      </div>

    </div>
  );
}

export default Home;
