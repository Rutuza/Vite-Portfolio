import React from 'react';

import anymatorImg from '../assets/images/anymator img.jpg';
import chatappImg from '../assets/images/chatapp.jpg';
import ezybit from '../assets/images/SDE app.jpg';
import umbrella from '../assets/images/umbrella.jpg';



function Projects() {
  return (
    <>
     <div className='p-8'>
      <h3 className='font-pop font-bold text-2xl'>Projects</h3>

      <div className='mt-4 flex'>
        <div>
          <img src={chatappImg} alt="" className=''/>
          <p className='mt-3 font-pop font-bold text-xl'>Chat Application</p>
        </div>

        <div>
          <img src={umbrella} alt="" className=''/>
          <p className='mt-3 font-pop font-bold text-xl'>Weather App</p>
        </div>
      </div>
     </div>
    </>
  );
}

export default Projects;
