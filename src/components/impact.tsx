import { Card } from "./ui/card"

const impactCases = [
  {
    title: "검색 성능 병목 개선",
    problem: "이중 반복문 + find() 결합 구조로 데이터 증가 시 브라우저 프리징 발생, 사용자 응답성 저하",
    action: "Set 자료구조로 변환하여 O(N×M) → O(N) 시간복잡도 개선, Chrome DevTools Performance 탭으로 병목 지점 특정",
    result: "브라우저 프리징 완전 해소, 대용량 데이터 조회 응답 정상화",
  },
  {
    title: "병리 파싱 정확도 97% 달성",
    problem: "IBM Watson Discovery 기반 병리 파싱 Hit율 미흡, 외부 API 의존으로 비용·안정성 문제",
    action: "정규식 기반 자체 파싱 엔진 구축, CompletableFuture 병렬 처리 적용. TPD 기준 처리량 메트릭 수집",
    result: "Hit율 97% 달성, 병렬 처리로 적재 시간 단축, 외부 API 의존 제거",
  },
  {
    title: "룩업 관리 자동화 (재배포 제로)",
    problem: "룩업 하드코딩 의존으로 변경 시마다 재배포 필요, 긴급 운영 대응 불가",
    action: "DB 기반 자동 관리 구조 전환 및 룩업 자동 빌드 시스템 구축, 변경 이력 로그 추적",
    result: "재배포 없이 실시간 운영 가능, 긴급 대응 시간 단축",
  },
  {
    title: "Elasticsearch 적재 안정성 확보",
    problem: "Logstash 기반 적재의 커스터마이징 한계 및 운영 복잡도로 인한 병목",
    action: "전용 적재 모듈 자체 개발, RPS 기반 Bulk 사이즈 동적 조정, 적재 성공률·처리량 메트릭 수집",
    result: "적재 안정성 확보, 운영 복잡도 감소, 모듈 독립 배포 가능",
  },
  {
    title: "방화벽 장애 무중단 복구",
    problem: "방화벽 오류로 개발 환경 DB 접근 전면 차단, 전체 프로젝트 개발 중단 위기",
    action: "Nginx Stream 모듈로 TCP 레벨 DB 트래픽 우회 구조 설계, 트레이스 로그로 연결 흐름 검증",
    result: "물리적 이동 없이 개발 환경 즉시 복구, 프로젝트 중단 없이 정상화",
  },
  {
    title: "서버 이관 (12개 기관 무중단)",
    problem: "노후 서버 이관 시 12개 기관 서비스 연속성 보장 및 Nginx·PostgreSQL 동시 이관 필요",
    action: "Nginx upstream 구조 재설계로 무중단 이관 계획, DB 이관 단독 수행. 이관 전·후 메트릭 비교로 정합성 검증",
    result: "12개 기관 서비스 중단 없이 이관 완료, 이관 후 응답 정합성 확인",
  },
]

export function Impact() {
  return (
    <section id="impact" className="py-20 px-4 bg-muted scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 space-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Problem Solving</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Engineering Impact</h2>
          <p className="text-sm text-muted-foreground mt-1">무엇을 만들었는지가 아니라, 어떤 문제를 어떻게 해결했는지 보여줍니다.</p>
        </div>

        <div className="space-y-3">
          {impactCases.map((item) => (
            <div key={item.title} className="rounded-xl border border-border bg-card overflow-hidden">
              <div className="px-5 py-3 border-b border-border bg-muted/40">
                <h3 className="text-sm font-bold text-foreground">{item.title}</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
                <div className="px-5 py-4 space-y-1.5">
                  <span className="inline-block text-[11px] font-bold tracking-wide text-yellow-700 dark:text-yellow-400 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-300 dark:border-yellow-700 rounded-full px-2 py-0.5">
                    상황
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.problem}</p>
                </div>
                <div className="px-5 py-4 space-y-1.5">
                  <span className="inline-block text-[11px] font-bold tracking-wide text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 border border-blue-300 dark:border-blue-700 rounded-full px-2 py-0.5">
                    해결
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.action}</p>
                </div>
                <div className="px-5 py-4 space-y-1.5">
                  <span className="inline-block text-[11px] font-bold tracking-wide text-green-700 dark:text-green-400 bg-green-100 dark:bg-green-900/30 border border-green-300 dark:border-green-700 rounded-full px-2 py-0.5">
                    수치
                  </span>
                  <p className="text-sm font-medium text-foreground leading-relaxed">{item.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
