/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        warmGray:'#1D1C1C',
        cream:'#F4F0ED',  
      }, 
      fontFamily: {
        pop: "Poppins",
        ink: "Ink-free",
      }, 

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px"
      },

    },
  },
};
