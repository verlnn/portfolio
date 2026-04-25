import { forwardRef, useState, type ReactNode } from "react"

import { ExternalLink, Github } from "lucide-react"

import { Badge } from "./ui/badge"
import { Button } from "./ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
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
  situation: string
  solution: string
  outcome: string
  image?: string
  tags: string[]
  github?: GithubLink
  demo?: string
}

const projects: Project[] = [
  {
    title: "HeavenlyCoupon",
    situation: "선착순 쿠폰 발급 시 동시 요청 집중으로 중복 발급·재고 초과 문제 발생, 피크 타임 RPS 1,000+ 처리 기준 설계 필요",
    solution: "Redis Lua 스크립트 기반 원자적 재고 차감 + Kafka 비동기 발급 처리로 정합성 확보. Prometheus + Grafana로 발급 처리량·Consumer Lag·에러율 메트릭 수집 구조 설계, 분산 환경에서 Trace ID 기반 발급 흐름 로깅 적용",
    outcome: "RPS 1,000 req/s 처리 목표 설계 달성, 중복 발급률 0%, Consumer Lag p99 500ms 이내 유지",
    image: "/coupon.png",
    tags: ["Java", "Spring Boot", "Redis", "Kafka", "Docker", "Prometheus", "Grafana"],
    github: "https://github.com/verlnn/HeavenlyCoupon",
    demo: "#",
  },
  {
    title: "UniPass",
    situation: "여러 솔루션에 인증이 분산되어 세션 관리 복잡도 증가, 토큰 탈취 시 전체 서비스 영향 범위 무제한",
    solution: "JWT + Refresh Token Rotation 기반 SSO 플랫폼 구축, Spring Security 중앙화 인증 서버 설계. 인증 API 응답시간 모니터링, Trace ID로 인증 흐름 분산 추적 로깅 적용",
    outcome: "인증 API 응답시간 p99 100ms 이내 설계, 일 TPD 1만+ 인증 요청 처리 구조 확보, 토큰 탈취 시 단일 서버에서 무효화 가능",
    image: "/UniPassLogo.jpeg",
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "React", "TypeScript"],
    github: "https://github.com/UniSuit/UniPass",
    demo: "#",
  },
  {
    title: "UniHub",
    situation: "서비스 분산으로 접근 경로 파편화, 역할별 메뉴 접근 제어 부재로 보안 이슈 및 UX 저하",
    solution: "RBAC 기반 메뉴 권한 제어 + 단일 포털 통합. 메뉴 로딩 응답시간 목표를 지표로 설정하고 캐시 레이어 적용",
    outcome: "메뉴 접근 응답시간 200ms 이하 설계, 역할별 접근 제어 일원화, 서비스 진입점 단일화",
    image: "/UniHubLogo.jpeg",
    tags: ["Java", "Spring Boot", "React", "TypeScript", "DevExtreme"],
    github: "#",
    demo: "#",
  },
  {
    title: "UniShift",
    situation: "수작업 근태 관리로 집계 오류 및 운영 비용 발생, 근무 이력 추적 불가능",
    solution: "이벤트 기반 근태 이력 추적 구조 설계, 자동 집계 배치 적용. 처리량·오류율 메트릭으로 배치 안정성 모니터링",
    outcome: "수작업 근태 처리 자동화, 이력 추적 가능한 감사 로그 구조 확보",
    image: "/UniShiftLogo.jpeg",
    tags: ["Java", "Spring Boot", "React", "TypeScript", "DevExtreme"],
    github: "#",
    demo: "#",
  },
  {
    title: "한끼픽",
    situation: "메뉴 결정 피로도 문제, 단순 랜덤 추천의 낮은 만족도로 재사용률 저하",
    solution: "Firebase 기반 사용자 이력 수집 + FastAPI 추천 알고리즘 적용. 추천 API 응답시간을 핵심 지표로 설정, 200ms 이내 목표 기준 설계",
    outcome: "추천 API 응답시간 200ms 이내 달성, 사용자 이력 기반 만족도 개선",
    image: "/HankiPickLogo.png",
    tags: ["Flutter", "Dart", "Firebase", "FastAPI", "Python", "JWT", "PostgreSQL"],
    github: {
      client: "https://github.com/verlnn/HankiPick-client",
      server: "https://github.com/verlnn/HankiPick-server",
    },
  },
  {
    title: "Food Wallet",
    situation: "식이 제한 사용자의 식품 성분 수동 확인의 어려움, 구매 전 안전성 검증 체계 부재",
    solution: "OCR + Claude AI 기반 성분 자동 분석 및 위험 성분 알림 구현. 분석 응답시간을 핵심 지표로 설정, 3초 이내 응답 목표 기준 설계",
    outcome: "OCR 인식률 95%+, 성분 분석 응답시간 3초 이내, 식이 제한 항목 자동 매칭",
    image: "/FoodWalletLogo.png",
    tags: ["Flutter", "Dart", "Firebase", "Python", "Claude AI", "OCR", "PostgreSQL"],
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
    <section ref={ref} id="projects" className="py-20 px-4 bg-muted scroll-mt-24" {...props}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 space-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Side Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">개인 프로젝트</h2>
          <p className="text-sm text-muted-foreground mt-1">상황, 해결, 수치로 정리한 개인 프로젝트입니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-xl border border-border bg-card overflow-hidden transition-colors hover:border-primary/40"
            >
              {/* 썸네일 + 제목 헤더 */}
              <div className="flex items-center gap-4 p-5 border-b border-border bg-muted/20">
                <div className="h-12 w-12 flex-shrink-0 rounded-lg overflow-hidden border border-border bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base font-bold text-foreground">{project.title}</h3>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* 상황 / 해결 / 수치 — 가로 3분할 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border">
                <div className="px-4 py-4 space-y-1.5">
                  <span className="inline-block text-[11px] font-bold tracking-wide text-yellow-700 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded-full px-2 py-0.5">
                    상황
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.situation}</p>
                </div>
                <div className="px-4 py-4 space-y-1.5">
                  <span className="inline-block text-[11px] font-bold tracking-wide text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 rounded-full px-2 py-0.5">
                    해결
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.solution}</p>
                </div>
                <div className="px-4 py-4 space-y-1.5">
                  <span className="inline-block text-[11px] font-bold tracking-wide text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-full px-2 py-0.5">
                    수치
                  </span>
                  <p className="text-sm font-medium text-foreground leading-relaxed">{project.outcome}</p>
                </div>
              </div>

              {/* 액션 버튼 */}
              <div className="px-5 py-3 border-t border-border bg-muted/20">
                <ProjectActions github={project.github} demo={project.demo} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
})
