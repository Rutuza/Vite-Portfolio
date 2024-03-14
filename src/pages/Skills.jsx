import React from 'react';
import sparkle from '../assets/svg/sparkle.svg';

import paintBrush from '../assets/svg/paintBrush.svg';
import molecule from '../assets/svg/Molecule.svg';
import dna from '../assets/svg/dna.svg';
import coding from '../assets/svg/code.svg';


function Skills() {
  return (
    <div id='skills'>
      <center className="text-4xl font-bold italic m-5">Skills</center>
      <div className="container">
        <section className='font-pop max-sm:w-full'>
          <div className=''>
              <h1 className="font-bold max-sm:text-xl">My creative skills and knowledge in technology</h1>
              <p className='text-justify w-fit'>As a Frontend developer and UI/UX Designer, I bring forth a dynamic skill set honed through [years of experience/relevant training]. Proficient in HTML5, CSS3, SASS, ReactJS, Database, I have consistently demonstrated an ability to [highlight key accomplishments or how these skills were applied]. My expertise spans [specific areas or industries], allowing me to [mention how your skills contribute to solving problems or creating value]. With a focus on [specific strengths or unique qualities], I strive to [mention your goals or how you aim to apply these skills in future endeavors]. Below I have mentioned some of my major skills.</p>
          </div>
          <div>
              <img src={sparkle} alt="" className='max-sm:absolute max-sm:right-0 bottom-3'/>
          </div>
        </section>

        <section className='techstack'>
          <div className="">
            <div className='border rounded-full w-20 h-20 border-violet-400'>
              <img src={paintBrush} alt="" srcset=""/>
            </div>
            <div className='border rounded-full w-20 h-20 border-violet-400'>
              <img src={molecule} alt="" srcset="" />
            </div>
            <div className='border rounded-full w-20 h-20 border-violet-400'>
              <img src={dna} alt="" srcset="" />
            </div>
            <div className='border rounded-full w-20 h-20 border-violet-400'>
              <img src={coding} alt="" srcset="" />
            </div>
          </div>
        </section>

        {/* certifications */}
        <section className='certificates'>
          <div className='p-5 flex justify-between items-center'>
            <div className='w-9/12'>
              <h1 className='font-bold text-3xl'>Professional Development</h1>
              <p className='mt-4 text-justify w-1/2'>I have pursued various certifications throughout my career to continuously enhance my skills and stay updated with the latest industry standards. Among my certifications, I hold a **MongoDB for SQL Experts** certification from MongoDb University, earned in September 2023, which signifies my proficiency in leading and managing projects effectively. Additionally, I completed a **CSS Skills HackerRank Test** on HackerRank in 2022, providing me with comprehensive knowledge in my CSS progressive skills which I am learning. These certifications reflect my commitment to professional development and my ability to tackle diverse challenges in the fields of project management, data science, and cloud computing.
              </p>
            </div>

            <div>
                <img src={sparkle} alt="" />
            </div> 
          </div>

          
        </section>
      </div>
    </div>
  );
}

export default Skills;
