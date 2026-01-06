import "./app/globals.css"

import { About } from "./components/about"
import { CompanyProjects } from "./components/company-projects"
import { Contact } from "./components/contact"
import { Experience } from "./components/experience"
import { Hero } from "./components/hero"
import { Projects } from "./components/projects"
import { SectionNav } from "./components/section-nav"
import { Skills } from "./components/skills"
import { useSectionScroll } from "./hooks/use-section-scroll"


function App() {
  const { projectsRef, contactRef, scrollToProjects, scrollToContact } = useSectionScroll()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <SectionNav />
      <Hero onViewProjects={scrollToProjects} onContact={scrollToContact} />
      <About />
      <Experience />
      <CompanyProjects ref={projectsRef} />
      <Projects />
      <Skills />
    </main>
  )
}

export default App
