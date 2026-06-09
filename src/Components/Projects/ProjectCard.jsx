import React from "react";

function ProjectCard({ title, description, skills, imageUrl, liveUrl, codeUrl, startDate, endDate }) {
  
  return (
    <div className="min-w-80 flex flex-col bg-gray-900/60 backdrop-blur-lg 
      border border-gray-700 rounded-2xl shadow-lg overflow-hidden 
      hover:scale-105 transform transition duration-300">
      
      {/* Image */}
      <div className="m-2 flex justify-center items-center">

      <img src={imageUrl} alt={`${title} preview`} className="w-full h-48 object-cover rounded-xl mb-3 transition-transform duration-300 hover:scale-105" />
      </div>

      <div className="flex justify-between items-center text-xs text-gray-500 mb-2 px-4">
        <span>{startDate}</span>
        <span>{endDate}</span>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 text-gray-300">
        <h2 className="font-bold text-xl mb-2 line-clamp-2 text-indigo-400">{title}</h2>
        <p className="text-sm text-gray-400">{skills}</p>
        <p className="text-gray-600 text-base line-clamp-3 overflow-hidden min-h-[4.5rem]">{description}</p>
        

        {/* Buttons */}
        <div className="flex gap-3 mt-3">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 rounded-lg 
              bg-gradient-to-r from-indigo-600 to-purple-600 
              hover:from-indigo-500 hover:to-purple-500 
              transition font-semibold"
          >
            Live Demo
          </a>
          <a
            href={codeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center px-4 py-2 rounded-lg 
              bg-gray-800 hover:bg-gray-700 transition font-semibold"
          >
            Code
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
