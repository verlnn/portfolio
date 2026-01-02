import "./app/globals.css"

import { useRef } from "react"

import { About } from "./components/about"
import { Contact } from "./components/contact"
import { Experience } from "./components/experience"
import { Hero } from "./components/hero"
import { Projects } from "./components/projects"
import { Skills } from "./components/skills"


function App() {
  const projectsRef = useRef<HTMLElement | null>(null)

  const handleViewProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero onViewProjects={handleViewProjects} />
      <About />
      <Experience />
      <Projects ref={projectsRef} />
      <Skills />
      <Contact />
    </main>
  )
}

export default App
