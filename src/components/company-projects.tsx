import type { ComponentPropsWithoutRef } from "react"
import { forwardRef } from "react"

import { Badge } from "./ui/badge"
import { Card } from "./ui/card"

type Highlight = {
  title: string
  situation: string
  solution: string
  outcome: string
}

type CompanyProject = {
  seq: number
  name: string
  period: string
  company: string
  summary: string
  role: string
  highlights: Highlight[]
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
    summary: "서울대병원 의료·연구 솔루션 통합 포털 구축 프로젝트",
    role: "풀스택 개발 및 운영·협업까지 전 과정을 담당",
    highlights: [
      {
        title: "병리 파싱 엔진 자체 개발",
        situation: "IBM Watson Discovery 기반 병리 파싱 시스템의 Hit율 미흡, 외부 API 의존으로 비용·안정성 문제 발생",
        solution: "정규식 기반 자체 파싱 엔진으로 대체, CompletableFuture를 활용한 병렬 적재 처리 적용. TPD 기준 대용량 비정형 데이터 처리를 위해 스레드 풀 사이즈 튜닝 및 처리량 메트릭 수집",
        outcome: "Hit율 97% 달성, 병렬 처리로 적재 시간 단축, 외부 API 의존 제거",
      },
      {
        title: "Elasticsearch 적재 전용 모듈 자체 개발",
        situation: "Logstash 기반 적재 방식의 커스터마이징 한계와 운영 복잡도로 인해 대용량 Freetext 데이터 적재 시 병목 발생",
        solution: "Elasticsearch Bulk API 기반 전용 적재 모듈 자체 개발. RPS 기반 Bulk 사이즈 동적 조정 로직 구현, 적재 성공률·처리량·오류율 메트릭 수집 구조 설계",
        outcome: "적재 안정성 확보 및 운영 복잡도 감소, 모듈 단독 배포·운영 가능 구조 확립",
      },
      {
        title: "방화벽 장애 우회 구조 설계",
        situation: "방화벽 요청 커뮤니케이션 오류로 기존 개발 환경 DB 접근이 차단되어 전체 프로젝트 개발 중단 위기 발생",
        solution: "기존 서비스 서버에 Nginx Stream 모듈 구성, TCP 레벨 DB 트래픽 우회 연결 구조 설계. 트레이스 로그로 연결 흐름 확인 및 복구 검증",
        outcome: "물리적 이동 없이 기존 환경에서 DB 접근 재개, 개발 중단 없이 프로젝트 정상화",
      },
      {
        title: "검색 성능 병목 개선 (O(N×M) → O(N))",
        situation: "이중 반복문 + find() 결합 구조로 인해 데이터 증가 시 브라우저 프리징 발생, 사용자 응답성 저하",
        solution: "Set 자료구조 변환으로 상수 시간 조회 구현, O(N×M) → O(N) 시간복잡도 개선. Chrome DevTools Performance 탭으로 병목 지점 특정 후 적용",
        outcome: "브라우저 프리징 완전 해소, 대용량 데이터 조회 시 응답 정상화",
      },
      {
        title: "서버 이관 총괄 (Nginx + PostgreSQL)",
        situation: "노후 서버 이관 필요, Nginx 리버스 프록시 구조 재설계 및 PostgreSQL 이관을 동시에 수행해야 하는 상황",
        solution: "Nginx upstream 구조 재설계로 서비스 무중단 이관 계획 수립, PostgreSQL 데이터 이관 단독 수행. 이관 전 체크리스트 기반 메트릭 비교로 정합성 검증",
        outcome: "12개 기관 서비스 중단 없이 이관 완료, 이관 후 응답 정합성 확인",
      },
      {
        title: "ResearchIDP — 모놀리식 → MSA 전환을 위한 SSO 설계",
        situation: "모놀리식 구조의 솔루션을 MSA로 전환하는 과정에서, 분리된 각 서비스(연구검색·포털·관리)가 독립적으로 배포되면서도 하나의 세션·권한 체계를 공유해야 하는 서비스 간 인증 연계 문제 발생. 서비스마다 개별 인증을 구현하면 세션 불일치·권한 파편화·중복 로그인 문제가 불가피한 상황",
        solution: "ResearchIDP를 독립 인증 서비스(Identity Provider)로 설계. JWT 기반 Access/Refresh Token 이중 구조를 도입하고, 각 MSA 서비스는 IDP에 토큰 검증만 위임하는 구조로 분리. 서비스 간 SSO 흐름을 시퀀스 다이어그램으로 설계하여 토큰 발급→전파→갱신→폐기 전 주기를 명세화. 권한 클레임을 JWT 페이로드에 포함시켜 서비스별 API Gateway 레벨에서 인가 판단이 가능하도록 설계, 중앙 IDP 단일 장애 시 토큰 캐시 기반 폴백 구조도 함께 고려",
        outcome: "MSA 전환 후 모든 서비스가 단일 IDP를 통해 인증 연계, 중복 로그인 제거. 서비스 추가 시 IDP 연동만으로 인증·권한 확장 가능한 구조 확립",
      },
      {
        title: "모놀리식 → MSA 전환",
        situation: "단일 배포 단위의 모놀리식 구조로 인해 특정 기능 변경 시 전체 서비스 재배포 필요, 기능별 독립 확장 불가. 데이터베이스와 비즈니스 로직이 강하게 결합되어 있어 서비스 분리 시 트랜잭션 경계 설계가 선결 과제",
        solution: "도메인 경계(연구검색·인증·포털·관리)를 기준으로 서비스 분리 설계. 서비스 간 동기 호출은 REST API, 비동기 이벤트 전파는 Kafka로 분리하여 결합도를 최소화. DB도 서비스별로 분리하고 크로스 도메인 조회는 이벤트 소싱 방식으로 처리, 분산 트랜잭션은 Saga 패턴으로 설계하여 서비스 간 데이터 정합성 보장",
        outcome: "서비스별 독립 배포 가능, 특정 서비스 장애 시 타 서비스 영향 최소화. 연구검색 서비스 단독 스케일아웃 구조 확립",
      },
      {
        title: "Kafka 기반 장애 대응 모니터링 시스템 구축",
        situation: "MSA 전환 후 서비스 간 이벤트 유실 및 장애 전파 추적이 어려워짐. RabbitMQ는 메시지가 소비되면 휘발되어 장애 발생 시 원인 추적 및 재처리가 불가능하고, 다수 컨슈머가 동일 이벤트를 구독해야 하는 구조에서 팬아웃 한계 발생",
        solution: "Kafka 도입으로 메시지 영속성 확보(디스크 기반 보존). 서비스별 Consumer Group으로 동일 이벤트를 독립 소비하는 구조 설계. Micrometer + Prometheus로 Consumer Lag·처리량·에러율 메트릭 수집, Grafana 대시보드로 실시간 시각화. 분산 추적을 위해 Trace ID를 Kafka 메시지 헤더에 전파하여 이벤트 흐름을 로그와 연계, 장애 발생 시 Trace ID 기반으로 전체 이벤트 체인 역추적 가능하도록 구성",
        outcome: "메시지 유실 없이 장애 후 재처리 가능, Consumer Lag 급증 시 알림으로 선제 대응. Trace ID로 MSA 전체 이벤트 흐름 추적, 장애 원인 분석 시간 단축",
      },
    ],
    metrics: [
      { label: "다기관 병원", value: "12개" },
      { label: "임상 데이터", value: "최대 60억 건" },
      { label: "파싱 Hit율", value: "97%" },
      { label: "아키텍처", value: "MSA 전환" },
      { label: "메시지 영속성", value: "Kafka" },
      { label: "인증 구조", value: "SSO·IDP" },
    ],
    stack: ["Java", "Spring Boot", "Spring Security", "Spring Batch", "Kafka", "Elasticsearch", "React", "TypeScript", "DevExtreme", "PostgreSQL", "Oracle", "Vertica", "Nginx", "Prometheus", "Grafana"],
    status: "구축 완료",
  },
  {
    seq: 2,
    name: "ResearchEx 2.5",
    period: "2021 - 2026",
    company: "주식회사플랜잇스퀘어(PLANITSQUARE Inc.)",
    summary: "CDW 기반 임상 데이터 연구검색 시스템 개발 및 운영",
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

export const CompanyProjects = forwardRef<HTMLElement, CompanyProjectsProps>((props, ref) => {
  return (
    <section
      ref={ref}
      id="company-projects"
      className="py-20 px-4 bg-muted/20 scroll-mt-24"
      {...props}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Company Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">실무</span> 프로젝트
          </h2>
          <p className="text-muted-foreground">
            상황, 해결, 수치로 정리한 실무 프로젝트입니다.
          </p>
        </div>

        <div className="grid gap-4">
          {companyProjects
            .slice()
            .sort((a, b) => a.seq - b.seq)
            .map((project) => (
            <Card
              key={project.name}
              className="relative overflow-hidden border-border/70 bg-card/95 p-6 md:p-8 shadow-[0_12px_40px_rgba(15,23,42,0.08)]"
            >
              <div className="pointer-events-none absolute -top-24 right-0 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />

              <div className="space-y-6">
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

                <div className="space-y-1">
                  <p className="text-xs md:text-sm font-semibold text-foreground">담당 역할</p>
                  <p className="text-xs md:text-sm text-foreground/70">{project.role}</p>
                </div>

                <div className="space-y-3">
                  <p className="text-xs md:text-sm font-semibold text-foreground">핵심 작업</p>
                  <div className="grid gap-3 md:grid-cols-2">
                    {project.highlights.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-xl border border-border/60 bg-muted/30 p-4 space-y-2"
                      >
                        <p className="text-sm font-semibold text-foreground">{item.title}</p>
                        <div className="space-y-1 text-xs text-foreground/70">
                          <div className="flex items-start gap-2">
                            <span className="mt-0.5 flex-shrink-0 rounded bg-yellow-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-yellow-600 dark:text-yellow-400">상황</span>
                            <span className="flex-1">{item.situation}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="mt-0.5 flex-shrink-0 rounded bg-blue-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-blue-600 dark:text-blue-400">해결</span>
                            <span className="flex-1">{item.solution}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="mt-0.5 flex-shrink-0 rounded bg-green-500/20 px-1.5 py-0.5 text-[10px] font-semibold text-green-600 dark:text-green-400">수치</span>
                            <span className="flex-1">{item.outcome}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3 md:grid-cols-2">
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
})
