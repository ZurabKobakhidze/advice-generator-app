import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";



function Landing() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="bg-bodyColor w-screen h-screen flex justify-center items-center">
        <div
          id="container_1"
          className="bg-containerColor rounded-container w-container h-container flex flex-col items-center justify-start  pt-20"
        >
          <button 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className=" font-manrope  font-style: normal; text-[20px] font-extrabold text-spanColor bg-red-600 pt-3.5 w-48 pb-3.5 rounded-lg"
          >
            <Link to="/advice">Dont click</Link>
          </button>
          {isHovered && (
            <span className="text-spanColor mt-6 font-manrope  font-style: normal; text-[16px] font-extrabold">REALLY!</span>
          )}
        </div>
      </div>
    </>
  );
}

export default Landing;
