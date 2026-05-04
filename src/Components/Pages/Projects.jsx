import React from "react";
import ProjectCard from "../Projects/ProjectCard";
import nexblog from "/NexBlog.png";
import jobTracker from "/JobTracker.png";
import currencyConvertor from "/Cc.png";
import GlobalNews from "/GlobalNews.png";
import { image } from "framer-motion/client";

function Projects() {
  const projectInfo = [
    {
      title: "Global News",
      description:
      "Built and deployed a responsive news aggregation platform with category-based browsing and country-specific filtering ",
      startDate : "Sep 2025",
      endData : "Nov 2025",
      imageUrl: GlobalNews,
      skills : "React, Context API, REST APIs, Tailwind CSS, Vercel ",
      liveUrl : "https://global-news-nine.vercel.app/",
      codeUrl : "https://github.com/RohitGRathod/global-news"
    },
    {
      title: "NexBlog",
      description:
        "A full-stack blogging platform designed for creators to write, publish, and share articles effortlessly. Minimal, responsive design with smooth navigation.",
      startDate : "July 2025",
      endData : "Aug 2025",
      imageUrl: nexblog,
      skills: "React, JavaScript, Tailwind CSS, Redux, Appwrite, Vercel",
      liveUrl: "https://nex-blog-five.vercel.app/",
      codeUrl: "https://github.com/RohitGRathod/NexBlog",
    },
    {
      title: "Job Tracker",
      description:
        "A web application that helps users track job applications efficiently. Add, edit, and categorize jobs with a clean dashboard to monitor progress.",
      startDate : "May 2025",
      endData : "June 2025",
      imageUrl: jobTracker,
      skills: "React, JavaScript, Tailwind CSS, Redux, Vercel",
      liveUrl: "https://job-tracker-sand-zeta.vercel.app/",
      codeUrl: "https://github.com/RohitGRathod/Job-Tracker",
    },
    
  ];

  return (
    <div className="w-full flex justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="w-full p-5 lg:p-10 bg-gray-900/40 backdrop-blur-md rounded-2xl shadow-xl flex flex-col items-center justify-center gap-10">
        
        <h1 className="text-4xl md:text-5xl font-extrabold text-center mb-10 text-indigo-400 drop-shadow-md">
          My Projects 
        </h1>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 w-full max-w-7xl ">
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
