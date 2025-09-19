import React from "react";
import SkillCard from "../Skills/SkillCard";

function Skills() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div
        className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 
        bg-gray-900/40 backdrop-blur-md rounded-2xl shadow-xl 
        p-10 flex flex-col items-center gap-10 text-gray-200"
      >
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-indigo-400 drop-shadow-md">
          Skills
        </h1>

        {/* Skill Cards */}
        <div className="w-full flex justify-center">
          <SkillCard />
        </div>
      </div>
    </div>
  );
}

export default Skills;
