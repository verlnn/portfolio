import "./app/globals.css"

import { About } from "./components/about"
import { Contact } from "./components/contact"
import { Experience } from "./components/experience"
import { Hero } from "./components/hero"
import { Projects } from "./components/projects"
import { Skills } from "./components/skills"


function App() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}

export default App
