import React from 'react'
import {useNavigate} from 'react-router-dom'

function Header() {
    const navItem = [
        {
            title:"Home",
            slug:"/"
        },
        {
            title:"About Me",
            slug:"/about"
        },
        {
            title:"Skills",
            slug:"/skills"
        },
        {
            title:"Projects",
            slug:"/projects"
        },
        {
            title:"Contace Me",
            slug:"/contact-me"
        }
    ]
   
    const navigate = useNavigate()
    const handleOnNavigate = (slug) =>{
        navigate(slug)
    }

  return (
    <div className='bg-gray-900 flex p-2 h-max  justify-between items-center rounded-lg shadow-lg lg:w-full md:w-11/12 sm:w-10/12 '>
      <ul className='flex gap-1'>
      {
        navItem.map((item)=>
            <li key={item.title}>
            <button 
            className='bg-gray-600 hover:bg-black/40 hover:border-2 border-blue-800 m-2 !text-white'
            onClick={()=>handleOnNavigate(item.slug)}
            >
            {item.title}
            </button>
            </li>
        )
      }
      </ul>
    </div>
  )
}

export default Header
