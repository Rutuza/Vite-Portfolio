import React from "react";
import Navbar from "../components/Navbar";
import pfp from "../assets/svg/pfp.svg";

import { ImLinkedin } from "react-icons/im";
import { ImGithub } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { ImBehance2 } from "react-icons/im";
import { HiDownload } from "react-icons/hi";


function About() {
  return (

    <div className="max-sm:p-2 p-4 grid grid-flow-row gap-16 font-pop">
      <center className="text-4xl font-bold italic m-5">About Me</center>

      <section className="max-sm:text-justify max-sm:p-3 font-pop lg:flex lg:justify-between lg:items-center">
        <div className="max-sm:py-6 max-sm:my-5">
          <img src={pfp} alt="" srcset="" />
        </div>

        <div className="relative font-pop grid grid-flow-row gap-8 justify-center items-center lg:w-1/2 lg:gap-2 lg:text-base xl:gap-8">
          <div className="sm:text-justify">
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
          <div className="">
            <ul>
              <li className="font-semibold py-1">Name: <span className="font-light">Jyotika Dalal</span></li>
              <li className="font-semibold py-1">Phone: <span className="font-light">(+91)-8319278208</span></li>
              <li className="font-semibold py-1">E-mail: <span className="font-light">dalal.jyotika05@gmail.com</span></li>
              <li className="font-semibold py-1">Address: <span className="font-light">Prabhatam Heights, Raisen road, Bhopal (M.P), 462022, India</span></li>
            </ul>
          </div>

          <button type="button" className="w-1/2 p-3 flex items-center justify-center gap-4 m-auto max-sm:text-xl font-bold text-violet-400 text-center bg-gray-900 hover:bg-transparent hover:text-violet-900  hover:font-medium hover:border-black hover:border-2 border rounded-md xl:flex xl:items-center xl:justify-center xl:gap-4">
            <div><HiDownload /></div>
            <div className="text-sm">DOWNLOAD CV</div>
          </button>
        </div>

      </section>

{/* Education section */}
      <section> 
        <div className="flex items-center max-sm:relative">
          <div className="text-4xl font-medium text-left max-sm:text-3xl">Education</div>
          <div className="mx-2 w-full h-0 border-2 border-black "></div> 
        </div>

        {/* <div className="m-0 text-violet-700 text-base max-sm:float-right max-sm:text-xs max-sm:absolute max-sm:right-2 max-sm:top-0">The journey where it all started</div> */}
        
        <div className="p-6 mt-5 grid grid-flow-row gap-4 lg:bg-gray-200 rounded-lg max-sm:grid max-sm:grid-flow-row max-sm:gap-10"> {/* container*/}

          <div className="relative justify-between grid grid-flow-row max-sm:grid max-sm:grid-flow-row max-sm:gap-2 sm:grid sm:grid-flow-row sm:gap-4 md:flex md:flex-row md:justify-between max-sm:bg-gray-200 max-sm:rounded max-sm:h-[42vh]"> {/* amity*/}
            <div className="font-semibold">
              <div className="text-base max-sm:text-base">Amity university Madhya Pradesh (AUMP), Gwalior</div>
              <div className="text-sm text-violet-700 max-sm:text-xs max-sm:absolute max-sm:right-0 max-sm:bottom-2 max-sm:px-2">2020 - Present</div>
            </div>
            <div className="w-2/5 max-sm:w-fit sm:w-fit md:w-1/2">
              <div className="text-base font-semibold max-sm:absolute max-sm:bottom-7 max-sm:right-0 max-sm:text-xs max-sm:px-2 ">
                Under Graduation | <span className="text-sm text-violet-700 text max-sm:text-xs-base">B.Tech - CSE</span>
              </div>
              <div className="text-justify text-sm mt-2 max-sm:text-base">
              I am graduating with a Bachelor's degree in Computer Science with a CGPA of 7.87 out of 10.00 as of the seventh semester. This CGPA reflects my strong work ethic, dedication to my studies, and readiness to pursue further academic and professional goals.
              </div>
            </div>
          </div>

         {/* rd 12th*/}

          <div className="relative justify-between grid grid-flow-row max-sm:grid max-sm:grid-flow-row max-sm:gap-2 sm:grid sm:grid-flow-row sm:gap-4 md:flex md:flex-row md:justify-between max-sm:bg-gray-200 max-sm:rounded max-sm:h-[42vh]">  {/* rd */}
            <div className="font-semibold">
              <div className="text-base max-sm:text-base">RD Public school, Betul (M.P)</div>
              <div className="text-sm text-violet-700 max-sm:text-xs max-sm:absolute max-sm:right-0 max-sm:bottom-2 max-sm:px-2">2018 - 2020</div>
            </div>
            <div className="w-2/5 max-sm:w-fit sm:w-fit md:w-1/2">
              <div className="text-base font-semibold max-sm:absolute max-sm:bottom-7 max-sm:right-0 max-sm:text-xs max-sm:px-2 ">
                Senior Secondary | <span className="text-violet-700 text-base max-sm:text-xs">PCM</span>
              </div>
              <div className="text-justify text-sm mt-2 max-sm:text-base">
              I achieved a senior secondary percentage of 78.3% under the CBSE curriculum. This result reflects my commitment to academic excellence and places me within the first division of my cohort. It underscores my capability to excel in rigorous academic environments and my readiness to pursue my goals in Science.
              </div>
            </div>
          </div>

          {/* ryan */}

          <div className="relative justify-between grid grid-flow-row max-sm:grid max-sm:grid-flow-row max-sm:gap-2 sm:grid sm:grid-flow-row sm:gap-4 md:flex md:flex-row md:justify-between max-sm:bg-gray-200 max-sm:rounded max-sm:h-[42vh]">  {/* ryan */}
            <div className="font font-semibold">
              <div className="text-base max-sm:text-base">Ryan International School, Bhopal (M.P)</div>
              <div className="text-violet-700 text-sm max-sm:text-xs max-sm:absolute max-sm:right-0 max-sm:bottom-2 max-sm:px-2">2017 - 2018</div>
            </div>
            <div className="w-2/5 max-sm:w-fit sm:w-fit md:w-1/2">
              <div className="text-base font-semibold max-sm:absolute max-sm:bottom-7 max-sm:right-0 max-sm:text-xs max-sm:px-2 ">
                Higher Secondary | <span className="text-violet-700 text-base max-sm:text-xs">All core subjects</span>
              </div>
              <div className="text-justify text-sm mt-2 max-sm:text-base">
              I achieved a remarkable higher secondary percentage of 72.4% under the CBSE curriculum. This demonstrates my strong dedication to academic success. It highlights my strong analytical abilities and drive for success, traits that will be helpful to me as I work toward my objectives in my respective field.

              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Experience section */}
      <section> 
        <div className="flex items-center max-sm:relative">
          <div className="text-4xl font-medium text-left max-sm:text-3xl">Experience</div>
          <div className="mx-2 w-full h-0 border-2 border-black "></div> 
        </div>

        {/* <div className="m-0 text-violet-700 text-base max-sm:float-right max-sm:text-xs max-sm:absolute max-sm:right-2 max-sm:top-0">The journey where it all started</div> */}
        
        {/* container*/}
        <div className="p-6 mt-5 grid grid-flow-row gap-2 lg:bg-gray-200 rounded-lg max-sm:grid max-sm:grid-flow-row max-sm:gap-10"> 

        {/* nullclass */}
        <div className="relative justify-between grid grid-flow-row max-sm:grid max-sm:grid-flow-row max-sm:gap-2 sm:grid sm:grid-flow-row sm:gap-4 md:flex md:flex-row md:justify-between max-sm:bg-gray-200 max-sm:rounded max-sm:h-[42vh]"> 
            <div className="font-semibold">
              <div className="text-base max-sm:text-base">FullStack Development Intern, TamilNadu</div>
              <div className="text-sm text-violet-700 max-sm:text-xs max-sm:absolute max-sm:right-0 max-sm:bottom-2 max-sm:px-2">07 Jul - 30 Nov 2023</div>
            </div>
            <div className="w-2/5 max-sm:w-fit sm:w-fit md:w-1/2">
              <div className="text-base font-semibold max-sm:absolute max-sm:bottom-7 max-sm:right-0 max-sm:text-xs max-sm:px-2 ">
                Nullclass Ed. Tech | <span className="text-violet-700 text-base max-sm:text-xs">MERN</span>
              </div>
              <div className="text-justify text-sm mt-2 max-sm:text-base">
              I achieved a senior secondary percentage of 78.3% under the CBSE curriculum. This result reflects my commitment to academic excellence and places me within the first division of my cohort. It underscores my capability to excel in rigorous academic environments and my readiness to pursue my goals in Science.
              </div>
            </div>
          </div>

         {/* teachnook*/}
          <div className="p-2 relative justify-between grid grid-flow-row max-sm:grid max-sm:grid-flow-row max-sm:gap-2 sm:grid sm:grid-flow-row sm:gap-4 md:flex md:flex-row md:justify-between max-sm:bg-gray-200 max-sm:rounded max-sm:h-[42vh]"> {/* teachnook*/}
            <div className="font-semibold">
              <div className="text-base max-sm:text-base">Frontend Development Intern, Bangalore</div>
              <div className="text-violet-700 text-sm max-sm:text-xs max-sm:absolute max-sm:right-0 max-sm:bottom-2 max-sm:px-2">07 Jul - 31 Sep 2022</div>
            </div>
            <div className="w-2/5 max-sm:w-fit sm:w-fit md:w-1/2">
              <div className="text-base font-semibold max-sm:absolute max-sm:bottom-7 max-sm:right-0 max-sm:text-xs max-sm:px-2 ">
                Teachnook Ed. Tech | <span className="text-violet-700 text-base max-sm:text-xs-base">HTML, CSS3, SASS, JavaScript</span>
              </div>
              <div className="text-justify text-sm mt-2 max-sm:text-base">
              I am graduating with a Bachelor's degree in Computer Science with a CGPA of 7.87 out of 10.00 as of the seventh semester. This CGPA reflects my strong work ethic, dedication to my studies, and readiness to pursue further academic and professional goals.
              </div>
            </div>
          </div>
          
        </div>
      </section>

    </div>
  );
}

export default About;
