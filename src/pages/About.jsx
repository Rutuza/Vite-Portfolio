import React from "react";
import Navbar from "../components/Navbar";
import pfp from "../assets/svg/pfp.svg";

import { ImLinkedin } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { ImBehance2 } from "react-icons/im";


function About() {
  return (

    <div className="px-3">
      <center className="text-4xl font-bold italic m-5">About Me</center>

      <section className="max-sm:text-justify max-sm:p-3">
        <div className="max-sm:py-6 max-sm:my-5">
          <img src={pfp} alt="" srcset="" />
        </div>

        <div className="font-pop max-sm:grid max-sm:grid-flow-row max-sm:justify-center max-sm:items-center">
          <div className="content">
            I am a Final year, Computer Science student at Amity University
            Madhya Pradesh, Gwalior. I have strong passion for Web
            Development, UI/UX Designing and Database. I get to combine my
            love for technology with my passion for art and design. I enjoy
            using my creativity and problem-solving skills to create digital
            experiences that do not only look great but also work seamlessly
            for the user. I believe that continuous learning is the key to
            success and I’m always on the lookout for fresh challenges to keep
            me motivated and engaged.
          </div>
          <div className="py-5">
            <ul>
              <li className="font-semibold py-1">Name: <span className="font-light">Jyotika Dalal</span></li>
              <li className="font-semibold py-1">Phone: <span className="font-light">(+91)-8319278208</span></li>
              <li className="font-semibold py-1">E-mail: <span className="font-light">dalal.jyotika05@gmail.com</span></li>
              <li className="font-semibold py-1">Address: <span className="font-light">Prabhatam Heights, Raisen road, Bhopal (M.P), 462022, India</span></li>
            </ul>
          </div>
          <div>
            <button type="button" className="font-bold w-1/2 bg-black text-violet-400 text-center hover:bg-transparent hover:text-violet-900  hover:font-medium hover:border-black hover:border-2 border rounded-md p-2 max-sm:m-auto max-sm:block max-sm:w-3/4">Download CV</button>
          </div>
        </div>

      </section>

{/* Education section */}

      <section className="max-sm:relative"> 
        <div className="flex items-center">
          <div className="text-4xl font-medium text-left max-sm:text-3xl">Education</div>
          <div className="mx-2 w-full h-0 border-2 border-black "></div> 
        </div>

        <div className="m-0 text-violet-700 text-base max-sm:float-right max-sm:text-xs max-sm:absolute max-sm:right-2 max-sm:top-6">The journey where it all started</div>
        
        <div className="mt-5 bg-gray-200 rounded-lg"> {/* container*/}

          <div className="p-4 flex justify-between max-sm:grid max-sm:grid-flow-row max-sm:gap-4 "> {/* amity*/}
            <div className="font-medium">
              <div className="text-xl max-sm:text-2xl">Amity university, gwalior</div>
              <div className="text-violet-700">2020 - Present</div>
            </div>
            <div className="w-2/5 max-sm:w-fit">
              <div className="text-xl font-medium">
                Under Graduation | <span className="text-violet-700 text-base">B.Tech - CSE</span>
              </div>
              <div className="text-justify mt-2">
              I am graduating with a Bachelor's degree in Computer Science with a CGPA of 7.87 out of 10.00 as of the seventh semester. This CGPA reflects my strong work ethic, dedication to my studies, and readiness to pursue further academic and professional goals.
              </div>
            </div>
          </div>

         {/* rd 12th*/}

          <div className="p-4 flex justify-between max-sm:grid max-sm:grid-flow-row max-sm:gap-4">  {/* rd */}
            <div className="font-medium">
              <div className="text-xl max-sm:text-2xl">RD Public school, Betul (M.P)</div>
              <div className="text-violet-700">2018 - 2020</div>
            </div>
            <div className="w-2/5 max-sm:w-fit">
              <div className="text-xl font-medium">
                Senior Secondary | <span className="text-violet-700 text-base">PCM</span>
              </div>
              <div className="text-justify mt-2">
              I achieved a senior secondary percentage of 78.3% under the CBSE curriculum. This result reflects my commitment to academic excellence and places me within the first division of my cohort. It underscores my capability to excel in rigorous academic environments and my readiness to pursue my goals in Science.
              </div>
            </div>
          </div>

          {/* ryan */}

          <div className="p-4 flex justify-between max-sm:grid max-sm:grid-flow-row max-sm:gap-4">  {/* ryan */}
            <div className="font-medium">
              <div className="text-xl max-sm:text-2xl">Ryan International School, Bhopal (M.P)</div>
              <div className="text-violet-700">2017 - 2018</div>
            </div>
            <div className="w-2/5 max-sm:w-fit">
              <div className="text-xl font-medium">
                Higher Secondary | <span className="text-violet-700 text-base">All core subjects</span>
              </div>
              <div className="text-justify mt-2">
              I achieved a remarkable higher secondary percentage of 72.4% under the CBSE curriculum. This demonstrates my strong dedication to academic success. It highlights my strong analytical abilities and drive for success, traits that will be helpful to me as I work toward my objectives in my respective field.

              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Experience section */}

      <section className="py-12">
      <div className="flex items-center">
          <div className="text-4xl font-medium text-left">Experience</div>
          <div className="mx-2 w-full h-0 border-2 border-black"></div> 
        </div>

        <div className="mt-5 bg-gray-200 rounded-lg "> {/* container*/}

          <div className="p-4 flex justify-between max-sm:grid max-sm:grid-flow-row max-sm:gap-4"> {/* MERN internship*/}
            <div className="font-medium">
              <div className="text-xl">Nullclass Ed Tech, Bangalore</div>
              <div className="text-violet-700">07 Jul - 30 Nov 2023</div>
            </div>
            <div className="w-2/5 max-sm:w-fit">
              <div className="text-xl font-medium">
                FullStack Developer Intern (MERN) 
              </div>
              <div className="text-justify mt-2">
              Worked on building web applications using the 
              MERN stack. Developed RESTful APIs and integrated them with the frontend components. Contributed to database design, data modelling, and efficient data storage using MongoDB.
              </div>
            </div>
          </div>

         {/* teachnook */}

          <div className="p-4 flex justify-between max-sm:grid max-sm:grid-flow-row max-sm:gap-4">  {/* teachnook internship*/}
            <div className="font-medium">
              <div className="text-xl">Teachnook Ed Tech, Bangalore</div>
              <div className="text-violet-700">01 Jul - 31 Sep 2022</div>
            </div>
            <div className="w-2/5 max-sm:w-fit">
              <div className="text-xl font-medium">
                Frontend Developer Intern
              </div>
              <div className="text-justify mt-2">
              Collaborated with front-end development team to 
              implement highly responsive and intuitive web 
              interfaces resulting in a 45% reduction in bounce 
              rate and a 30% increase in user engagement 
              metrics. Gained hands-on experience in optimizing website 
              performance and ensuring cross-browser 
              compatibility. Assisted in converting wireframes and designs into functional web components using HTML, CSS and 
              JavaScript. 
              </div>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
}

export default About;
