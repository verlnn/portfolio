import { cn } from "../lib/utils"
import { useActiveSection } from "../hooks/use-active-section"
import { Button } from "./ui/button"

const sections = [
  { label: "Home", href: "#home" },
  { label: "Strengths", href: "#strengths" },
  { label: "Experience", href: "#experience" },
  { label: "Company Projects", href: "#company-projects" },
  { label: "Impact", href: "#impact" },
  { label: "Side Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

const sectionIds = sections.map((section) => section.href.replace("#", ""))

export function SectionNav() {
  const activeSection = useActiveSection(sectionIds)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 px-4 py-3">
        <div className="flex items-center gap-3">
          <span className="text-sm font-semibold text-foreground/80">Portfolio</span>
          <span className="hidden text-xs text-muted-foreground md:inline">
            Backend Engineer
          </span>
        </div>
        <nav
          aria-label="Section navigation"
          className="flex w-full max-w-full items-center gap-1 overflow-x-auto rounded-full border border-border/70 bg-card/90 px-2 py-1 shadow-[0_1px_2px_rgba(15,23,42,0.06)] md:w-auto"
        >
          {sections.map((section) => (
            <Button
              key={section.label}
              variant="ghost"
              size="sm"
              className={cn(
                "rounded-full text-xs md:text-sm transition-all whitespace-nowrap",
                activeSection === section.href.replace("#", "")
                  ? "bg-primary text-primary-foreground hover:bg-primary"
                  : "text-muted-foreground hover:text-foreground",
              )}
              asChild
            >
              <a
                href={section.href}
                aria-current={activeSection === section.href.replace("#", "") ? "page" : undefined}
              >
                {section.label}
              </a>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  )
}
