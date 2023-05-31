import React from "react";
import { Route, Routes, Link } from "react-router-dom";


function Landing() {
  return (
    <>
      <div className="bg-bodyColor w-screen h-screen flex justify-center items-center">
        <div
          id="container"
          className="bg-containerColor rounded-container w-container h-container"
        >
          <button className="adviceButton">
            <Link to="/advice">Need an Advice?</Link>
          </button>
        </div>
      </div>
    </>
  );
}

export default Landing;
