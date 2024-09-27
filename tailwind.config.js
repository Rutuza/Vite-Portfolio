/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        warmGray:'#1D1C1C',
        cream:'#F4F0ED', 
        grayscale: '#313131',

      }, 
      fontFamily: {
        pop: "Poppins",
        cvt: "caveat",
        mate: "Mate",
      }, 

      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px"
      },

      keyframes: {
        scrollGrid: {
          '0%': { transform: "translateX(0%)" },
          '100%': { transform: "translateX(-50%) "},
        },
        blink: {
          '0%': 100% { opacity: 1},
          '50%': { opacity: 0}
        }
      },

      animation: {
        scrollGrid: 'scrollGrid 30s linear infinite',
      }

    },
  },
};
