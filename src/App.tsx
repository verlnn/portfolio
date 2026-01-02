import "./app/globals.css"

import { About } from "./components/about"
import { Contact } from "./components/contact"
import { Experience } from "./components/experience"
import { Hero } from "./components/hero"
import { Projects } from "./components/projects"
import { Skills } from "./components/skills"
import { useSectionScroll } from "./hooks/use-section-scroll"


function App() {
  const { projectsRef, contactRef, scrollToProjects, scrollToContact } = useSectionScroll()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero onViewProjects={scrollToProjects} onContact={scrollToContact} />
      <About />
      <Experience />
      <Projects ref={projectsRef} />
      <Skills />
      <Contact ref={contactRef} />
    </main>
  )
}

export default App
