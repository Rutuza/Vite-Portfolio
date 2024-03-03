import React from "react";
import Navbar from "../components/Navbar";
import pfp from "../assets/svg/pfp.svg";

function About() {
  return (

    <div className="px-3">
      <center className="text-4xl font-bold italic m-5">About Me</center>

      <section className="flex max-w-54 justify-between">
        <div className="pfp">
          <img src={pfp} alt="" srcset="" />
        </div>

        <div className="flex gap-5 text-lg text-justify">
          <div className="text-violet-500">"</div>
          <div>
            <div className="mt-10 w-1/2">
              I am a Final year, Computer Science student at Amity University
              Madhya Pradesh, Gwalior. I have strong passion for Web
              Development, UI/UX Designing and Database. I get to combine my
              love for technology with my passion for art and design. I enjoy
              using my creativity and problem-solving skills to create digital
              experiences that do not only look great but also work seamlessly
              for the user. I believe that continuous learning is the key to
              success and I’m always on the lookout for fresh challenges to keep
              me motivated and engaged.
              <div className="mt-10">
                <div className="name">
                  <b>Name: </b>Jyotika Dalal
                </div>
                <div className="py-2">
                  <b>Phone: </b>(+91) 8319278208
                </div>
                <div className="py-0">
                  <b>E-mail: </b>dalal.jyotika@05gmail.com
                </div>
                <div className="py-2">
                  <b>Address: </b>Prabhatam heights, Raisen road, Bhopal (M.P),
                  India
                </div>

                <div className="flex gap-2">
                  <b>Social: </b>
                  <span>
                    <ul className="flex gap-4">
                      <li>
                        <a href="https://www.linkedin.com/in/jyotika-dalal-2bb242240/">
                          Linkedin
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/Rutuza">Github</a>
                      </li>
                      <li>
                        <a href="#">Instagram</a>
                      </li>
                      <li>
                        <a href="#">Dribble</a>
                      </li>
                      <li>
                        <a href="#">Behance</a>
                      </li>
                    </ul>
                  </span>
                </div>

                <button
                  type="button"
                  className="mt-10 w-2/5 bg-black text-violet-400 hover:bg-transparent hover:text-violet-900  hover:font-medium hover:border-black hover:border-2 border rounded-md p-2 "
                >
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Education section */}

      <section className="mt-20"> 
        <div className="flex items-center">
          <div className="text-4xl font-medium text-left">Education</div>
          <div className="mx-2 w-full h-0 border-2 border-black"></div> 
        </div>

        <div className="m-0 text-violet-700 text-base md:text-right">The journey where it all started</div>
        
        <div className="mt-5 bg-gray-200 rounded-lg"> {/* container*/}

          <div className="p-4 flex justify-between"> {/* amity*/}
            <div className="font-medium">
              <div className="text-xl">Amity university, gwalior</div>
              <div className="text-violet-700">2020 - Present</div>
            </div>
            <div className="w-2/5">
              <div className="text-xl font-medium">
                Under Graduation | <span className="text-violet-700 text-base">B.Tech - CSE</span>
              </div>
              <div className="text-justify mt-2">
              I am graduating with a Bachelor's degree in Computer Science with a CGPA of 7.87 out of 10.00 as of the seventh semester. This CGPA reflects my strong work ethic, dedication to my studies, and readiness to pursue further academic and professional goals.
              </div>
            </div>
          </div>

         {/* rd 12th*/}

          <div className="p-4 flex justify-between">  {/* rd */}
            <div className="font-medium">
              <div className="text-xl">RD Public school, Betul (M.P)</div>
              <div className="text-violet-700">2018 - 2020</div>
            </div>
            <div className="w-2/5">
              <div className="text-xl font-medium">
                Senior Secondary | <span className="text-violet-700 text-base">PCM</span>
              </div>
              <div className="text-justify mt-2">
              I achieved a senior secondary percentage of 78.3% under the CBSE curriculum. This result reflects my commitment to academic excellence and places me within the first division of my cohort. It underscores my capability to excel in rigorous academic environments and my readiness to pursue my goals in Science.
              </div>
            </div>
          </div>

          {/* ryan */}

          <div className="p-4 flex justify-between">  {/* ryan */}
            <div className="font-medium">
              <div className="text-xl">Ryan International School, Bhopal (M.P)</div>
              <div className="text-violet-700">2017 - 2018</div>
            </div>
            <div className="w-2/5">
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

      <section className="mt-10 py-12">
      <div className="flex items-center">
          <div className="text-4xl font-medium text-left">Experience</div>
          <div className="mx-2 w-full h-0 border-2 border-black"></div> 
        </div>

        <div className="mt-5 bg-gray-200 rounded-lg "> {/* container*/}

          <div className="p-4 flex justify-between"> {/* MERN internship*/}
            <div className="font-medium">
              <div className="text-xl">Nullclass Ed Tech, Bangalore</div>
              <div className="text-violet-700">07 Jul - 30 Nov 2023</div>
            </div>
            <div className="w-2/5">
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

          <div className="p-4 flex justify-between">  {/* teachnook internship*/}
            <div className="font-medium">
              <div className="text-xl">Teachnook Ed Tech, Bangalore</div>
              <div className="text-violet-700">01 Jul - 31 Sep 2022</div>
            </div>
            <div className="w-2/5">
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
