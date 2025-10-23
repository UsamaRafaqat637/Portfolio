import { useState } from 'react'
import Hero from './Components/HeroSection/Hero'
import Personal from './Components/Personal/Personal.jsx'
import Skill from './Components/Skills/Skill.jsx'
import Experience from './Components/Education/Experience.jsx'
import Portfolio from './Components/Portfolio/Portfolio.jsx'
import Contact from './Components/Contact/Contact.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Hero/>
    <Personal/>
    <Skill/>
    <Experience/>
    <Portfolio/>
    <Contact/>
    </>
  )
}

export default App
