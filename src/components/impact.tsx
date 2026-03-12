import { Card } from "./ui/card"

const impactCases = [
  {
    title: "검색 성능 병목 개선",
    problem: "성능 병목으로 브라우저 프리징 문제가 발생",
    action: "Set 자료구조를 활용해 O(N×M)에서 O(N)으로 개선",
    result: "브라우저 프리징 문제 해결",
  },
  {
    title: "병리 파싱 정확도 및 적재 개선",
    problem: "IBM Watson Discovery 기반 병리 파싱 시스템 운영",
    action: "정규식 기반 자체 파싱 엔진으로 대체하고 CompletableFuture 병렬처리 적용",
    result: "Hit율 97% 정확도 개선 및 적재시간 개선",
  },
  {
    title: "룩업 관리 자동화",
    problem: "룩업 하드코딩 의존 구조로 운영 부담 발생",
    action: "DB 기반 자동 관리 구조 전환 및 룩업 자동 빌드 시스템 구축",
    result: "재배포 없이 운영 가능한 구조 확보",
  },
  {
    title: "Elasticsearch 적재 안정성 개선",
    problem: "Logstash 기반 적재 방식의 운영 한계",
    action: "Elasticsearch 적재 전용 모듈 자체 개발",
    result: "운영 한계 개선과 적재 안정성 확보",
  },
]

export function Impact() {
  return (
    <section id="impact" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Problem Solving
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">Engineering</span> Impact
          </h2>
          <p className="text-muted-foreground">
            무엇을 만들었는지가 아니라, 어떤 문제를 어떻게 해결했는지 보여줍니다.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {impactCases.map((item) => (
            <Card key={item.title} className="p-6 md:p-8 border-border/70 bg-card/80">
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <div className="space-y-3 text-sm md:text-base">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground">문제</p>
                  <p className="text-foreground/80">{item.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground">해결</p>
                  <p className="text-foreground/80">{item.action}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground">결과</p>
                  <p className="text-foreground/80">{item.result}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
