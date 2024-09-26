import React from 'react';

function Homepage() {
  
  return (
    <>
      <div className='mt-4'>
        <div className="wraper grid-flow-row grid justify-center gap-2">
          <div className='flex items-center gap-2 justify-center font-medium'>
            <div className="circle w-2.5 h-2.5 bg-green-400 rounded-full "></div>
            <div>Available for Freelance</div>
          </div>
          <div className='text-4xl font-semibold text-center max-sm:text-xl'>Hello, I am</div>
          <div className="list text-6xl font-bold text-center max-sm:text-2xl">Jyotika Dalal</div>
        </div>

        <div className='flex items-center justify-between p-2 mt-6 text-lg font-medium'>
          <div className='max-sm:text-xs'>Based in Maharashtra, India</div>
          <div className='max-sm:text-xs'>Web Developer + <span className='text-gray-500'>Figma Designer</span></div>
        </div>

        <div className='w-full overflow-x-hidden '>
          <img className='w-[200vw] max-w-none animate-scrollGrid translate-x-0' srcSet="https://unsplash.com/assets/api/api-photo-grid@2x-388d83e210e483af53295e6574d71e343557875502b68b56b3cf0e1c0040b440.jpg" alt="photo grid"/>
        </div>
      </div>
    </>
  );
}

export default Homepage;
