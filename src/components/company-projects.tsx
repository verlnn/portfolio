import type { ComponentPropsWithoutRef } from "react"
import { forwardRef, useState } from "react"

import { ChevronDown, ChevronUp } from "lucide-react"

import { Badge } from "./ui/badge"
import { Card } from "./ui/card"

type Highlight = {
  title: string
  situation: string
  solution: string
  outcome: string
}

type SubProject = {
  name: string
  description: string
  stack: string[]
  highlights: Highlight[]
}

type CompanyProject = {
  seq: number
  name: string
  period: string
  company: string
  summary: string
  role: string
  highlights?: Highlight[]
  subProjects?: SubProject[]
  metrics: { label: string; value: string }[]
  stack: string[]
  status: string
}

type CompanyProjectsProps = ComponentPropsWithoutRef<"section">

const companyProjects: CompanyProject[] = [
  {
    seq: 1,
    name: "서울대병원",
    period: "2021 - 2026",
    company: "주식회사플랜잇스퀘어(PLANITSQUARE Inc.)",
    summary: "임상 연구자가 대규모 CDW 데이터를 효율적으로 검색·분석할 수 있도록 연구검색 플랫폼(ResearchEx) 및 데이터 분석 연계 시스템(DataHub)을 구축하고, 인증·비식별화·데이터 파이프라인까지 포함한 통합 연구 데이터 플랫폼을 개발·운영",
    role: "풀스택 개발 및 운영·협업까지 전 과정 담당. 연구원·교수·병원 전산실과 직접 소통하며 요구사항 정의 및 장애 대응 주도",
    subProjects: [
      {
        name: "ResearchEx 2.5 / 3.0",
        description: "CDW 기반 임상 데이터 연구검색 플랫폼 개발 및 고도화",
        stack: ["Java", "Spring Boot", "Spring Security", "Angular", "React", "TypeScript", "DevExtreme", "PostgreSQL", "Oracle", "Vertica", "Nginx"],
        highlights: [
          {
            title: "룩업 구조 성능 개선",
            situation: "룩업 다중 반복 구조(O(N³))로 인해 데이터 증가 시 브라우저 프리징 발생. 일 평균 100명·최대 400명 연구자가 사용하는 운영 환경에서 응답성 저하 문제",
            solution: "Set 자료구조 기반으로 조회 구조 개선하여 O(N³) → O(N²) 시간복잡도 최적화. Chrome DevTools Performance 탭으로 병목 지점 특정 후 적용. Web-WAS 분리 및 Nginx Reverse Proxy 구조 도입으로 트래픽 처리 안정성 개선",
            outcome: "브라우저 프리징 완전 해소. 최대 400명 규모 안정 운영, 서버 이관 서비스 중단 없이 완료",
          },
          {
            title: "서버 및 데이터 이관",
            situation: "노후 서버 이관 필요. Nginx 리버스 프록시 재설계 및 PostgreSQL 데이터 이관을 동시에 수행해야 하는 상황. 이관 중 서비스 중단 시 연구자 업무 차질 발생",
            solution: "Nginx upstream 구조 재설계로 무중단 이관 계획 수립. PostgreSQL 데이터 이관 단독 수행. 이관 전·후 체크리스트 기반 정합성 검증",
            outcome: "서비스 중단 없이 이관 완료. 이관 후 응답 정합성 확인",
          },
        ],
      },
      {
        name: "ResearchIDP",
        description: "통합 인증 서버(SSO) — MSA 전환을 위한 중앙 집중식 IDP 설계·구축",
        stack: ["Java", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "Nginx"],
        highlights: [
          {
            title: "SSO 아키텍처 설계",
            situation: "모놀리식→MSA 전환 과정에서 서비스별 분산 인증으로 중복 로그인·세션 불일치 발생. 신규 서비스 연계 시마다 인증 개발 비용 중복 발생하는 구조",
            solution: "중앙 집중식 IDP를 독립 서비스로 설계. JWT Access/Refresh Token 이중 구조 도입, 각 MSA 서비스는 IDP에 토큰 검증만 위임. SDK 방식 연동 구조 구현으로 서비스 확장성 확보. OAuth2 유사 인증 흐름 설계 및 토큰 발급→전파→갱신→폐기 전 주기를 시퀀스 다이어그램으로 명세화",
            outcome: "서비스 간 중복 인증 제거. SDK 기반 신규 연계 시 개발 비용 절감. 인증 흐름 단일화로 사용자 로그인 편의성 향상",
          },
        ],
      },
      {
        name: "Elasticsearch / ELM",
        description: "Freetext 검색 시스템 및 전용 데이터 적재 모듈(ELM) 자체 개발",
        stack: ["Java", "Spring Boot", "Elasticsearch", "PostgreSQL"],
        highlights: [
          {
            title: "Logstash 대체 전용 적재 모듈 개발",
            situation: "Logstash 기반 적재 구조의 커스터마이징 한계·오류 제어 불가로 병리·서식 Freetext 대용량 데이터 적재 시 병목 발생. 적재 실패 시 재처리 수단 부재",
            solution: "Elasticsearch Bulk API 기반 전용 적재 모듈(ELM) 자체 개발. 적재 상태 관리·오류 제어·재처리 로직 직접 구현. RPS 기반 Bulk 사이즈 동적 조정, 적재 성공률·처리량·오류율 메트릭 수집 구조 설계",
            outcome: "대용량 적재 처리 효율 향상. 적재 과정 제어 가능성 확보. 운영 복잡도 감소 및 모듈 단독 배포·운영 가능 구조 확립",
          },
        ],
      },
      {
        name: "RidEx",
        description: "의료 데이터 비식별화 시스템 — 실환자번호→연구용 ID 변환",
        stack: ["Java", "Spring Boot", "Spring Security", "Spring Batch", "PostgreSQL", "Oracle", "VerticaDB", "Pentaho"],
        highlights: [
          {
            title: "대용량 비식별화 배치 처리 구현",
            situation: "임상 연구 데이터 활용 시 실환자번호 노출로 개인정보보호법 위반 위험. 수천만 건 규모 데이터의 일괄 비식별화 처리 체계 부재",
            solution: "Spring Batch 기반 대용량 비식별화 배치 처리 로직 구현. 연구과제번호 기반 가명화 매핑 규칙 설계. 헥사고날 아키텍처 적용으로 다중 DB(PostgreSQL, Oracle, Vertica) 연계 구조 개선 및 유지보수성 향상",
            outcome: "개인정보보호 요구사항 충족. 배치 기반 안정적 대용량 처리 체계 확립. 헥사고날 아키텍처 적용으로 확장성 확보",
          },
        ],
      },
      {
        name: "ExtractEx",
        description: "병리 데이터 파싱 시스템 고도화 — IBM Watson Discovery 대체",
        stack: ["Java", "Spring Boot", "PostgreSQL", "VerticaDB", "Nginx"],
        highlights: [
          {
            title: "정규식 기반 자체 파싱 엔진 개발",
            situation: "IBM Watson Discovery 기반 파싱 시스템(DiscoveryEx)의 Hit율 미흡 및 외부 API 비용·안정성 문제. AI 기반 파싱 성능 한계로 병리 데이터 구조화 정확도 부족",
            solution: "Watson Discovery 완전 대체하는 정규식 기반 자체 파싱 엔진 설계·개발. 병리 텍스트 구조화 알고리즘 직접 구현. CompletableFuture 병렬 처리 적용으로 TPD 기준 적재 처리량 향상",
            outcome: "파싱 Hit율 97% 달성. 적재 처리 시간 단축. 외부 API 의존도 완전 제거로 운영 통제력 및 시스템 안정성 확보",
          },
        ],
      },
      {
        name: "Shuttle",
        description: "외부 기관 데이터 연계 자동화 — 인체자원은행(KBN, KOTRY) 연동",
        stack: ["Java", "Spring Boot", "VerticaDB"],
        highlights: [
          {
            title: "API 기반 데이터 송수신 자동화",
            situation: "인체자원은행(KBN, KOTRY)과의 데이터 연계가 수동 처리에 의존. 주기적 송수신 오류 발생 시 원인 추적 불가, 인적 오류로 인한 데이터 누락 위험",
            solution: "외부 기관 연계를 위한 API 기반 자동 송수신 시스템 설계·구현. 오류 처리·재처리 로직 및 전송 결과 로깅 구현. VerticaDB 기반 데이터 추출 및 전송 데이터 가공 처리",
            outcome: "수동 처리 자동화로 인적 오류 감소. 주기적 안정적 외부 기관 연계 체계 구축",
          },
        ],
      },
      {
        name: "DataHub",
        description: "데이터 분석 연계 시스템 — JupyterHub(Python, R) 환경 연동",
        stack: ["Java", "Spring Boot", "Docker"],
        highlights: [
          {
            title: "연구 데이터 분석 환경 연계 구조 구축",
            situation: "ResearchEx에서 생성된 연구 결과 데이터(xlsx, csv)를 JupyterHub 분석 환경으로 전달하는 연계 구조 부재. 연구자가 직접 분석 도구를 사용할 수 없는 환경",
            solution: "ResearchEx 결과 데이터를 JupyterHub 환경으로 전달하는 데이터 연계 시스템 개발·유지보수. Docker 기반 분석 환경 분리 운영으로 서비스·분석 환경 간 독립성 확보",
            outcome: "연구 데이터 활용성 향상. 서비스·분석 환경 분리를 유지하면서 안정적 데이터 전달 구조 운영",
          },
        ],
      },
      {
        name: "DW 팀 협업",
        description: "데이터 파이프라인 운영 및 Tableau 시각화 — VerticaDB·MSSQL·Oracle",
        stack: ["VerticaDB", "MSSQL", "Oracle", "Tableau", "Pentaho", "TOAD"],
        highlights: [
          {
            title: "데이터 파이프라인 운영 및 시각화 개선",
            situation: "DW 환경 데이터 적재 프로시저 오류 및 정합성 이슈로 분석 환경 신뢰성 저하. Tableau 시각화 가독성 문제로 운영 데이터 활용성 부족",
            solution: "데이터 적재 프로시저 수정·유지보수 및 정기/비정기 적재 모니터링·장애 대응 수행. 데이터 정합성 검증 및 운영 이슈 분석으로 품질 관리. Tableau 대시보드 및 신규 지표 설계 반영",
            outcome: "데이터 품질 유지 및 안정적 분석 환경 운영. Tableau 기반 시각화 개선으로 데이터 활용성 및 리포트 가독성 향상",
          },
        ],
      },
    ],
    metrics: [
      { label: "다기관 병원", value: "12개" },
      { label: "임상 데이터", value: "최대 60억 건" },
      { label: "파싱 Hit율", value: "97%" },
      { label: "아키텍처", value: "MSA 전환" },
      { label: "월 사용자", value: "400~500명" },
      { label: "세부 프로젝트", value: "8개" },
    ],
    stack: ["Java", "Spring Boot", "Spring Security", "Spring Batch", "Elasticsearch", "React", "Angular", "TypeScript", "DevExtreme", "PostgreSQL", "Oracle", "Vertica", "Nginx", "Docker", "Python", "Tableau"],
    status: "구축 완료",
  },
  {
    seq: 2,
    name: "ResearchEx 2.5",
    period: "2021 - 2026",
    company: "주식회사플랜잇스퀘어(PLANITSQUARE Inc.)",
    summary: "CDW 기반 임상 데이터 연구검색 시스템 — 서울대병원 외 9개 기관 전담 운영",
    role: "풀스택 개발 및 운영·협업까지 전 과정을 담당",
    highlights: [
      {
        title: "룩업 자동 빌드 시스템 구축",
        situation: "룩업 데이터가 소스코드에 하드코딩되어 있어 변경 시마다 재배포 필요, 운영 중 긴급 수정이 불가능한 구조",
        solution: "DB 기반 자동 관리 구조로 전환, 룩업 자동 빌드 시스템 구축. 변경 이력을 로그로 추적하고 빌드 타임 메트릭으로 운영 모니터링",
        outcome: "재배포 없이 실시간 룩업 운영 가능, 긴급 대응 시간 단축",
      },
      {
        title: "웹 보안 취약점 점검·보완",
        situation: "웹 취약점 점검에서 인증·권한·입력값 검증 미비 항목 발견, 운영 환경 보안 안정성 위협",
        solution: "OWASP Top 10 기준 항목 전수 점검, Spring Security 인증·인가 설정 보완. SQL Injection·XSS 방어 로직 및 입력값 검증 필터 적용",
        outcome: "보안 점검 항목 전수 통과, 운영 환경 보안 안정성 확보",
      },
      {
        title: "9개 기관 동시 전담 운영",
        situation: "9개 병원의 기관별 환경 차이(DB 스키마, 네트워크, 데이터 구조)로 인해 장애 대응 복잡도 높음, 현업 사용자의 즉각 대응 요구",
        solution: "현업 사용자 1:1 직통 협업 체계 구축, 기관별 이슈 트래킹 및 장애 로그 분석 기반 신속 대응. 기관별 설정 차이를 추상화한 운영 구조 설계",
        outcome: "9개 기관 동시 전담 운영, 장애 대응 평균 처리 시간 단축, 사용자 만족도 유지",
      },
    ],
    metrics: [
      { label: "다기관 병원", value: "9개" },
      { label: "사용자 1:1 대응", value: "현업 직통" },
      { label: "보안 점검", value: "전수 통과" },
    ],
    stack: ["Java", "Spring Boot", "Spring Security", "DevExtreme", "Angular", "TypeScript", "Oracle", "MsSQL", "Tomcat9"],
    status: "구축 완료",
  },
  {
    seq: 3,
    name: "한화생명 IMD 포탈 시스템",
    period: "2022",
    company: "주식회사플랜잇스퀘어(PLANITSQUARE Inc.)",
    summary: "금융 데이터를 배치 기반으로 적재·관리하는 내부 업무 포털 개발",
    role: "금융 데이터 배치 시스템 설계 및 개발, 데이터 적재·운영·장애 대응 담당",
    highlights: [
      {
        title: "금융 성과평가 배치 시스템 구축",
        situation: "성과평가 데이터 수동 처리로 집계 오류 및 지연 발생, 일일 금융 데이터 처리 자동화 부재",
        solution: "Spring Batch 기반 일일 배치 파이프라인 설계·개발. TPD 기준 성과·펀드·유가증권 데이터 자동 처리, 배치 실패 시 알림·재처리 로직 적용. 배치 처리량·실패율 메트릭 수집",
        outcome: "일일 유가증권·펀드 데이터 자동 처리, 배치 실패율 최소화, 수동 처리 오류 제거",
      },
      {
        title: "운영 펀드 매핑 및 데이터 정합성 확보",
        situation: "금융 데이터 간 매핑 오류로 성과 집계 불일치 발생, 데이터 정합성 검증 체계 부재",
        solution: "운영 펀드 매핑 로직 구현, 적재 전·후 데이터 정합성 검증 로직 적용. 불일치 데이터 로그로 추적 가능한 구조 설계",
        outcome: "금융 데이터 정합성 확보, 집계 오류 제거",
      },
      {
        title: "일일 동향 조회 내부 포털 개발",
        situation: "금융 지표를 실시간에 가깝게 확인할 수 있는 내부 포털 부재, 담당자별 수동 조회로 업무 비효율",
        solution: "일일 배치 적재 + 조회 API 개발로 내부 업무 포털 구축. API 응답시간 모니터링 설계, p99 기준 응답 지연 임계치 설정",
        outcome: "TPD 기준 일일 배치 완료 후 지표 조회 응답시간 1초 이내, 담당자 업무 효율 개선",
      },
    ],
    metrics: [
      { label: "일일 배치 처리", value: "자동화" },
      { label: "데이터 정합성", value: "검증 체계" },
      { label: "조회 응답시간", value: "p99 1초 이내" },
    ],
    stack: ["Java", "Spring Boot", "Spring Security", "Spring Batch", "Spring Data JPA", "JHipster", "React", "TypeScript", "PostgreSQL", "MsSQL"],
    status: "구축 완료",
  },
]

