import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,createBrowserRouter,Route,createRoutesFromElements } from 'react-router-dom'
import { About, Contact, Home,Projects, Skill } from './Components'
const route=createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App/>}>
      <Route path="" element={<Home/>}/>
      <Route path="/contact-me" element={<Contact/>}/>
      <Route path="/projects" element={<Projects/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skills" element={<Skill/>}/>
     
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}>

    <App />
    </RouterProvider>
  </StrictMode>,
)
