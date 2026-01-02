import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "E-Commerce Platform",
    description: "대규모 이커머스 플랫폼 프론트엔드 개발. 사용자 경험 최적화 및 성능 개선에 집중했습니다.",
    image: "/ecommerce-platform-interface.png",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "팀 협업을 위한 태스크 관리 애플리케이션. 실시간 동기화와 알림 기능을 구현했습니다.",
    image: "/task-management-dashboard.png",
    tags: ["React", "Firebase", "Material-UI"],
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio CMS",
    description: "개발자를 위한 포트폴리오 CMS. 다크모드와 반응형 디자인을 지원합니다.",
    image: "/portfolio-cms-editor.jpg",
    tags: ["Next.js", "Supabase", "TailwindCSS"],
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-primary">Featured</span> Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:border-primary/30 transition-all hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="relative h-48 bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button size="sm" variant="outline" className="flex-1 gap-2 bg-transparent">
                    <Github className="w-4 h-4" />
                    Code
                  </Button>
                  <Button size="sm" className="flex-1 gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
