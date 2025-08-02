import { useState } from 'react'
import { Home,Header } from './Components'
import './App.css'
import { Outlet } from 'react-router-dom'

function App() {
  

  return (

    <div className='w-screen min-h-screen bg-transparent'>
    <div className=' mx-auto flex w-full'>
      <Header/>
    </div>

      
      <Outlet/>
    </div>
  )
}

export default App
