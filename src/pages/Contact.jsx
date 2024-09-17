import React from 'react';

function Contact() {
  return (
    <>
     <div className='px-16 p-8'>
        <div className="title text-xl font-pop font-semibold">Contact</div>
        <h1 className='text-right text-6xl'>hello.jyotikadalal.com</h1>

        <form action="">
          <div className="flex flex-row gap-16 items-center">
            <div className='grid w-80'>
              <label htmlFor="">Name</label>
              <input type="text" name="" id="" placeholder='name' className='border-black border'/>
            </div>
            <div className='grid w-80'>
              <label htmlFor="">Email</label>
              <input type="email" name="" id="" placeholder='name' className='border-black border'/>
            </div>

          </div>
            <div className="subject w-1/2 grid">
              <label htmlFor="">Subject</label>
              <input type="text" name="" id="" placeholder='subject' className='border-black border'/>
            </div>

            <div className="mesaage w-1/2 grid">
              <label htmlFor="">Message</label>
              <textarea name="" id=""  placeholder='message' className='border-black border'></textarea>
            </div>
        </form>
     </div> 
    </>
  );
}

export default Contact;
