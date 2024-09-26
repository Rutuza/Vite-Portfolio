import React from "react";

import AboutmeContent from "../components/AboutmeContent";
import pfp from "../assets/svg/pfp.svg";
import DownloadCVbtn from "../components/DownloadCVbtn";

import Education from "../components/moreDetails";
import Exprnce from "../components/Exprnce";
import Certifications from "../components/Certifications";
import KnownLanguages from "../components/KnownLanguages";

function About() {
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
      <div className="mt-16">
      <div className="text-4xl font-bold text-left mb-8 text-center">About Me</div>
        <div className="md:flex md:items-center md:justify-between my-16">
          <div className="photo">
            <img src={pfp} alt="" />
          </div>
        <AboutmeContent />
        </div>
        <DownloadCVbtn />

        <div className="relative grid sm:grid-cols-2 gap-10">
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
    </>
  );
}

export default About;
