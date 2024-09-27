import React from "react";

const skills = [
  { id: '01', name: "HTML", description: "website structure definition" },
  { id: '02', name: "CSS", description: "Styling & layout of website" },
  { id: '03', name: "React JS", description: "Dynamic UI components" },
  { id: '04', name: "Node JS", description: "Backend JavaScript runtime" },
  { id: '05', name: "Tailwind CSS", description: "Utility based CSS framework" },
  { id: '06', name: "SASS", description: "Advanced CSS preprocessor" },
  { id: '07', name: "UI/UX Design", description: "User Experience Design" },
  { id: '08', name: "JavaScript", description: "Client-side interactivity scripting" },
  { id: '09', name: "Java", description: "Cross-platform programming", dotvisible:false },
  { id: '10', name: "SQL Server", description: "Relational database querying", dotvisible:false},
  { id: '11', name: "Oracle PL/SQL", description: "Oracle procedural SQL", dotvisible:false },
  { id: '12', name: "MongoDB", description: "NoSQL database solution", dotvisible:false },
  // { id: '13', name: "AIML", description: "Data-driven intelligent systems", dotvisible:false },
  // { id: '14', name: "Bootstrap 3.0", description: "Responsive frontend framework", dotvisible:false },
  
];

const Skills = () => {
  return (
    <div className="flex flex-col justify-center min-h-screen my-14">
      <div className="text-4xl font-bold text-center font-mate">My Skills</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
        {skills.map((skills) => (
          <div
            key={skills.id}
            className="flex flex-col items-center p-6 text-gray-400"
          >
            <span className="text-7xl font-bold text-black">{skills.id}</span>
            <h2 className="text-xl font-semibold text-[#ABA7A7] mt-2">
              {skills.name}
            </h2>
            <p className=" text-[#836EB0] italic text-center text-sm mt-1 font-medium">{skills.description}</p>
            {/* {skills.dotvisible !== false && <div className="w-3 h-3 border border-black rounded-full bg-black shadow-lg absolute mt-44"></div>} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
