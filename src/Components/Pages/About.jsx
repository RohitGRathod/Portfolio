import React from "react";
import SkillCard from "../Skills/SkillCard";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function About() {
  const navigate = useNavigate();

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
        <motion.img
          src="/profile.jpg" // <-- replace with your image path
          alt="Rohit"
          className="w-32 h-32 rounded-full border-4 border-indigo-600 shadow-lg object-cover"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* About Text */}
        <motion.div
          className="font-sans max-w-3xl text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <h1 className="text-3xl font-bold mb-4 text-indigo-400">About Me</h1>
          <p className="leading-relaxed sm:text-lg md:text-xl">
            Hi, I’m <span className="text-indigo-400 font-semibold">Rohit</span>, 
            a <span className="text-indigo-400 font-semibold">frontend developer</span> 
            and third-year engineering student passionate about building smooth, 
            interactive, and user-friendly web experiences. I specialize in{" "}
            <span className="text-indigo-400 font-semibold">React</span>,{" "}
            <span className="text-indigo-400 font-semibold">Tailwind CSS</span>, and{" "}
            <span className="text-indigo-400 font-semibold">JavaScript</span>, 
            blending clean design with performance-driven, maintainable code.
          </p>
          <p className="leading-relaxed sm:text-lg md:text-xl mt-4">
            Beyond development, I enjoy{" "}
            <span className="text-indigo-400 font-semibold">problem-solving</span> 
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
          className="w-full flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-indigo-400">My Skills</h2>
          <SkillCard />
        </motion.div>

        {/* CTA Button */}
        <motion.div
          className="mt-6 w-full flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <button
            onClick={() => navigate("/contact-me")}
            className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-6 rounded-lg transition transform hover:scale-105"
            aria-label="Navigate to Contact Page"
          >
            Get in Touch
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default About;
