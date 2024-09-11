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
      <div className="p-4">
        <div className="">
          <div className="photo">
            <img src={pfp} alt="" />
          </div>
        </div>
        <AboutmeContent />
        <DownloadCVbtn />

        <div className="relative">
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