function HighlightRow({ item }: { item: Highlight }) {
  return (
    <div className="rounded-xl border border-border bg-muted/40 overflow-hidden">
      <div className="px-5 py-3 border-b border-border bg-muted/60">
        <p className="text-sm font-bold text-foreground">{item.title}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
        <div className="px-5 py-4 space-y-1.5">
          <span className="inline-block text-[11px] font-bold tracking-wide text-yellow-700 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded-full px-2 py-0.5">
            상황
          </span>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.situation}</p>
        </div>
        <div className="px-5 py-4 space-y-1.5">
          <span className="inline-block text-[11px] font-bold tracking-wide text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 rounded-full px-2 py-0.5">
            해결
          </span>
          <p className="text-sm text-muted-foreground leading-relaxed">{item.solution}</p>
        </div>
        <div className="px-5 py-4 space-y-1.5">
          <span className="inline-block text-[11px] font-bold tracking-wide text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-full px-2 py-0.5">
            수치
          </span>
          <p className="text-sm font-medium text-foreground leading-relaxed">{item.outcome}</p>
        </div>
      </div>
    </div>
  )
}

function SubProjectPanel({ sub }: { sub: SubProject }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-muted/40 transition-colors cursor-pointer"
      >
        <div className="space-y-1.5">
          <p className="text-sm font-bold text-foreground">{sub.name}</p>
          <p className="text-xs text-muted-foreground">{sub.description}</p>
          <div className="flex flex-wrap gap-1">
            {sub.stack.map((t) => (
              <Badge key={t} variant="secondary" className="text-[10px] px-1.5 py-0 bg-primary/8 text-primary">
                {t}
              </Badge>
            ))}
          </div>
        </div>
        <div className="ml-4 flex-shrink-0 text-muted-foreground">
          {open ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>

      {open && (
        <div className="border-t border-border px-5 py-4 space-y-3 bg-muted/20">
          {sub.highlights.map((h) => (
            <HighlightRow key={h.title} item={h} />
          ))}
        </div>
      )}
    </div>
  )
}

