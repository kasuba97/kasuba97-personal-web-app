import React from "react";
import Tik2ZMW from "../components/projects/Tik-2Zmw";
import Project from "../components/projects/Project";

function projects() {
  return (
    <div className="flex flex-col items-center w-full max-w-7xl mx-auto px-4 py-12 gap-10">
      <p>Projects</p>
      <Tik2ZMW />
      {/* // TODO: Add more projects here */}
      {/* <Project /> */}
    </div>
  );
}

export default projects;
