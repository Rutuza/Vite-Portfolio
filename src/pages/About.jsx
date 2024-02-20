import React from 'react';
import pfp from '../assets/svg/pfp.svg'

function About() {
  return (
    <div id='about'>
      <center className='text-4xl font-bold italic m-5'>About Me</center>

      <section className='flex justify-between sm:'>
        <div className="pfp">
          <img src={pfp} alt="" srcset="" />
        </div>

        <div className='flex gap-5 text-lg text-justify w-3/6'>
          <div className="">"</div>
          <div className="">
            I am a third year Computer Science student at Amity University Madhya Pradesh, Gwalior. I have strong passion for Web Development, UI/UX Designing and Database. I get to combine my love for technology with my passion for art and design. I enjoy using my creativity and problem-solving skills to create digital experiences that do not only look great but also work seamlessly for the user. I believe that continuous learning is the key to success and I’m always on the lookout for fresh challenges to keep me motivated and engaged.
          </div>
        </div>
        <button type="button"></button>
      </section>
    </div>
  );
}

export default About;
