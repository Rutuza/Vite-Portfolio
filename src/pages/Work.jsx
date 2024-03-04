import React from 'react';

function Work() {
  return (
    <>
      <section className='font-pop'>
        <center className="text-4xl font-bold italic m-5">Some Inspiration</center>
        <div className='p-10'> {/*list */}
            <ul className='flex gap-32'>
                <li className='text-xl font-semibold hover:text-[#ff4773]'><a href="#">All</a></li>
                <li className='text-xl font-semibold hover:text-[#ff4773]'><a href="#">Projects</a></li>
                <li className='text-xl font-semibold hover:text-[#ff4773]'><a href="#">Designs</a></li>
                <li className='text-xl font-semibold hover:text-[#ff4773]'><a href="#">Photos</a></li>
                <li className='text-xl font-semibold hover:text-[#ff4773]'><a href="#">Quotes</a></li>
            </ul>
        </div>
      </section>
    </>
  );
}

export default Work;
