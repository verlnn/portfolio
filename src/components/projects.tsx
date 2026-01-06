import { forwardRef, useState, type ReactNode } from "react"

import { ExternalLink, Github } from "lucide-react"

import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { MissingResourceDialog } from "./project-alert"

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
    title: "UniPass",
    description: "UniHub, UniShift 솔루션을 하나의 계정으로 이용할 수 있도록 만든 통합 인증(SSO) 및 권한 관리 플랫폼입니다",
    image: "/UniPassLogo.jpeg",
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "React", "TypeScript"],
    github: "https://github.com/UniSuit/UniPass",
    demo: "#",
  },
  {
    title: "UniHub",
    description: "사내 여러 서비스와 시스템을 하나의 화면에서 접근할 수 있도록 제공하는 통합 포털 플랫폼입니다.",
    image: "/UniHubLogo.jpeg",
    tags: ["Java", "Spring Boot", "React", "TypeScript", "DevExtreme"],
    github: "#",
    demo: "#",
  },
  {
    title: "UniShift",
    description: "근태, 근무 일정, 근무 이력 등을 통합 관리하기 위한 근무·출퇴근 관리 플랫폼입니다.",
    image: "/UniShiftLogo.jpeg",
    tags: ["Java", "Spring Boot", "React", "TypeScript", "DevExtreme"],
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
  available: boolean
}

function ProjectActions({ github, demo }: { github?: GithubLink; demo?: string }) {
  const [missingTarget, setMissingTarget] = useState<"demo" | "code" | null>(null)

  const repoButtons: RepoButton[] = []

  const addRepoButton = (label: string, href?: string) => {
    if (!href) {
      repoButtons.push({
        label,
        href: "",
        icon: <Github className="w-4 h-4" />,
        available: false,
      })
      return
    }

    const available = href !== "#" && href.trim().length > 0
    repoButtons.push({
      label,
      href,
      icon: <Github className="w-4 h-4" />,
      available,
    })
  }

  if (typeof github === "string") {
    addRepoButton("Code", github)
  } else if (github && typeof github === "object") {
    addRepoButton("Client", github.client)
    addRepoButton("Server", github.server)
  } else {
    addRepoButton("Code")
  }

  const hasActions = repoButtons.length > 0 || !!demo
  if (!hasActions) return null

  const isDemoAvailable = !!demo && demo !== "#"

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {repoButtons.map((button) => (
          <Button
            key={button.label}
            size="sm"
            variant="outline"
            className="flex-1 gap-2 bg-transparent"
            asChild={button.available}
            onClick={
              button.available ? undefined : () => setMissingTarget("code")
            }
          >
            {button.available ? (
              <a href={button.href} target="_blank" rel="noreferrer">
                {button.icon}
                {button.label}
              </a>
            ) : (
              <>
                {button.icon}
                {button.label}
              </>
            )}
          </Button>
        ))}

        {isDemoAvailable ? (
          <Button size="sm" className="flex-1 gap-2" asChild>
            <a href={demo} target="_blank" rel="noreferrer">
              <ExternalLink className="w-4 h-4" />
              Demo
            </a>
          </Button>
        ) : (
          <Button
            size="sm"
            className="flex-1 gap-2"
            onClick={() => setMissingTarget("demo")}
          >
            <ExternalLink className="w-4 h-4" />
            Demo
          </Button>
        )}
      </div>

      <MissingResourceDialog
        open={missingTarget !== null}
        onOpenChange={(open) => setMissingTarget(open ? missingTarget : null)}
        title={
          missingTarget === "code" ? "코드 저장소 준비 중" : "데모 준비 중"
        }
        description={
          missingTarget === "code"
            ? "아직 GitHub 저장소 링크가 준비되지 않았습니다. 곧 업데이트될 예정이에요."
            : "아직 데모 버전이 제공되지 않습니다. 곧 업데이트될 예정이에요."
        }
      />
    </>
  )
}

export const Projects = forwardRef<HTMLElement, ProjectsProps>(({ className, ...props }, ref) => {
  return (
    <section
      ref={ref}
      id="projects"
      data-pdf-section="true"
      className="print-section print-section-start py-20 px-4 scroll-mt-24"
      {...props}
    >
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
              <div className="relative h-60 bg-muted">
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
