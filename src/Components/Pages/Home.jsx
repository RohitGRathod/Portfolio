import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";
import HeroImg from "/HeroImg3.png";

function Home() {
  const navigate = useNavigate();
  

  const handleNavigation = (slug) => {
    navigate(slug);
  };

  return (
    <div className="flex flex-col lg:flex-row sm:flex-col md:flex-col gap-1 justify-center items-center min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="w-1/3 flex justify-center items-center lg:hidden" >
        <img src={HeroImg} alt="" className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:h-[200px] md:w-[200px] rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 " />
      </div>
      <div className="w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 
         backdrop-blur-md rounded-2xl shadow-xl flex flex-col items-center gap-8 text-gray-200">
        
        {/* Heading + Intro */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-indigo-400 drop-shadow-md">
            Hi, I&apos;m Rohit! 
          </h1>
          <p className="text-lg md:text-xl leading-relaxed tracking-wide max-w-2xl mx-auto">
            A passionate <strong>Software Engineer</strong> & <strong>Frontend Developer</strong>, 
            turning creative ideas into <strong>clean, scalable code</strong>.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <a
            href="https://www.linkedin.com/in/rohit-grathod/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#0A66C2] rounded-full transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faLinkedin} size="lg rounded-full px-1" />
          </a>
          <a
            href="https://github.com/RohitGRathod"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#24292F] rounded-full transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faGithub} size="lg px-1" />
          </a>
          <a
            href="https://www.instagram.com/rohit.rathod_45/profilecard/?igsh=MWtsdTBlbnltZWEyNA%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gradient-to-tr from-[#F58529] via-[#DD2A7B] to-[#8134AF] rounded-full hover:bg-pink-500 transition-transform transform hover:scale-110"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg px-1" />
          </a>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 mt-6">
          <button
            onClick={() => handleNavigation("/projects")}
            className="px-6 py-3 rounded-lg font-semibold 
            bg-gradient-to-r from-indigo-600 to-purple-600 
            hover:from-indigo-500 hover:to-purple-500 
            transition-transform transform hover:scale-105 cursor-pointer"
          >
            View My Work
          </button>
          <button
            onClick={() => handleNavigation("/contact-me")}
            className="px-6 py-3 rounded-lg font-semibold 
            bg-gray-700 hover:bg-gray-600 
            transition-transform transform hover:scale-105 cursor-pointer"
          >
            Let&apos;s Connect
          </button>
        </div>
      </div>

      <div className="w-1/3 lg:flex items-center hidden" >
        <img src={HeroImg} alt="" className="w-[350px] h-[350px] rounded-full bg-gradient-to-br from-gray-900 via-black to-gray-800 " />
      </div>
    </div>
  );
}

export default Home;  
