import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate();
  const handleNavigation = (slug) => {
    navigate(slug);
  }
  return (
    <div className='flex justify-center'>
      <div className='sm:w-8/12 md:w-10/12 lg:w-11/12  bg-black/30 min-h-screen m-10 rounded-2xl flex items-center justify-center p-8 text-gray-300 '>
        <div className='w-8/12 h-full flex items-center justify-center'>

          <div className= 'h-1/3 sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 flex flex-col justify-center items-center gap-4'>
            <div>
              <h1>HI, I&apos;M ROHIT</h1>
              <p>

                A passionate Software Engineer & Frontend Developer
                Turning ideas into clean, scalable code.
              </p>

            </div>
            <div className='w-full h-max m-2 sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 flex justify-center items-center gap-4'>
              <a href='https://www.linkedin.com/in/rohit-grathod/' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size='2x' color='white' className='p-4' /></a>
              <a href='https://github.com/RohitGRathod' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2x' color='white' className='p-4' /></a>
              <a href='https://www.instagram.com/rohit.rathod_45/profilecard/?igsh=MWtsdTBlbnltZWEyNA%3D%3D' target='_blank' rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size='2x' color='white' className='p-4' /></a>
            </div>
          <div>
            <button onClick={()=>(handleNavigation('/projects'))} className='bg-gray-600 hover:bg-black/40 hover:border-2 border-blue-800 m-2 text-white'>View My Work</button>
            <button onClick={()=>(handleNavigation('/contact-me'))} className='bg-gray-600 hover:bg-black/40 hover:border-2 border-blue-800 m-2 text-white'>Let's Connect</button>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
