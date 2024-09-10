import React from 'react';

import AboutmeContent from '../components/AboutmeContent';
import pfp from '../assets/svg/pfp.svg';
import DownloadCVbtn from '../components/DownloadCVbtn';

import Education from '../components/Education';
import Exprnce from '../components/Exprnce';
import Certifications from '../components/Certifications';
import KnownLanguages from '../components/KnownLanguages';



function About() {
  return (
    <>
    <div className='p-3'>
      <div className="photo">
        <img src={pfp} alt="" />
      </div>
      <AboutmeContent />
      <DownloadCVbtn />

      <div className='relative max-sm:grid max-sm:grid-flow-row'>
        <Education />
        <Exprnce />
        <Certifications />
        <KnownLanguages />
        
      </div>
      
    </div>
    </>
  );
}

export default About;
