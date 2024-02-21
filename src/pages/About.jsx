import React from 'react';
import pfp from '../assets/svg/pfp.svg'

function About() {
  return (
    <div id='p-0'>
      <center className='text-4xl font-bold italic m-5'>About Me</center>

      <section className='flex justify-between items-center mt-20'>
        <div className="pfp">
          <img src={pfp} alt="" srcset="" />
        </div>

        <div className='flex gap-5 text-lg text-justify w-3/6'>
          <div className="text-violet-500">"</div>
          <div>
            <div className="mt-10">
              I am a Final year, Computer Science student at Amity University Madhya Pradesh, Gwalior. I have strong passion for Web Development, UI/UX Designing and Database. I get to combine my love for technology with my passion for art and design. I enjoy using my creativity and problem-solving skills to create digital experiences that do not only look great but also work seamlessly for the user. I believe that continuous learning is the key to success and I’m always on the lookout for fresh challenges to keep me motivated and engaged.

              <div className="mt-10">
                <div className="name"><b>Name: </b>Jyotika Dalal</div>
                <div className="py-2"><b>Phone: </b>(+91) 8319278208</div>
                <div className="py-0"><b>E-mail: </b>dalal.jyotika@05gmail.com</div>
                <div className="py-2"><b>Address: </b>Prabhatam heights, Raisen road, Bhopal (M.P), India</div>

                <div className="flex gap-2"><b>Social: </b>
                  <span>
                    <ul className='flex gap-4'>
                      <li><a href="https://www.linkedin.com/in/jyotika-dalal-2bb242240/">Linkedin</a></li>
                      <li><a href="https://github.com/Rutuza">Github</a></li>
                      <li><a href="#">Instagram</a></li>
                      <li><a href="#">Dribble</a></li>
                      <li><a href="#">Behance</a></li>
                    </ul>
                  </span>
                </div>

                <button type='button' className='mt-10 w-2/5 bg-black text-violet-400 hover:bg-transparent hover:text-violet-700 hover:border-black  border rounded-md p-2 '>Download CV</button>
              </div>


            </div>

          </div>
        </div>
        <button type="button"></button>
      </section>

      <section className="py-3">
        <div className="flex">
          <div className='text-3xl font-medium'>Education</div>
          <div className='border-2'></div>
        </div>
      </section>
    </div>
  );
}

export default About;
