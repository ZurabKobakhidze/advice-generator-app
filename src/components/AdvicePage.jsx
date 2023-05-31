import React, { useState, useEffect } from "react";
import axios from "axios";
import pattern from '../assets/pattern-divider-mobile.svg';

const AdvicePage = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdvice(response.data.slip.advice);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="bg-bodyColor w-screen h-screen flex justify-center items-center">
        <div
          id="container"
          className="bg-containerColor rounded-container w-container h-container pt-10 pl-6 pr-6 flex flex-col items-center"
        >
          <h2 className=" font-manrope  font-style: normal; text-[11px] font-extrabold text-adviceColor tracking-[3.45714px]">
            ADVICE #117
          </h2>
          <h1 className="font-manrope  font-style: normal; text-[24px] font-extrabold text-spanColor tracking-[-0.257143px] leading-[33px] mt-6">{advice}</h1>
          <img className="mt-6" src={pattern} alt="Pattern Divider" />
        </div>
      </div>
    </>
  );
};

export default AdvicePage;
