import React from 'react';

function Work() {
  let work_des = ['All', 'Projects', 'Designs', 'Photos', 'Quotes'];
  let img_set = ['weather app', 'portfolio', 'airbnb-img',];

  return (
    <>
      <section className='font-pop'>
        <center className="text-4xl font-bold italic m-5">Work</center>
        {/* <div className='p-10'> 
            <ul className='flex items-center justify-start gap-10'>
                {work_des.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>

            <div>
              <ul>
                {img_set.map((imglist, index) => (<li key={index}>{imglist}</li>))}
              </ul>
            </div>

        </div> */}
      </section>
    </>
  );
}

export default Work;
