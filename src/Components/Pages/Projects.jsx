import React from 'react'
import ProjectCard from '../Projects/ProjectCard'
import nexblog from '/NexBlog.png'
import jobTracker from '/JobTracker.png'
import currencyConvertor from '/Cc.png'

function Projects() {
  const projectInfo = [
    {
      title : "NexBlog",
      description : "A full-stack blogging platform designed for creators to write, publish, and share articles effortlessly. NexBlog focuses on a minimal, responsive design with smooth navigation, offering readers a distraction-free experience and writers a powerful editor.",
      imageUrl : nexblog,
      skills : "React,JavaScript,Tailwind CSS,Redux,Appwrite,Vercel",
      liveUrl : "https://nex-blog-five.vercel.app/",
      codeUrl : "https://github.com/RohitGRathod/NexBlog"

    },
    {
      title : "Job Tracker",
      description : "A web application that helps users track job applications efficiently from application to offer. It allows users to add, edit, and categorize job applications, monitor current status (Applied, Interviewing, Rejected, Hired), and maintain a centralized dashboard for easy progress tracking.",
      imageUrl : jobTracker,
      skills : "React,JavaScript,Tailwind CSS,Redux,Vercel",
      liveUrl : "https://job-tracker-sand-zeta.vercel.app/",
      codeUrl : "https://github.com/RohitGRathod/Job-Tracker"

    },
    {
      title : "Currency Convertor",
      description : "A lightweight web application that allows users to convert currencies in real-time with accurate exchange rates. Designed with a clean, responsive UI, it simplifies currency conversion for travelers, businesses, and finance enthusiasts.",
      imageUrl : currencyConvertor,
      skills : "React,JavaScript,Tailwind CSS,API,Vercel",
      liveUrl : "https://currency-convertor-jet-five.vercel.app/",
      codeUrl : "https://github.com/RohitGRathod/Currency-Convertor"

    }
  ]
  return (
    <div className='sm:w-8/12 md:w-10/12 lg:w-11/12 min-h-screen rounded-2xl bg-black/30 m-10 p-8'>
    <div className='w-full flex flex-wrap justify-evenly gap-4 p-4 md:gap-6 lg:gap-8'>
      {projectInfo.map((project) => (
        
        <div key={project.title} className="h-1/3 project-card p-4 sm:w-1/2 md:w-1/3 lg:w-1/4">
          <ProjectCard 
            title={project.title} 
            description={project.description} 
            imageUrl={project.imageUrl} 
            liveUrl={project.liveUrl} 
            codeUrl={project.codeUrl}
            skills={project.skills}
            />
        </div>
       
      ))}
    </div>
    </div>
    
  )
}

export default Projects
