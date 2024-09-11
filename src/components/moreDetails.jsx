import React from "react";

function moreDetails({ title, subheading, entry }) {
  return (
    <>
      <div className="my-8 relative">
        <div className="flex justify-center items-center gap-2">
          <h4 className="text-xl font-medium">{title}</h4>
          <div className="w-full border-t-2 border-dotted border-gray-400 my-4"></div>
        </div>
        {/* dotted line */}
        <span className="text-lg font-cvt text-violet-500 absolute right-1 top-4">
          {subheading}
        </span>

        <div className="mt-6 font-pop">
          {entry.map((data, index) => (
            <div key={index} className="flex justify-between mb-2">
              <h6 className="text-gray-700 text-sm">
                {data.date ? data.date : data.language}
              </h6>
              <div className="flex flex-col">
                <p className="font-semibold text-sm">
                  {data.institution ? data.institution : data.level}
                </p>
                {data.location && (
                  <p className="text-gray-500 text-right text-xs">
                    {data.location}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default moreDetails;
