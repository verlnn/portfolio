import { Button } from "./ui/button"

const sections = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Company", href: "#company-projects" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
]

export function SectionNav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-1 px-4 py-3 md:justify-between">
        <span className="text-sm font-semibold text-foreground/80">Portfolio</span>
        <nav aria-label="Section navigation" className="flex flex-wrap items-center justify-center gap-1">
          {sections.map((section) => (
            <Button key={section.label} variant="ghost" size="sm" className="text-xs md:text-sm" asChild>
              <a href={section.href}>{section.label}</a>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  )
}
