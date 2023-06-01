/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      manrope: ["Manrope", "sans-serif"],
    },
    extend: {
      colors: {
        bodyColor: "#202733",
        containerColor: "#313A48",
        adviceColor: "#53FFAA",
        spanColor: "#CEE3E9",
      },
      borderRadius: {
        container: "10px",
      },
      width: {
        container: "343px",
      },
      height: {
        container: "315px",
      },
      boxShadow: {
        'green': '0px 0px 40px #53FFAA',
      }
    },
  },
  
  plugins: [],
};
