import React from 'react';

import cameraLens from '../assets/images/camera lens.jpg';
import ezybit from '../assets/images/Ezybit.png';

function Work() {
  return (
    <>
      <div>
      <center className="text-4xl font-bold italic m-4">Work</center>
      <div className='mt-10'>
        <ul className='flex flex-row gap-32 max-sm:gap-10 items-center justify-center font-medium'>
          <li><a href="#" className='hover:text-violet-500'>All</a></li>
          <li><a href="#" className='hover:text-violet-500'>Projects</a></li>
          <li><a href="#" className='hover:text-violet-500'>Logo</a></li>
          <li><a href="#" className='hover:text-violet-500'>Gallery</a></li>
        </ul>
      </div>

      <div className="images max-sm:mt-8 max-sm:p-1">
        <img src={cameraLens} alt="" />
        <img src={ezybit} alt="" />
        <img src="" alt="" />
      </div>
      </div>
    </>
  );
}

export default Work;
