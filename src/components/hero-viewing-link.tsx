import { Button } from "./ui/button"

export function HeroViewingLink() {
  return (
    <div className="mx-auto flex w-fit flex-wrap items-center justify-center gap-3 rounded-full border border-primary/20 bg-gradient-to-r from-primary/10 via-background to-accent/10 px-5 py-2 shadow-sm">
      <span className="text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-primary/80">
        Best Viewing
      </span>
      <Button asChild size="sm" className="rounded-full px-4 text-xs md:text-sm">
        <a href="https://verlnn-portfolio-v2.netlify.app/" target="_blank" rel="noopener noreferrer">
          사이트로 이동
        </a>
      </Button>
    </div>
  )
}
