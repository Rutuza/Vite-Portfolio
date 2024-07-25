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
          <div className='text-4xl font-semibold text-center'>Hello, I am</div>
          <div className="list text-6xl font-bold text-center">Jyotika Dalal</div>
        </div>

        <div className='flex items-center justify-between p-4 mt-6 text-lg font-medium'>
          <div>Based in Maharashtra, India</div>
          <div>Web Developer + <span className='text-gray-500'>Figma Designer</span></div>
        </div>

        <div>
          <img className='w-[4800px] h-[389.5px] bg-cover bg-repeat-x bg-center animate-scrollGrid' src="https://unsplash.com/assets/api/api-photo-grid@2x-388d83e210e483af53295e6574d71e343557875502b68b56b3cf0e1c0040b440.jpg" alt="" srcset="" />
        </div>
      </div>
    </>
  );
}

export default Homepage;
