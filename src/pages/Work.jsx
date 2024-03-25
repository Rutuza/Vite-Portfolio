import React from 'react';

function Work() {
  return (
    <>
     <div className='p-2 font-pop bg-cream'>
        <center>Work</center>
        <div>
            <div>
                <h1 className='max-sm:text-2xl font-semibold'>The power of design thinking</h1>
                <p className='text-justify mt-4'>The strength of design thinking is found in its capacity to foster creativity, human-centered solutions, and efficient problem-solving in a variety of contexts. It's a way of thinking that prioritizes collaboration, empathy, and experimentation, which makes it a useful strategy in the complicated and quickly changing world of today.</p>
            </div>
            <div></div>
        </div>
        <div className="cards flex flex-wrap flex-row mt-4 gap-4">
            <div className='bg-gray-400 w-40 h-96 border-2 rounded-md'></div>
            <div className='bg-gray-400 w-40 h-96 border-2 rounded-md'></div>
            <div className='bg-gray-400 w-40 h-96 border-2 rounded-md'></div>
            <div className='bg-gray-400 w-40 h-96 border-2 rounded-md'></div>
        </div>
     </div> 
    </>
  );
}

export default Work;
