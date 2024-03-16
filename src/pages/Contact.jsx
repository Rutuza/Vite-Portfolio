import React from 'react';
import contactdp from '../assets/svg/contact pic.svg';
import contactPic from '../assets/svg/contact pic.svg';

function Contact() {
  return (
    <>
        <section>
            <center className='text-4xl font-bold italic m-4'>Contact</center>
            <div className="container font-pop p-4">
                <div className='grid gap-4'>
                    <img className='max-sm:block max-sm:m-auto sm:block sm:m-auto' src={contactdp} alt="" />
                    <h1 className='text-3xl font-semibold max-sm:text-center '>Thank you!</h1>
                    <h5 className='font-semibold text-xl'>Get in touch:</h5>
                    <h6 className='text-base'>dalal.jyotika05@gmail.com</h6>    
                </div>

                <div className='mt-16 grid gap-8'>
                    <h1 className='font-semibold text-3xl'>Want to connect ?</h1>
                    
                    <form action="" className='grid gap-4'>
                        <div className='font-semibold'>Name <span className='grid font-normal border-2 border-l-0 border-r-0 border-t-0 outline-none'><input type="text" name='username' /></span></div>
                        <div className='font-semibold'>Email <span className='grid font-normal border-2 border-l-0 border-r-0 border-t-0 outline-none'><input type="email" /></span></div>
                        <div className='font-semibold'>Message <span className='grid font-normal border-2 border-l-0 border-r-0 border-t-0 outline-none'><input type="text" name='message'/></span> </div>
                    </form>
                    <div className='border rounded-md p-4 font-semibold max-sm:block max-sm:m-auto'>
                        <button type="button" className='text-center'>Send</button>
                        
                    </div>

                    <div className="mytext text-violet-500">
                        <p className='text-justify text-sm'>I understand that it may be troublesome to take a chance on me, but I feel that with my potential and devotion, I can become the best junior designer you could hire.</p>
                        <small className='max-sm:float-right max-sm:mt-3'>-Jyotika Dalal</small>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default Contact;
