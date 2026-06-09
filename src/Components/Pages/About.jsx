import React from "react";
import SkillCard from "../Skills/SkillCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import './slider.css'
import HeroImg from "/HeroImg2.png";

function About() {
  const navigate = useNavigate();
  const skillinfo = [
    { title: "JavaScript", imgurl: "https://quiksite.com/wp-content/uploads/2016/09/Javascript-Square.png" },
    { title: "HTML", imgurl: "https://clipground.com/images/html-logo-png-3.png" },
    { title: "CSS", imgurl: "https://logospng.org/download/css-3/logo-css-3-1024.png" },
    { title: "Tailwind", imgurl: "https://img.icons8.com/fluency/452/tailwind_css.png" },
    { title: "Bootstrap", imgurl: "https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png" },
    { title: "Vite", imgurl: "https://raw.githubusercontent.com/github/explore/a1bae1b15fa9fc4d5de64f3360b1d01b35db82d5/topics/vite/vite.png" },
    { title: "React", imgurl: "https://cdn-icons-png.flaticon.com/512/1260/1260667.png" },
    { title: "Vercel", imgurl: "https://res.cloudinary.com/apideck/image/upload/w_196,f_auto/v1681948803/marketplaces/ckhg56iu1mkpc0b66vj7fsj3o/listings/orig_ncxzmp.png" },
    { title: "C", imgurl: "https://www.pngkit.com/png/full/101-1010012_c-programming-icon-c-programming-language-logo.png" },
    { title: "C++", imgurl: "https://user-images.githubusercontent.com/54292953/142726987-139b4a51-9471-4aa3-9051-1bab383c38c9.png" },
  ];

  return (
    <section className="flex justify-center items-center min-h-screen 
      bg-gradient-to-br from-gray-900 via-black to-gray-800 ">
      <motion.div
        className="flex flex-col items-center gap-12 w-full 
        bg-gray-900/40 backdrop-blur-md p-6 sm:p-10 rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Profile Image */}
        {/* <motion.img
          src={HeroImg} // <-- replace with your image path
          alt="Rohit"
          className="w-32 h-32 rounded-full border-4 border-indigo-600 shadow-lg object-cover"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        /> */}

        {/* About Text */}
        <motion.div
          className="font-sans max-w-3xl text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-3xl font-bold mb-4 text-indigo-400 text-center">About Me</h1>
          <p className="leading-relaxed sm:text-lg md:text-xl">
            Hi, I’m <span className="text-indigo-400 font-semibold">Rohit</span>, 
            a <span className="text-indigo-400 font-semibold">frontend developer </span> 
             and third-year engineering student passionate about building smooth, 
            interactive, and user-friendly web experiences. I specialize in{" "}
            <span className="text-indigo-400 font-semibold">React</span>,{" "}
            <span className="text-indigo-400 font-semibold">Tailwind CSS</span>, and{" "}
            <span className="text-indigo-400 font-semibold">JavaScript</span>, 
            blending clean design with performance-driven, maintainable code.
          </p>
          <p className="leading-relaxed sm:text-lg md:text-xl mt-4">
            Beyond development, I enjoy{" "}
            <span className="text-indigo-400 font-semibold">problem-solving </span> 
            and working with{" "}
            <span className="text-indigo-400 font-semibold">data structures in C++</span>, 
            which helps me deliver{" "}
            <span className="text-indigo-400 font-semibold">efficient and scalable solutions</span>. 
            My goal is to create products that not only function flawlessly but 
            also leave a lasting impression.
          </p>
          <p className="leading-relaxed sm:text-lg md:text-xl mt-4">
            Currently, I’m focused on crafting modern web interfaces and preparing 
            for internships at top tech companies—turning creative ideas into 
            impactful digital experiences.
          </p>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          className="w-full justify-center overflow-hidden items-center  "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-indigo-500">My Skills</h2>
          <div className="w-full slider-track mt-10">

          {
            skillinfo.map((item,index) => (
              <div key={index} >
                <SkillCard {...item} />
                
              </div>
            ))
          }

          </div>
          
        </motion.div>
          <div>

          <p className="leading-relaxed text-3xl sm:text-lg md:text-xl mt-4" >If you're curios about where I applied these skills, feel free to 
            <span className="text-indigo-400 font-semibold"> check out my projects!</span> 
          </p>
          <button  
            onClick={() => navigate("/projects")}
            className="px-6 py-3 rounded-lg font-semibold 
            bg-gradient-to-r from-indigo-600 to-purple-600 
            hover:from-indigo-500 hover:to-purple-500 
            transition-transform transform hover:scale-105 cursor-pointer mt-5">
            View My Work
          </button>
          
          </div>
       
      </motion.div>
    </section>
  );
}

export default About;
