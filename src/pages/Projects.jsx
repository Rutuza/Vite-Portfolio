import React from 'react';
// import { useState } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
// import { Pagination, Navigation } from 'swiper';

function Projects() {
  return (
    <>
     <div className=''>
      <div className='text-center text-4xl font-bold'>Projects</div>

      <div className='flex flex-row flex-wrap gap-4 justify-center items-center my-10'>
        <div className='relative flex flex-col items-center'>
          <div className=' w-56 h-[30rem] border-2 rounded-md'></div>
          <p className='font-cvt text-lg'>01. Weather Forecasting App</p>
        </div>
        <div className='relative flex flex-col items-center'>
          <div className=' w-56 h-[30rem] border-2 rounded-md'></div>
          <p className='font-cvt text-lg'>02. Anymator - react library</p>
        </div>
        <div className='relative flex flex-col items-center'>
          <div className=' w-56 h-[30rem] border-2 rounded-md'></div>
          <p className='font-cvt text-lg'>03. Personal Portfolio</p>
        </div>
        <div className='relative flex flex-col items-center'>
          <div className=' w-56 h-[30rem] border-2 rounded-md'></div>
          <p className='font-cvt text-lg'>04. Ezybit software</p>
        </div>
      </div>

      <hr className=''/>
      <div className=' font'>sjahdjshdkj</div>
     </div> 

    </>
  );
}

export default Projects;
