import React from "react";

import AboutmeContent from "../components/AboutmeContent";
import pfp from "../assets/svg/pfp.svg";
import DownloadCVbtn from "../components/DownloadCVbtn";

import Education from "../components/moreDetails";
import Exprnce from "../components/Exprnce";
import Certifications from "../components/Certifications";
import KnownLanguages from "../components/KnownLanguages";

const About = () => {
  const data = [
    {
      title: "Education",
      subheading: "the journey where it all started",
      entry: [
        {
          date: "2020 - 2024",
          institution: "Amity University Madhya Pradesh",
          location: "Gwalior",
        },
        {
          date: "2018 - 2020",
          institution: "Ram Dayal Public School",
          location: "Betul",
        },
        {
          date: "2012 - 2018",
          institution: "Ryan International School",
          location: "Bhopal",
        },
      ],
    },


    {
      title: "Certificates",
      subheading: "proof of my skills",
      entry: [
        {
          date: "2018 - 2020",
          institution: "HackerRank CSS SKills Test",
          location: "HackerRank",
        },
        {
          date: "2020 - 2024",
          institution: "Mongo DB for SQL Experts",
          location: "MongoDB University",
        },
        {
          date: "2012 - 2018",
          institution: "JavaScript - For Begginers",
          location: "Udemy",
        },
      ],
    },

    {
      title: "Experience",
      subheading: "what I learnt in these four years?",
      entry: [
        {
          date: "July - Sep 2022",
          institution: "Teachnook Ed Tech",
          location: "Bangalore",
        },
        {
          date: "2018 - 2020",
          institution: "Nullclass Ed Tech",
          location: "Bangalore",
        },
      ],
    },
    {
      title: "Languages",
      subheading: "I am a bilingual person",
      entry: [
        { language: "English", level: "Intermediate" },
        { language: "Hindi", level: "fluent" },
        { language: "Marathi", level: "fluent" },
      ],
    },
  ];

  return (
    <>
      <section className="pt-7" id="about">
      <div className="text-4xl font-semibold  font-mate text-center">About Me</div>
        <div className="wrapper px-8">
          <div className="heroSection my-10 relative flex flex-wrap justify-between">
              <div className="grid grid-flow-row">
                <img src={pfp} alt=""/>
                <div className="flex flex-row gap-4 items-start mt-10">
                  <div className="verticalLine border-black w-1 h-28 border-2"></div>
                  <div className="ph-em-ad">
                    <ul>
                      <li className="flex flex-row gap-3 my-1"><span className="font-bold">ph.</span>8319278208</li>
                      <li className="flex flex-row gap-3 my-1"><span className="font-bold">em.</span>dalal.jyotika05@gmail.com</li>
                      <li className="flex flex-row gap-3 my-1"><span className="font-bold">ad.</span>nagpur, M.H, India</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="grid grid-flow-row gap-8 relative max-sm:w-fit sm:w-fit lg:w-1/2">
                <AboutmeContent />
                <DownloadCVbtn />
              </div>
          </div>
          <div className="relative grid sm:grid-cols-2 gap-20">
              {data.map((item, index) => (
                <Education
                  key={index}
                  title={item.title}
                  subheading={item.subheading}
                  entry={item.entry}
                />
              ))}
          </div>
        </div>
      </section>
      
    </>
  );
}

export default About;
