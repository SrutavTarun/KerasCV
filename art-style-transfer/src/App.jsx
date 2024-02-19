import React, { useEffect } from "react";
// import runPythonScripts from "./components/execute";

import Navbar from "./components/Navbar";
import Input from "./components/ImageProcessing";
import Output from "./components/Output";
import VideoProcessing from "./components/VideoProcessing";

import "./App.css";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <VideoProcessing />
      {/* <Output /> */}
    </>
  );
};

export default App;
