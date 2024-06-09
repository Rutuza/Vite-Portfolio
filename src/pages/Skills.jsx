import React from "react";
import sparkle from "../assets/svg/sparkle.svg";

import paint from "../assets/svg/paintwithcircle.svg";
import atom from "../assets/svg/moleculewithcircle.svg";
import dna from "../assets/svg/dnawithcircle.svg";
import code_icon from "../assets/svg/codewithcircle.svg";

import mongodb from "../assets/svg/mongoDB logo.svg";
import arrow from "../assets/svg/right_arrow.svg";

function Skills() {
  return (
    <div id="skills">
      <center className="text-4xl font-bold italic m-4">Skills</center>
      <div className="p-10">
        <section className="relative font-pop max-sm:w-full lg:flex lg:items-center">
          <div className="container xl:w-9/12">
            <h1 className="font-bold max-sm:text-xl sm:text-2xl lg:text-2xl xl:text-3xl">
              My creative skills and knowledge in technology
            </h1>
            <p className="text-justify break-words mt-4 lg:w-9/12">
              As a Frontend developer and UI/UX Designer, I bring forth a
              dynamic skill set honed through [years of experience/relevant
              training]. Proficient in HTML5, CSS3, SASS, ReactJS, Database, I
              have consistently demonstrated an ability to [highlight key
              accomplishments or how these skills were applied]. My expertise
              spans [specific areas or industries], allowing me to [mention how
              your skills contribute to solving problems or creating value].
              With a focus on [specific strengths or unique qualities], I strive
              to [mention your goals or how you aim to apply these skills in
              future endeavors]. Below I have mentioned some of my major skills.
            </p>
          </div>

          <div>
            <img
              src={sparkle}
              alt=""
              className="max-sm:absolute max-sm:right-0 max-sm:bottom-0"
            />
          </div>
        </section>

        {/* techstack */}
        <section className="techstacks mt-36">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="skill-box w-full">
              <div className="skill-title flex flex-col items-center p-0.5 mb-0.5 relative">
                <img src={paint} alt="" />
                <h3 className="font-bold text-2xl font-pop">Design</h3>
              </div>
              <p className="text-center word-break">Figma, Adoble illustrator</p>
            </div>

            <div className="skill-box w-full">
              <div className="skill-title flex flex-col items-center p-0.5 mb-0.5 relative">
                <img src={atom} alt="" />
                <h3 className="font-bold text-2xl font-pop">Frontend</h3>
              </div>
              <p className="text-center">HTML, CSS, Sass, TailwindCSS, React JS</p>
            </div>

            <div className="skill-box w-full">
              <div className="skill-title flex flex-col items-center p-0.5 mb-0.5 relative">
                <img src={dna} alt="" />
                <h3 className="font-bold text-2xl font-pop">Backend</h3>
              </div>
              <p className="text-center">Node Js, SQL, MongoDB</p>
            </div>

            <div className="skill-box w-full">
              <div className="skill-title flex flex-col items-center p-0.5 mb-0.5 relative">
                <img src={code_icon} alt="" />
                <h3 className="font-bold text-2xl font-pop">Programming</h3>
              </div>
              <p className="text-center">C++, Java, Machine Learning</p>
            </div>
          </div>
        </section>

        {/* certifications */}

        <section className="relative font-pop max-sm:w-full mt-24">
          <div className="lg:flex lg:items-center">
            <div className="container xl:w-9/12">
              <h2 className="font-bold max-sm:text-xl sm:text-2xl lg:text-2xl xl:text-3xl relative">
                Professional achievements
              </h2>
              <p className="text-justify break-words mt-4 lg:w-9/12">
                I have pursued various certifications throughout my career to
                continuously enhance my skills and stay updated with the latest
                industry standards. Among my certifications, I hold a **MongoDB
                for SQL Experts** certification from MongoDb University, earned
                in September 2023, which signifies my proficiency in leading and
                managing projects effectively. Additionally, I completed a **CSS
                Skills HackerRank Test** on HackerRank in 2022, providing me
                with comprehensive knowledge in my CSS progressive skills which
                I am learning. These certifications reflect my commitment to
                professional development and my ability to tackle diverse
                challenges in the fields of project management, data science,
                and cloud computing.
              </p>
            </div>

            <div>
              <img
                src={sparkle}
                alt=""
                className="max-sm:absolute max-sm:right-0 max-sm:bottom-0"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-16">
          
            <div className="flex flex-col w-full m-5">
              <a href="http://">
                <img
                  src={mongodb}
                  alt=""
                  className="bg-black p-5 rounded-lg w-full"
                />

              </a>
              <div className="flex p-5 w-full justify-between">
                <p>MongoDB for SQL Experts</p>
                <img src={arrow} alt="" className="w-5" />
              </div>
            </div>
            <div className="flex flex-col w-full m-5">
              <img
                src={mongodb}
                alt=""
                className="bg-black p-5 rounded-lg w-full"
              />
              <div className="flex p-5 w-full justify-between">
                <p>MongoDB for SQL Experts</p>
                <img src={arrow} alt="" className="w-5" />
              </div>
            </div>



           
          </div>
        </section>
      </div>
    </div>
  );
}

export default Skills;
