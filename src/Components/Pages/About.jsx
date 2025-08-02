import React from 'react'
import SkillCard from '../Skills/SkillCard'
import { useNavigate, Link } from 'react-router-dom'

function About() {
  const navigate = useNavigate()

  return (
    <section className="lg:w-11/12 md:w-10/12 sm:w-8/12 mx-auto min-h-screen rounded-2xl bg-black/30 m-10 p-8 text-gray-300 flex flex-col gap-12">
    
      <div className="flex flex-col lg:flex-row items-start gap-12 w-full sm:ml-0 md:ml-0 xl:ml-0">
       
        <div className="flex-1 font-serif">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="leading-relaxed mb-6 sm:text-lg md:text-xl lg:text-2xl text-center">
            Hi, I’m <strong>Rohit</strong>, a <strong>frontend developer</strong> and third-year engineering student passionate about building smooth, interactive, and user-friendly web experiences. I specialize in <strong>React</strong>, <strong>Tailwind CSS</strong>, and <strong>JavaScript</strong>, blending clean design with performance-driven, maintainable code.
          </p>
          <p className="leading-relaxed mb-6 sm:text-lg md:text-xl lg:text-2xl">
            Beyond development, I enjoy <strong>problem-solving</strong> and working with <strong>data structures in C++</strong>, which helps me deliver <strong>efficient and scalable solutions</strong>. My goal is to create products that not only function flawlessly but also leave a lasting impression.
          </p>
          <p className="leading-relaxed sm:text-lg md:text-xl lg:text-2xl">
            Currently, I’m focused on crafting modern web interfaces and preparing for internships at top tech companies—turning creative ideas into impactful digital experiences.
          </p>
          <div className="mt-8">
            <button
              onClick={() => navigate('/contact-me')}
              className="inline-block !bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-2 px-5 rounded-lg transition"
            >
              Get in Touch
            </button>
          </div>
        </div>

       
         <div className='w-2/3 h-full text-center font-serif mb-4 rounded-2xl '>
          <h2 className='text-2xl font-bold mb-4'>Skills</h2>
          <div className='ml-20'>

            <SkillCard />
          </div>
        </div>
      </div>

      <div className="text-center mt-auto">
        <p className="text-sm">
          I'm currently looking for new opportunities.{' '}
          <Link to="/contact-me" className="text-indigo-400 underline">
            Contact me
          </Link>
          .
        </p>
      </div>
    </section>
  )
}

export default About
