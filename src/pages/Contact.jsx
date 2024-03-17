import React from 'react';
import contactdp from '../assets/svg/contact pic.svg';
import contactPic from '../assets/svg/contact pic.svg';

function Contact() {
  return (
    <>
        <section>
            <center className='text-4xl font-bold italic m-4'>Contact</center>
            <div className="container font-pop p-8 xl:px-28 xl:py-0 lg:flex lg:flex-wrap lg:items-center lg:justify-between">
                <div className='grid gap-4 max-sm:text-center sm:text-center md:text-center lg:text-left'>
                    <img className='max-sm:block max-sm:m-auto sm:block sm:m-auto' src={contactdp} alt="" />
                    <h1 className='text-3xl font-semibold max-sm:text-center '>Thank you!</h1>
                    <h5 className='font-semibold text-xl'>Get in touch:</h5>
                    <h6 className='text-base'>dalal.jyotika05@gmail.com</h6>    
                </div>

                <div className='mt-16 grid gap-8 relative lg:w-1/2 xl:w-2/5'>
                    <h1 className='font-semibold text-3xl'>Want to connect ?</h1>
                    
                    <form action="" className='grid gap-4'>
                        <label className='font-semibold'>Name <span className='grid font-normal border-2 border-l-0 border-r-0 border-t-0'><input type="text" name='username' /></span></label>
                        <label className='font-semibold'>Email <span className='grid font-normal border-2 border-l-0 border-r-0 border-t-0 outline-none'><input type="email" /></span></label>
                        <label className='font-semibold'>Message <span className='grid font-normal border-2 border-l-0 border-r-0 border-t-0 outline-none'><input type="text" name='message'/></span> </label>
                    </form>
                    <div className='bg-black text-violet-400 font-semibold border-2 rounded-md p-4 hover:bg-transparent hover:border-black max-sm:block max-sm:m-auto max-sm:w-2/5 sm:w-2/5 sm:block sm:m-auto text-center'>
                        <button type="button" className='text-center'>Send</button>
                        
                    </div>

                    <div className="mytext text-violet-500 sm:w-3/5 sm:absolute sm:-bottom-28 sm:right-0">
                        <p className='text-justify text-sm'>I understand that it may be troublesome to take a chance on me, but I feel that with my potential and devotion, I can become the best junior designer you could hire.</p>
                        <small className='max-sm:float-right max-sm:mt-3 sm:absolute sm:right-0'>-Jyotika Dalal</small>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default Contact;
