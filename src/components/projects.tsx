import { forwardRef, useState, type ReactNode } from "react"

import { ExternalLink, Github } from "lucide-react"

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./ui/alert-dialog"
import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"

type ProjectsProps = React.ComponentPropsWithoutRef<"section">

type GithubLink =
  | string
  | {
      client?: string
      server?: string
    }

type Project = {
  title: string
  description: string
  image?: string
  tags: string[]
  github?: GithubLink
  demo?: string
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "대규모 이커머스 플랫폼 프론트엔드 개발. 사용자 경험 최적화 및 성능 개선에 집중했습니다.",
    image: "/logo.png",
    tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    title: "한끼픽",
    description: "메뉴 추천 서비스 앱 개발. 사용자 기반 알고리즘을 통하여 후회없는 메뉴를 추천합니다.",
    image: "/HankiPickLogo.png",
    tags: ["Flutter", "Dart", "Firebase", "FastAPI", "Python", "JWT", "PostgreSQL"],
    github: {
      client: "https://github.com/verlnn/HankiPick-client",
      server: "https://github.com/verlnn/HankiPick-server",
    },
  },
  {
    title: "Food Wallet",
    description: "다양한 식이 제한을 가진 사용자들이 안전하게 식품을 선택할 수 있도록 돕는 모바일 앱입니다.",
    image: "/FoodWalletLogo.png",
    tags: ["Flutter", "Dart", "Firebase", "Python", "chat 40 mini", "OCR", "PostgreSQL"],
    github: {
      client: "https://github.com/verlnn/FoodWallet-Client",
      server: "https://github.com/verlnn/FoodWallet-Server",
    },
  },
]

type RepoButton = {
  label: string
  href: string
  icon: ReactNode
}

function ProjectActions({ github, demo }: { github?: GithubLink; demo?: string }) {
  const [isDemoAlertOpen, setIsDemoAlertOpen] = useState(false)

  const repoButtons: RepoButton[] = []

  const addRepoButton = (label: string, href?: string) => {
    if (!href) return
    repoButtons.push({
      label,
      href,
      icon: <Github className="w-4 h-4" />,
    })
  }

  const handleDemoBtnClick = (demoLink: string | undefined) => {
    if (isDemoAlertOpen) window.open(demoLink, '_blank');
    else setIsDemoAlertOpen(true);
  }

  if (typeof github === "string" && github) {
    addRepoButton("Code", github)
  } else if (github && typeof github === "object") {
    addRepoButton("Client", github.client)
    addRepoButton("Server", github.server)
  }

  const hasActions = repoButtons.length > 0 || !!demo
  if (!hasActions) return null

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {repoButtons.map((button) => (
          <Button
            key={button.label}
            size="sm"
            variant="outline"
            className="flex-1 gap-2 bg-transparent"
            asChild
          >
            <a href={button.href} target="_blank" rel="noreferrer">
              {button.icon}
              {button.label}
            </a>
          </Button>
        ))}

          <Button
              size="sm"
              className="flex-1 gap-2"
              onClick={() => handleDemoBtnClick(demo)}
          >
              <ExternalLink className="w-4 h-4" />
              Demo
          </Button>
      </div>

      <AlertDialog open={isDemoAlertOpen} onOpenChange={setIsDemoAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>데모 준비 중</AlertDialogTitle>
            <AlertDialogDescription>
              아직 데모 버전이 제공되지 않습니다. 곧 업데이트될 예정이에요.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setIsDemoAlertOpen(false)}>
              확인
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  )
}

export const Projects = forwardRef<HTMLElement, ProjectsProps>(({ className, ...props }, ref) => {
  return (
    <section ref={ref} id="projects" className="py-20 px-4" {...props}>
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
              <div className="relative h-70 bg-muted">
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

                <ProjectActions github={project.github} demo={project.demo} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
})
