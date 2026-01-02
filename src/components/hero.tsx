import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />

      <div className="relative max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold text-balance">
            안녕하세요, <span className="text-primary">개발자</span>입니다
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance">창의적인 솔루션으로 웹을 만듭니다</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="gap-2">
            <Mail className="w-5 h-5" />
            연락하기
          </Button>
          <Button size="lg" variant="outline" className="gap-2 bg-transparent">
            프로젝트 보기
            <ArrowDown className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex items-center justify-center gap-4 pt-8">
          <Button size="icon" variant="ghost" className="rounded-full">
            <Github className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost" className="rounded-full">
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button size="icon" variant="ghost" className="rounded-full">
            <Mail className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
