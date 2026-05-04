import React from "react";

function SkillCard({title,imgurl}) {
  
console.log(imgurl)
  return (
    <div className="flex flex-wrap justify-center gap-6">
     
        <div
          
          className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 
          flex flex-col items-center justify-center gap-2 
           rounded-xl shadow-md 
          hover:shadow-lg hover:scale-105 transition-transform duration-300"
        >
          <img
            src={imgurl}
            alt={title}
            className="w-12 h-12 object-contain"
          />
          <span className="text-sm md:text-base font-medium text-gray-200">
            {title}
          </span>
        </div>
     
    </div>
  );
}

export default SkillCard;
