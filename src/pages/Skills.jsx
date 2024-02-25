import React from 'react';
import sparkle from '../assets/svg/sparkle.svg';

import html5Logo from '../assets/svg/Html 5.svg';
import cssLogo from '../assets/svg/Css 3.svg';
import sassLogo from '../assets/svg/Sass.svg';
import uiux from '../assets/svg/Figma.svg';
import reactjsLogo from '../assets/svg/Atom.svg';
import nodejs from '../assets/svg/Node js.svg';
import programming from '../assets/svg/Programming.svg';
import dbms from '../assets/svg/Database.svg';

import { IoIosArrowForward } from "react-icons/io";

function Skills() {
  return (
    <div id='skills'>
      <center className="text-4xl font-bold italic m-5">Skills</center>

      <section className='flex justify-between items-center'>
        <div className='w-4/5'>
            <h1 className="font-bold text-3xl">My creative skills and knowledge in technology</h1>
            <p className='mt-4 text-justify w-3/5'>As a Frontend developer and UI/UX Designer, I bring forth a dynamic skill set honed through [years of experience/relevant training]. Proficient in HTML5, CSS3, SASS, ReactJS, Database, I have consistently demonstrated an ability to [highlight key accomplishments or how these skills were applied]. My expertise spans [specific areas or industries], allowing me to [mention how your skills contribute to solving problems or creating value]. With a focus on [specific strengths or unique qualities], I strive to [mention your goals or how you aim to apply these skills in future endeavors]. Below I have mentioned some of my major skills.</p>
        </div>
        <div>
            <img src={sparkle} alt="" />
        </div>
      </section>

      <section className='py-8 mt-10 bg-gray-600 flex flex-wrap gap-28 items-center justify-center'>
        <div className='html'>
            <img src={html5Logo} alt="" />
            <div className="mt-5 text-center text-white text-2xl ">HTML</div>
        </div>
        <div className='css'>
            <img src={cssLogo} alt="" />
            <div className="mt-5 text-center text-white text-2xl ">CSS</div>
        </div>
        <div>
            <img src={sassLogo} alt="" />
            <div className='mt-5 text-center text-white text-2xl '>SASS</div>
        </div>
        <div>
            <img src={uiux} alt="" />
            <div className='mt-5 text-center text-white text-2xl '>UI/UX Designing</div>
        </div>

        <div>
          <img src={reactjsLogo} alt="" srcset="" />
          <div className='mt-5 text-center text-white text-2xl '>React JS</div>
        </div>

        <div>
          <img src={nodejs} alt="" srcset="" />
          <div className='mt-5 text-center text-white text-2xl '>Node JS</div>
        </div>

        <div>
          <img src={programming} alt="" srcset="" />
          <div className='mt-5 text-center text-white text-2xl '>Programming</div>
        </div>

        <div>
          <img src={dbms} alt="" srcset="" />
          <div className='mt-5 text-center text-white text-2xl '>Database</div>
        </div>

      </section>

      <section className='flex justify-between relative'>
        <div>
            <img src={sparkle} alt="" />
        </div>
        <div className='w-1/2 absolute right-0'>
            <h1 className="font-bold text-3xl absolute right-0">Make beauty things with passion</h1>
            <p className='mt-14 text-justify w-3/5 absolute right-0'>I provide designer and development services to businesses of all kinds, with a focus on fashionable, cutting-edge online stores, web services, and websites. Creating strong interfaces for digital user experiences is my passion.</p>
        </div>
      </section>

      {/* certifications */}
      <section className='certificates'>
        <div className='flex justify-between items-center'>
          <div className='w-9/12'>
            <h1 className='font-bold text-3xl'>Professional Development</h1>
            <p className='mt-4 text-justify w-1/2'>I have pursued various certifications throughout my career to continuously enhance my skills and stay updated with the latest industry standards. Among my certifications, I hold a **MongoDB for SQL Experts** certification from MongoDb University, earned in September 2023, which signifies my proficiency in leading and managing projects effectively. Additionally, I completed a **CSS Skills HackerRank Test** on HackerRank in 2022, providing me with comprehensive knowledge in my CSS progressive skills which I am learning. These certifications reflect my commitment to professional development and my ability to tackle diverse challenges in the fields of project management, data science, and cloud computing.
            </p>
          </div>

          <div>
              <img src={sparkle} alt="" />
          </div> 
        </div>

        <div className="cards flex gap-10">
          <div className="bg-gray-400 w-96 h-56 rounded-lg"></div>
          <div className="bg-red-400 w-96 h-56 rounded-lg"></div>
        </div>
        <div>
          <div className="flex items-center justify-between w-96">
            <div>MongoDB for SQL Experts</div>
            <div className="arrow"><IoIosArrowForward /></div>
          </div>
          <div className="css">

          </div>
        </div>
        
      </section>
    </div>
  );
}

export default Skills;
