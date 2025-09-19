import React from "react";

function ProjectCard({ title, description, skills, imageUrl, liveUrl, codeUrl }) {
  return (
    <div className="flex flex-col bg-gray-900/60 backdrop-blur-lg 
      border border-gray-700 rounded-2xl shadow-lg overflow-hidden 
      hover:scale-105 transform transition duration-300">
      
      {/* Image */}
      <img src={imageUrl} alt={`${title} preview`} className="h-40 w-full object-cover" />

      {/* Content */}
      <div className="p-5 flex flex-col gap-3 text-gray-300">
        <h2 className="text-2xl font-bold text-indigo-400">{title}</h2>
        <p className="text-sm text-gray-400">{skills}</p>
        <p className="text-base leading-relaxed">{description}</p>

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
