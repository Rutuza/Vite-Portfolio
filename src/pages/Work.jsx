import React from 'react';

function Work() {
  return (
    <>
      <section className='font-pop'>
        <center className="text-4xl font-bold italic m-5">Some Inspiration</center>
        <div className='p-8'> {/*list */}
            <ul className='flex gap-32 p-10'>
                <li className='text-xl font-semibold hover:text-[#ff4773]'><a href="#">All</a></li>
                <li className='text-xl font-semibold hover:text-[#ff4773]'><a href="#">Projects</a></li>
                <li className='text-xl font-semibold hover:text-[#ff4773]'><a href="#">Designs</a></li>
                <li className='text-xl font-semibold hover:text-[#ff4773]'><a href="#">Photos</a></li>
                <li className='text-xl font-semibold hover:text-[#ff4773]'><a href="#">Quotes</a></li>
            </ul>

          <div className=" flex flex-wrap">
            <div className="bg-gray-200 w-5/12 h-80"></div>
            <div className='bg-green-200 w-1/2 h-80'></div>
            
          </div>

        </div>
      </section>
    </>
  );
}

export default Work;
