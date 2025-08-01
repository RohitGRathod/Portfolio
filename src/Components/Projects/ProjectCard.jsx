import React from 'react'
import {useNavigate,Link} from 'react-router-dom'

function ProjectCard({title, description,skills, imageUrl, liveUrl, codeUrl}) {
    const navigate = useNavigate();
    const handleOnNavigate = (url) => {
        navigate(url);
    }
  return (
    
    <div className='w-full h-full bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 text-gray-400'>
      <div className='p-2'>
        <img src={imageUrl} alt="projectimage" className='rounded-lg'/>
        <h2><strong>Title</strong> : {title}</h2>
        <h3><strong>Tech Used</strong> : {skills}</h3>
        <p><strong>Description</strong> : {description}</p>
        <div className='flex justify-between'>
          
        <a href={liveUrl} target="_blank" className='!text-gray-200 bg-black/25 hover:bg-blue-950 hover:border-2 border-gray-900 m-2 rounded-lg'>Visit {title}</a>
        <a href={codeUrl} target='_blank' className='!text-gray-200 bg-black/25 hover:bg-blue-950 hover:border-2 border-gray-900 m-2 rounded-lg p-2'>Click to view code</a>
        </div>
        </div>
    </div>
   
  )
}

export default ProjectCard
