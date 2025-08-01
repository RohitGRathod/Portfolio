import React from 'react'
import SkillCard from '../Skills/SkillCard'

function Skills() {
    
  return (
    <div className='sm:w-8/12 md:w-10/12 lg:w-11/12 min-h-screen rounded-2xl bg-black/30 m-10 p-8 text-gray-300 flex flex-col items-center justify-center'>
      <div className=' h-1/3 w-full'>

      <h1 className='font-2xl'>Skills</h1>
      <div className='w-3/4 h-full text-center font-serif mb-4 rounded-2xl mt-6 lg:ml-65'>

      <SkillCard />
      </div>
      </div>
    </div>
  )
}


export default Skills
