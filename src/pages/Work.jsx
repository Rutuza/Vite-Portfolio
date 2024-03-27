import React from 'react';

function Work() {
  return (
    <>
     <div className='p-2 font-pop bg-cream'>
     <center className="max-sm:text-2xl text-4xl font-bold italic m-4">Work</center>

        <div className='mt-8'>
          <div>
              <div>
                  <h1 className='max-sm:text-2xl font-semibold'>The power of design thinking</h1>
                  <p className='text-justify mt-4'>The strength of design thinking is found in its capacity to foster creativity, human-centered solutions, and efficient problem-solving in a variety of contexts. It's a way of thinking that prioritizes collaboration, empathy, and experimentation, which makes it a useful strategy in the complicated and quickly changing world of today.</p>
              </div>
              <div></div>
          </div>

          <div className="cards flex flex-wrap flex-row mt-4 gap-4 justify-center items-center">
            <div className='max-sm:w-full mt-4'>
              <div className='bg-gray-400 h-96 border-2 rounded-md'></div>
              <small className='max-sm:text-xl'>1. Weather Forecasting App</small>
            </div>
            <div className='max-sm:w-full'>
              <div className='bg-gray-400 h-96 border-2 rounded-md'></div>
              <small className='max-sm:text-xl'>2. Anymator - React Library</small>
            </div>
            <div className='max-sm:w-full'>
              <div className='bg-gray-400 h-96 border-2 rounded-md'></div>
              <small className='max-sm:text-xl'>3. Personal Portfolio</small>
            </div>
            <div className='max-sm:w-full'>
              <div className='bg-gray-400 h-96 border-2 rounded-md'></div>
              <small className='max-sm:text-xl'>4. Ezybit Software</small>
            </div>
          </div>

          <hr className='border-black mt-8'/>

        </div>
     </div> 
    </>
  );
}

export default Work;
