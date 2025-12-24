import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Certificates from './components/Certification'
import BlogPreview from './components/Blog'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Certificates/>
      <BlogPreview/>
      <Contact/>
    </>
  )
}

export default App
