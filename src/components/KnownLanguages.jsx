import React from "react";

function KnownLanguages() {
  const languages = [
    { language: "English", level: "Intermediate" },
    { language: "Hindi", level: "fluent" },
    { language: "Marathi", level: "fluent" },
  ];
  return (
    <div className="relative">
      <div className="flex justify-center items-center gap-2">
        <h4 className="text-xl font-medium">Languages</h4>
        <div className="w-full border-t-2 border-dotted border-gray-400 my-4"></div>
      </div>
      {/* dotted line */}
      <span className="text-base font-cvt text-violet-500 absolute right-1 top-4">
        I am a bilingual person
      </span>

      <div style={{ fontFamily: "poppins" }}>
        {languages.map((lang, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              margin: "8px 0",
              color: "gray",
            }}
          >
            <span>{lang.language}</span>
            <span
              style={{
                fontWeight: lang.level === "Fluent" ? "bold" : "normal",
                color: "Black",
              }}
            >
              {lang.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default KnownLanguages;
