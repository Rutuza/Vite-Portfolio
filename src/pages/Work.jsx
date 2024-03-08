import React from 'react';

function Work() {
  return (
    <>
      <section className='font-pop'>
        <center className="text-4xl font-bold italic m-5">Some Inspiration</center>
        <div className='p-10'> {/*list */}
            <ul className='flex gap-32 p-10'>
                <li className='text-xl font-semibold hover:text-[#ff4773]'><a href="#">All</a></li>
                <li className='text-xl font-semibold hover:text-[#ff4773]'><a href="#">Projects</a></li>
                <li className='text-xl font-semibold hover:text-[#ff4773]'><a href="#">Designs</a></li>
                <li className='text-xl font-semibold hover:text-[#ff4773]'><a href="#">Photos</a></li>
                <li className='text-xl font-semibold hover:text-[#ff4773]'><a href="#">Quotes</a></li>
            </ul>

          <div className=" flex flex-wrap p-10 gap-5">
            <div className="bg-gray-200 w-5/12 h-80 hover:bg-violet-200 text-center group img">
              <img src="" alt="" srcset="" className=''/>
              <div className='h-full flex items-center justify-center text-3xl opacity-0 group-[.img]:opacity-1'>xyz</div>
            </div>
            <div className='bg-gray-200 w-1/2 h-80'></div>
            
          </div>

        </div>
      </section>
    </>
  );
}

export default Work;
