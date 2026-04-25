import { cn } from "../lib/utils"
import { useActiveSection } from "../hooks/use-active-section"

const sections = [
  { label: "Home", href: "#home" },
  { label: "Strengths", href: "#strengths" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#company-projects" },
  { label: "Impact", href: "#impact" },
  { label: "Side", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

const sectionIds = sections.map((s) => s.href.replace("#", ""))

export function SectionNav() {
  const activeSection = useActiveSection(sectionIds)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 h-14">
        <span className="text-sm font-bold tracking-tight text-foreground">
          김민수 · Backend Engineer
        </span>
        <nav aria-label="Section navigation" className="flex items-center gap-0.5 overflow-x-auto">
          {sections.map((section) => {
            const isActive = activeSection === section.href.replace("#", "")
            return (
              <a
                key={section.label}
                href={section.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "px-3 py-1.5 text-sm rounded-md transition-colors duration-150 whitespace-nowrap font-medium",
                  isActive
                    ? "text-primary bg-primary/8"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                )}
              >
                {section.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
