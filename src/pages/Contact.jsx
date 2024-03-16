import React from 'react';

import contactPic from '../assets/svg/contact pic.svg';

function Contact() {
  return (
    <>
        <section className="flex flex-row justify-between px-24 py-8 bg-cream max-sm:grid max-sm:grid-flow-row max-sm:p-4">
            <div className='grid grid-flow-row font-pop gap-8'>
                <img src={contactPic} alt="" />
                <h1 className='text-7xl max-sm:text-4xl max-sm:font-bold max-sm:text-center'>Thank you</h1>
                <h5 className='text-xl font-semibold'>Get in touch: </h5>
                <h6 className='font-medium'>dalal.jyotika05@gmail.com</h6>
            </div>
            <div className='grid font-pop w-2/5 max-sm:w-full max-sm:mt-16'>
                <h1 className='text-5xl max-sm:text-3xl max-sm:w-full'>Wanna Connect?</h1>
                <ul className='grid gap-4 max-sm:mt-4'>
                    <li className='grid'>Name <label htmlFor=""><input className='border-2 border-black bg-transparent border-t-0 border-r-0 border-l-0 outline-0 w-4/5 max-sm:w-full' type="text" /></label></li>
                    <li className='grid'>Email <label htmlFor=""><input className='border-2 border-black bg-transparent border-t-0 border-r-0 border-l-0 outline-0 w-4/5 max-sm:w-full' type="email" name="" id="" /></label></li>
                    <li className='grid'>Message <label htmlFor=""><input className='border-2 border-black bg-transparent border-t-0 border-r-0 border-l-0 outline-0 w-4/5 max-sm:w-full' type="text" /></label></li>
                </ul>
                <div className='w-4/5 mt-20 text-xl text-violet-400 max-sm:w-full'>
                    <p className='text-justify'>I understand that it may be troublesome to take a chance on me, but I feel that with my potential and devotion, I can become the best junior designer you could hire.</p>
                    <p className='text-right mt-8'>Jyotika Dalal</p>
                </div>
            </div>
        </section>
    </>
  );
}

export default Contact;
