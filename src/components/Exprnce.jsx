import React from "react";

function Exprnce() {
  const educationalData = [
    {
      duration: "July - Sep 2022",
      company: "Teachnook Ed Tech",
      location: "Bangalore",
    },
    {
      duration: "July - Nov 2024",
      company: "Nullclass Ed Tech",
      location: "Bangalore",
    },
  ];

  return (
    <>
      <div className="my-8 relative">
        <div className="flex justify-center items-center gap-2">
          <h4 className="text-xl font-medium">Internships</h4>
          <div className="w-full border-t-2 border-dotted border-gray-400 my-4"></div>
        </div>
        {/* dotted line */}
        <span className="text-lg font-cvt text-violet-500 absolute right-1 top-4">
          what I learnt in these four years?
        </span>

        <div className="mt-6 font-pop">
          {educationalData.map((data, index) => (
            <div key={index} className="flex justify-between mb-2">
              <h6 className="text-gray-700 text-sm">{data.duration}</h6>
              <div className="flex flex-col">
                <p className="font-semibold text-sm">{data.company}</p>
                <p className="text-gray-500 text-right text-xs">
                  {data.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Exprnce;
