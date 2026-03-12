import "./app/globals.css"

import { About } from "./components/about"
import { CompanyProjects } from "./components/company-projects"
import { Contact } from "./components/contact"
import { Experience } from "./components/experience"
import { Hero } from "./components/hero"
import { Impact } from "./components/impact"
import { Projects } from "./components/projects"
import { SectionNav } from "./components/section-nav"
import { Skills } from "./components/skills"
import { Strengths } from "./components/strengths"
import { useSectionScroll } from "./hooks/use-section-scroll"


function App() {
  const { projectsRef, contactRef, scrollToProjects, scrollToContact } = useSectionScroll()

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.08),_transparent_55%)]" />
        <div className="absolute -top-40 right-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      </div>
      <SectionNav />
      <Hero onViewProjects={scrollToProjects} onContact={scrollToContact} />
      <About />
      <Strengths />
      <Experience />
      <CompanyProjects ref={projectsRef} />
      <Impact />
      <Projects />
      <Skills />
      <Contact ref={contactRef} />
    </main>
  )
}

export default App
