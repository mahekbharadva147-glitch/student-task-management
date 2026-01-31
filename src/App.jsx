import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Ragister from './pages/Ragister'
import Login from './pages/Login'

function App() {
  const route=createBrowserRouter([
    {
    path: "/Login",
    element:<Login/>
  },
  {
    path:"/ragister",
    element:<Ragister/>
  }

  ])

  return <RouterProvider router={route}/>
  
}

export default App
