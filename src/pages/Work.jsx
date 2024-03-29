import React from 'react';

function Work() {
  return (
    <>
     <div className='p-2 font-pop bg-cream'>
     <center className="max-sm:text-2xl text-4xl font-bold italic m-4">Work</center>

        <div className='mt-8'>
          <div>
              <div className='w-1/2'>
                  <h1 className='text-4xl font-semibold'>The power of design thinking</h1>
                  <p className='text-justify mt-4'>The strength of design thinking is found in its capacity to foster creativity, human-centered solutions, and efficient problem-solving in a variety of contexts. It's a way of thinking that prioritizes collaboration, empathy, and experimentation, which makes it a useful strategy in the complicated and quickly changing world of today.</p>
              </div>
              <div></div>
          </div>

          <div className="container mt-16 flex flex-wrap justify-center items-center gap-4">
            <div>
              <div className='w-56 h-96 bg-gray-300'></div>
              <div>1. Weather Forecasting App</div>
            </div>
            <div>
              <div className='w-56 h-96 bg-gray-300'></div>
              <div>1. Anymator</div>
            </div>
            <div>
              <div className='w-56 h-96 bg-gray-300'></div>
              <div>1. Personal Portfolio</div>
            </div>
            <div>
              <div className='w-56 h-96 bg-gray-300'></div>
              <div>1. Ezybit Software</div>
            </div>
          </div>

          <hr className='border-black mt-8'/>

          <div className="projects-container">
            <div className="weather-app">
              <h1>Weather Forecasting App</h1>
            </div>
          </div>

        </div>
     </div> 
    </>
  );
}

export default Work;
