import React from "react";
import ProjectCard from "../Projects/ProjectCard";
import nexblog from "/NexBlog.png";
import jobTracker from "/JobTracker.png";
import currencyConvertor from "/Cc.png";

function Projects() {
  const projectInfo = [
    {
      title: "NexBlog",
      description:
        "A full-stack blogging platform designed for creators to write, publish, and share articles effortlessly. Minimal, responsive design with smooth navigation.",
      imageUrl: nexblog,
      skills: "React, JavaScript, Tailwind CSS, Redux, Appwrite, Vercel",
      liveUrl: "https://nex-blog-five.vercel.app/",
      codeUrl: "https://github.com/RohitGRathod/NexBlog",
    },
    {
      title: "Job Tracker",
      description:
        "A web application that helps users track job applications efficiently. Add, edit, and categorize jobs with a clean dashboard to monitor progress.",
      imageUrl: jobTracker,
      skills: "React, JavaScript, Tailwind CSS, Redux, Vercel",
      liveUrl: "https://job-tracker-sand-zeta.vercel.app/",
      codeUrl: "https://github.com/RohitGRathod/Job-Tracker",
    },
    {
      title: "Currency Convertor",
      description:
        "A lightweight real-time currency conversion app with accurate exchange rates. Clean, responsive UI for travelers and finance enthusiasts.",
      imageUrl: currencyConvertor,
      skills: "React, JavaScript, Tailwind CSS, API, Vercel",
      liveUrl: "https://currency-convertor-jet-five.vercel.app/",
      codeUrl: "https://github.com/RohitGRathod/Currency-Convertor",
    },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 
        bg-gray-900/40 backdrop-blur-md rounded-2xl shadow-xl p-10">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-indigo-400 drop-shadow-md">
          My Projects 
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectInfo.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              liveUrl={project.liveUrl}
              codeUrl={project.codeUrl}
              skills={project.skills}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
