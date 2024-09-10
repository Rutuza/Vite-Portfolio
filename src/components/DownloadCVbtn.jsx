// import React from "react";

// function DownloadCVbtn() {
//   return (
//     <a
//       href="https://tomato-dasi-42.tiiny.site"
//       target="_blank"
//       className="relative mt-5 group"
//     >
      
//       <button className="p-6 py-3 font-bold border-2 rounded-full w-1/2 relative overflow-hidden text-white transition-all duration-500">
//         <div className="absolute top-0 flex justify-between w-full -left-full group-hover:left-0 transition-all duration-500 z-0">
//           <div className="h-24 bg-black w-full" />
//         </div>
//         <div className="z-10 mix-blend-difference text-black hover:text-violet-400 font-medium">Resume</div>
//       </button>
//     </a>
//   );
// }

// export default DownloadCVbtn;

import React from 'react';

const DownloadCV = () => {
  return (
    <div className='flex justify-center items-center mt-8'>
      <a
        href="/your-resume.pdf" // Replace with your actual path
        download
        className="relative w-1/2 rounded-full text-center inline-block px-6 py-3 font-semibold border-2 border-black overflow-hidden group"
      >
        {/* Sliding background animation */}
        <span className="absolute inset-0 w-full h-full bg-black transition-transform duration-500 transform -translate-y-full group-hover:translate-y-0"></span>
        {/* Text changes color on hover */}
        <span className="relative z-10 transition-colors duration-300 group-hover:text-violet-400">
          Download CV
        </span>
      </a>
    </div>
  );
};

export default DownloadCV;

