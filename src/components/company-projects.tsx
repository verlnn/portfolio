import { Badge } from "./ui/badge"
import { Card } from "./ui/card"

type CompanyProject = {
  name: string
  period: string
  company: string
  summary: string
  role: string
  highlights: string[]
  metrics: { label: string; value: string }[]
  stack: string[]
  status: string
}

const companyProjects: CompanyProject[] = [
  {
    name: "MediGate 통합 포털",
    period: "2023 - 2024",
    company: "PLANITSQUARE Inc.",
    summary:
      "여러 병원 솔루션을 하나의 화면에서 연결하는 통합 포털. 사용자 권한과 메뉴 구성을 병원별로 커스터마이징 가능하게 설계.",
    role: "백엔드 설계, 프론트 화면 개발, 운영 자동화",
    highlights: [
      "권한-메뉴 매핑 모델 정리로 신규 병원 도입 리드타임 단축",
      "포털 초기 로딩 최적화로 첫 화면 렌더링 개선",
      "운영 로그 표준화로 장애 탐지 속도 향상",
    ],
    metrics: [
      { label: "도입 병원", value: "12곳" },
      { label: "첫 화면", value: "1.8s" },
      { label: "운영 알림", value: "40%↑" },
    ],
    stack: ["Java", "Spring Boot", "React", "TypeScript", "PostgreSQL", "Nginx"],
    status: "운영 중",
  },
  {
    name: "CareShift 근무/출퇴근",
    period: "2022 - 2023",
    company: "PLANITSQUARE Inc.",
    summary:
      "근무 일정, 출퇴근 기록, 승인 흐름을 통합한 근태 관리 플랫폼. 병원별 근무 규칙을 설정 가능한 정책 엔진 구축.",
    role: "정책 엔진 구현, 스케줄 API, 배치 성능 개선",
    highlights: [
      "근무 규칙 DSL 도입으로 정책 변경 대응 시간 축소",
      "배치 작업 병렬화로 야간 집계 처리 시간 개선",
      "UX 개선을 위한 화면 상태 캐싱 도입",
    ],
    metrics: [
      { label: "처리 기록", value: "150k+/월" },
      { label: "야간 집계", value: "3h → 45m" },
      { label: "정책 템플릿", value: "25+" },
    ],
    stack: ["Java", "Spring Boot", "Angular", "TypeScript", "VERTICA"],
    status: "운영 중",
  },
  {
    name: "Insight 검사 리포트",
    period: "2021 - 2022",
    company: "PLANITSQUARE Inc.",
    summary:
      "검사 결과 리포트를 자동 생성하고 병원 업무 시스템과 연동. 의사/간호사별 필터링과 승인 워크플로우 제공.",
    role: "DB 모델링, 리포트 템플릿, 연동 API 유지보수",
    highlights: [
      "리포트 템플릿 표준화로 신규 양식 추가 속도 개선",
      "서버 사이드 렌더링 도입으로 대용량 출력 안정화",
      "레거시 연동 모듈 리팩터링으로 장애 건수 감소",
    ],
    metrics: [
      { label: "리포트/일", value: "8k+" },
      { label: "템플릿", value: "40+" },
      { label: "장애 감소", value: "35%↓" },
    ],
    stack: ["Java", "Spring Boot", "React", "Linux", "PostgreSQL"],
    status: "운영 중",
  },
]

export function CompanyProjects() {
  return (
    <section id="company-projects" className="py-16 px-4 bg-muted/30 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-primary">Company</span> Projects
          </h2>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            회사에서 맡았던 프로젝트를 한눈에 정리한 목업입니다. 각 프로젝트의 역할과 임팩트를 빠르게
            훑어볼 수 있도록 구성했습니다.
          </p>
        </div>

        <div className="grid gap-4">
          {companyProjects.map((project) => (
            <Card
              key={project.name}
              className="relative overflow-hidden border-primary/10 bg-card/90 p-5 md:p-6"
            >
              <div className="pointer-events-none absolute -top-24 right-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

              <div className="space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">{project.name}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{project.company}</p>
                  </div>

                  <div className="flex items-center gap-2 text-xs md:text-sm">
                    <Badge className="bg-primary/10 text-primary hover:bg-primary/20">
                      {project.status}
                    </Badge>
                    <span className="text-primary font-medium">{project.period}</span>
                  </div>
                </div>

                <p className="text-sm md:text-base text-foreground/80 leading-relaxed">
                  {project.summary}
                </p>

                <div className="grid gap-4 md:grid-cols-[1.4fr_0.9fr]">
                  <div className="space-y-3">
                    <div className="space-y-1">
                      <p className="text-xs md:text-sm font-semibold text-foreground">담당 역할</p>
                      <p className="text-xs md:text-sm text-foreground/70">{project.role}</p>
                    </div>

                    <div className="space-y-1">
                      <p className="text-xs md:text-sm font-semibold text-foreground">핵심 작업</p>
                      <ul className="grid gap-2 text-xs md:text-sm text-foreground/70 sm:grid-cols-2">
                        {project.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-xl border border-primary/10 bg-muted/40 p-3">
                      <p className="text-xs md:text-sm font-semibold text-foreground">Impact</p>
                      <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                        {project.metrics.map((metric) => (
                          <div key={metric.label} className="rounded-lg bg-background/80 p-2">
                            <p className="text-base font-bold text-foreground">{metric.value}</p>
                            <p className="text-[11px] text-muted-foreground">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border border-primary/10 bg-background/80 p-3">
                      <p className="text-xs md:text-sm font-semibold text-foreground">Stack</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.stack.map((tag) => (
                          <Badge
                            key={tag}
                            variant="secondary"
                            className="bg-primary/10 text-primary text-[11px]"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
