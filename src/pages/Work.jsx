import React from 'react';

function Work() {
  let work_des = ['All', 'Projects', 'Designs', 'Photos', 'Quotes'];
  let img_set = ['weather app', 'portfolio', 'airbnb-img',];

  return (
    <>
      <section className='font-pop'>
        <center className="text-4xl font-bold italic m-5">Some Inspiration</center>
        <div className='p-10'> {/*list */}
            <ul className='flex items-center justify-start gap-10'>
                {work_des.map((item, index) => (<li key={index}>{item}</li>))}
            </ul>

            <div>
              <ul>
                {img_set.map((imglist, index) => (<li key={index}>{imglist}</li>))}
              </ul>
            </div>

          {/* <div className=" flex flex-wrap p-10 gap-5">
            <div className="bg-gray-200 h-80 hover:bg-violet-200 text-center group img relative">
              <div className='text-white h-full flex items-center justify-center text-3xl opacity-0 group-hover:opacity-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>xyz</div>
              <img src="http://source.unsplash.com/550x320/?weather" alt="" srcset="" className=''/>
            </div>
            <div className="bg-gray-200 h-80 hover:bg-violet-200 text-center group img">
              <img src="http://source.unsplash.com/550x320/?birds" alt="" srcset="" className=''/>
              <div className='h-full flex items-center justify-center text-3xl opacity-0 group-hover:opacity-100 absolute'>xyz</div>
            </div>
          </div> */}

        </div>
      </section>
    </>
  );
}

export default Work;