export const CompanyProjects = forwardRef<HTMLElement, CompanyProjectsProps>((props, ref) => {
  return (
    <section
      ref={ref}
      id="company-projects"
      className="py-20 px-4 bg-muted/20 scroll-mt-24"
      {...props}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 space-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Company Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">실무 프로젝트</h2>
          <p className="text-sm text-muted-foreground mt-1">상황, 해결, 수치로 정리한 실무 프로젝트입니다.</p>
        </div>

        <div className="grid gap-4">
          {companyProjects
            .slice()
            .sort((a, b) => a.seq - b.seq)
            .map((project) => (
            <Card
              key={project.name}
              className="border-border/70 bg-card/95 p-6 md:p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="space-y-6">
                {/* 헤더 */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="space-y-1">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground">{project.name}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground">{project.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm">
                    <Badge variant="secondary" className="text-xs">{project.status}</Badge>
                    <span className="text-primary font-medium">{project.period}</span>
                  </div>
                </div>

                <p className="text-sm md:text-base text-foreground/80 leading-relaxed">{project.summary}</p>

                <div className="space-y-1">
                  <p className="text-xs md:text-sm font-semibold text-foreground">담당 역할</p>
                  <p className="text-xs md:text-sm text-foreground/70">{project.role}</p>
                </div>

                {/* 세부 프로젝트 (서울대병원) */}
                {project.subProjects && project.subProjects.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-xs md:text-sm font-semibold text-foreground">세부 프로젝트</p>
                    <div className="space-y-2">
                      {project.subProjects.map((sub) => (
                        <SubProjectPanel key={sub.name} sub={sub} />
                      ))}
                    </div>
                  </div>
                )}

                {/* 일반 하이라이트 (ResearchEx 2.5, 한화생명) */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="space-y-3">
                    <p className="text-xs md:text-sm font-semibold text-foreground">핵심 작업</p>
                    <div className="space-y-3">
                      {project.highlights.map((item) => (
                        <HighlightRow key={item.title} item={item} />
                      ))}
                    </div>
                  </div>
                )}

                {/* Impact + Stack */}
                <div className="grid gap-3 md:grid-cols-2">
                  <div className="rounded-lg border border-border bg-muted p-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Impact</p>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="rounded-md bg-card border border-border p-2">
                          <p className="text-sm font-bold text-foreground">{metric.value}</p>
                          <p className="text-[10px] text-muted-foreground mt-0.5">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-border bg-muted p-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2">Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-[11px] bg-card text-secondary-foreground border border-border">
                          {tag}
                        </Badge>
                      ))}
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
