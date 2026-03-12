import { Card } from "./ui/card"

const strengths = [
  {
    title: "문제 구조화와 해결",
    description:
      "동료 및 현업 사용자와 함께 문제의 원인을 정리하고, 재발하지 않는 방향으로 해결책을 제시합니다.",
  },
  {
    title: "운영 안정성 중심 설계",
    description:
      "단기적인 해결보다 장기적인 안정성과 운영 효율을 우선하며, 운영 환경에서 관리 가능한 코드를 지향합니다.",
  },
  {
    title: "명확한 정의와 테스트 기반",
    description:
      "요구사항과 예외 케이스를 먼저 정리하고, 테스트 코드와 API 명세를 기준으로 동작을 명확히 정의합니다.",
  },
  {
    title: "변경 가능성을 고려한 구조",
    description:
      "변경 이력과 의도를 코드와 문서로 남기고, 기능별·상황별 테스트로 흔들리지 않는 시스템을 설계합니다.",
  },
]

export function Strengths() {
  return (
    <section id="strengths" className="py-20 px-4 bg-muted/20 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Why Hire Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">Core</span> Strengths
          </h2>
          <p className="text-muted-foreground">
            프로젝트보다 먼저 확인해야 할, 실무 신뢰도를 만드는 핵심 역량입니다.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {strengths.map((item) => (
            <Card key={item.title} className="p-6 md:p-8 border-border/70 bg-card/90">
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
