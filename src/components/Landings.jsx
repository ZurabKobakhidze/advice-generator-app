import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import illustrationFirst from "../assets/babu1.svg";
import illustrationSecond from "../assets/babu2.svg";

function Landings() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="bg-bodyColor w-screen h-screen flex justify-center items-center flex flex-col  ">
        <img
          className="w-96 hidden desktop:block"
          src={isHovered ? illustrationSecond : illustrationFirst}
          alt=""
        />

        <div
          id="container_1"
          className="bg-containerColor rounded-container w-container h-container flex flex-col items-center justify-start  pt-20 desktop: w-[540px]"
        >
          <button
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className=" font-manrope  font-style: normal; text-[20px] font-extrabold text-bodyColor bg-customblue pt-3.5 pl-4 pr-4 pb-3.5 rounded-lg  border-adviceColor border-1"
          >
            <Link to="/advice">NOT a GOOD ADVICE</Link>
          </button>
          {isHovered && (
            <span className="text-spanColor mt-6 font-manrope  font-style: normal; text-[16px] font-extrabold">
              REALLY!
            </span>
          )}
        </div>
      </div>
    </>
  );
}

export default Landings;
