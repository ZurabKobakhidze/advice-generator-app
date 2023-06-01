import { useState } from "react";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import axios from "axios";

import { Landings, AdvicePage } from "./components";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landings />} />
        <Route path="/advice" element={<AdvicePage />} />
      </Routes>
    </>
  );
}

export default App;
