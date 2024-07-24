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

          <div className='text-6xl font-bold'>Jyotika Dalal</div>
          
        </div>
      </div>
    </>
  );
}

export default Homepage;
