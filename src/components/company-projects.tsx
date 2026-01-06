import type { ComponentPropsWithoutRef } from "react"
import { forwardRef } from "react"

import { Badge } from "./ui/badge"
import { Card } from "./ui/card"

type CompanyProject = {
  seq: number
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

type CompanyProjectsProps = ComponentPropsWithoutRef<"section">

const companyProjects: CompanyProject[] = [
  {
    seq: 1,
    name: "서울대병원",
    period: "2021 - ",
    company: "주식회사플랜잇스퀘어(PLANITSQUARE Inc.)",
    summary:
        "서울대병원 의료·연구 솔루션 통합 포털 구축 프로젝트",
    role: "풀스택 개발 및 운영·협업까지 전 과정을 담당",
    highlights: [
      "연구검색 기능을 MSA 구조로 분리 설계하여 검색 및 권한·데이터 접근 로직을 독립 서비스로 구성",
      "성능 병목을 Set 자료구조를 활용해 O(N×M)에서 O(N)으로 개선하여 브라우저 프리징 문제 해결",
      "비정형 병리·건증 전문 데이터를 정형화하는 분석 파이프라인 운영",
      "IBM Watson Discovery 기반 병리 파싱 시스템을 정규식 기반 자체 파싱 엔진을 사용하는 시스템으로 대체하여 Hit율 97% 정확도 개선 및 CompletableFuture 활용한 병렬처리로 적재시간 개선",
      "다기관 의료 데이터 환경에서 DW 기반 ETL 파이프라인을 설계·운영하며 대용량 임상 데이터 적재 및 품질 관리 수행",
      "서울대병원을 포함한 다수의 상급종합병원·국립병원 환경에서 동일 솔루션을 전담 운영하며, 다기관 운영·관리 및 장애 대응을 책임진 프로젝트",
    ],
    metrics: [
      { label: "다기관 병원", value: "12개" },
      { label: "대용량 임상 데이터", value: "DW·ETL" },
      { label: "운영·장애 대응", value: "전담 운영" },
    ],
    stack: ["Java", "Spring Boot", "Spring Security", "Spring Batch", "React", "TypeScript", "DevExtreme", "PostgreSQL", "Oracle", "Vertica", "Nginx"],
    status: "운영 중",
  },
  {
    seq: 2,
    name: "ResearchEx 2.5",
    period: "2021 - ",
    company: "주식회사플랜잇스퀘어(PLANITSQUARE Inc.)",
    summary:
        "CDW 기반 임상 데이터 연구검색 시스템 개발 및 운영",
    role: "풀스택 개발 및 운영·협업까지 전 과정을 담당",
    highlights: [
      "룩업 하드코딩 의존 구조를 DB 기반 자동 관리 구조로 전환하여, 재배포 없이 운영 가능한 룩업 자동 빌드 시스템 구축",
      "현업 사용자와 1:1 다이렉트 협업 기반 실서비스 운영",
      "9개 이상 병원을 동시에 전담 운영하며, 다기관 환경에서도 안정적인 서비스 운영과 신속한 장애 대응을 수행",
      "웹 취약점 점검 항목을 기준으로 인증·권한·입력값 검증 등 보안 설정을 점검·보완하며 운영 환경의 보안 안정성 강화",
    ],
    metrics: [
      { label: "다기관 병원", value: "9개" },
      { label: "사용자 1:1 대응", value: "현업 직통" },
      { label: "운영·장애 대응", value: "전담 운영" },
    ],
    stack: ["Java", "Spring Boot", "Spring Security", "DevExtreme", "Angular", "TypeScript", "Oracle", "MsSQL", "Tomcat9"],
    status: "운영 중",
  },
  {
    seq: 3,
    name: "한화생명 IMD 포탈 시스템",
    period: "2022",
    company: "주식회사플랜잇스퀘어(PLANITSQUARE Inc.)",
    summary:
        "금융 데이터를 배치 기반으로 적재·관리하는 내부 업무 포털 개발",
    role: "금융 데이터 배치 시스템 설계 및 개발을 담당하며, 데이터 적재·운영·장애 대응",
    highlights: [
      "금융 성과평가 데이터 처리를 위한 배치 시스템 설계 및 개발",
      "운영펀드 매핑 로직 구현을 통해 금융 데이터 간 정합성 확보",
      "유가증권 데이터를 일일 배치로 적재·가공하는 데이터 적재 파이프라인 구축",
      "일일 동향 조회 기능 개발로 금융 지표를 실시간에 가깝게 확인 가능한 내부 포털 제공",
      "배치 실패 및 데이터 오류 케이스를 고려한 운영 로직 구현으로 금융 시스템 안정성 확보",
    ],
    metrics: [
      { label: "금융 데이터 처리", value: "일일 배치" },
      { label: "장애 대응 책임", value: "전담 운영" },
      { label: "성과·펀드·유가증권", value: "데이터 정합성" },
    ],
    stack: ["Java", "Spring Boot", "Spring Security", "Spring Batch", "Spring Data JPA", "JHipster", "React", "TypeScript", "PostgreSQL", "MsSQL"],
    status: "구축 완료",
  },
]

export const CompanyProjects = forwardRef<HTMLElement, CompanyProjectsProps>((props, ref) => {
  return (
    <section
      ref={ref}
      id="company-projects"
      className="py-16 px-4 bg-muted/30 scroll-mt-24"
      {...props}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 space-y-3">
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-primary">Company</span> Projects
          </h2>
        </div>

        <div className="grid gap-4">
          {companyProjects
            .slice()
            .sort((a, b) => a.seq - b.seq)
            .map((project) => (
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
                      <ul className="grid gap-2 text-sm text-foreground/70 lg:grid-cols-2">
                        {project.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary/70" />
                            <span className="flex-1 min-w-0">{item}</span>
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
})
