import React from 'react';

const DownloadCV = () => {
  return (
    <div className='flex justify-center items-center'>
      <a
        className="relative my-4 rounded-full text-center inline-block px-6 py-3 w-1/2 font-semibold border-2 border-violet-800 hover:border-black overflow-hidden group max-sm:w-2/3 sm:w-1/2"

        href="/JyotikaDalalResume.pdf" 
        download="JyotikaDalalResume"
        target="_blank"
        rel="noopener noreferrer"
      >
        
        <span className="absolute inset-0 w-full h-full bg-black transition-transform duration-700 transform -translate-y-full group-hover:translate-y-0"></span>
        
        <span className="relative z-1 transition-colors duration-300 group-hover:text-violet-400">
          Download CV
        </span>
      </a>
    </div>
  );
};

export default DownloadCV;

