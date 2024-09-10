import React from 'react';

import AboutmeContent from '../components/AboutmeContent';
import pfp from '../assets/svg/pfp.svg';
import DownloadCVbtn from '../components/DownloadCVbtn';

import Education from '../components/Education';
import ExprienceDetails from '../components/ExperienceDetails';


function About() {
  return (
    <>
    <div className='p-3'>
      <div className="photo">
        <img src={pfp} alt="" />
      </div>
      <AboutmeContent />
      <DownloadCVbtn />

      <div className='relative'>
        <Education />
        <ExprienceDetails />
      </div>
      
    </div>
    </>
  );
}

export default About;
