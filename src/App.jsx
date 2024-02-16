import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Project from './pages/Project'

function App() {
  

  return (
    <>
      <Home/>
      <About/>
      <Contact/>
      <Project/>
    </>
  )
}

export default App
