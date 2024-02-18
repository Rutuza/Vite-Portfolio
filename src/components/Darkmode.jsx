import React from 'react';
import { useState } from 'react';

function Darkmode() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }
  return ( 
    <>
    <div className={`${darkMode && "dark"}`}>
      <button className='absolute w-10 h-10 top-10 right-10 bg-neutral-900 dark:bg-white outline rounded-full text-white dark:text-black font-semibold' 
      onClick={toggleDarkMode}>
        
        {darkMode ? "LHT" : "DRK"}
      </button>
    </div>
    
    </>
  );
}

export default Darkmode;
