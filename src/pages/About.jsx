import React from "react";
import pfp from "../assets/svg/pfp.svg";

function About() {
  return (
    <div className="px-3">
      <center className="text-4xl font-bold italic m-5">About Me</center>

      <section className="flex justify-between items-center mt-20">
        <div className="pfp">
          <img src={pfp} alt="" srcset="" />
        </div>

        <div className="flex gap-5 text-lg text-justify w-3/6">
          <div className="text-violet-500">"</div>
          <div>
            <div className="mt-10">
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
        <div className="flex justify-center items-center">
          <div className="text-4xl font-medium">Education</div>
          <div className="mx-2 w-full h-0 border-2 border-black"></div>
        </div>

        <div className="m-0 text-violet-700 text-base md:text-right">The journey where it all started</div>
        
        <div className="mt-5 bg-gray-200 rounded-lg"> {/* container*/}

          <div className="p-4 flex justify-between"> {/* amity*/}
            <div className="font-medium">
              <div className="text-xl">Amity university, gwalior</div>
              <div className="year">2020 - Present</div>
            </div>
            <div className="w-2/5">
              <div className="text-xl font-medium">
                Under Graduation | <span className="text-violet-700 text-base">B.Tech - CSE</span>
              </div>
              <div className="cgpa">
              pursuing B. Tech. CSE at Amity University in Madhya Pradesh with a CGPA of 7.87 and SGPA of 8.5 as of the seventh semester.
              </div>
            </div>
          </div>

         {/* rd */}

          <div className="p-4 flex justify-between">  {/* rd */}
            <div className="font-medium">
              <div className="text-xl">RD Public school, Betul (M.P)</div>
              <div className="year">2018 - 2020</div>
            </div>
            <div className="w-2/5">
              <div className="text-xl font-medium">
                Senior Secondary | <span className="text-violet-700 text-base">PCM</span>
              </div>
              <div className="cgpa">
              I received a divisional grade of 78.3% for my +2 in the 2019–2020 school year at RD Public School, Betul, Madhya Pradesh.
              </div>
            </div>
          </div>

          {/* ryan */}

          <div className="p-4 flex justify-between">  {/* ryan */}
            <div className="font-medium">
              <div className="text-xl">Ryan International School, Bhopal (M.P)</div>
              <div className="year">2017 - 2018</div>
            </div>
            <div className="w-2/5">
              <div className="text-xl font-medium">
                Higher Secondary | <span className="text-violet-700 text-base">PCM</span>
              </div>
              <div className="cgpa">
              I received a divisional grade of 72.4% for my matriculation in the 2017–2018 school year at Ryan International School, Bhopal, Madhya Pradesh.

              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Experience section */}


    </div>
  );
}

export default About;
