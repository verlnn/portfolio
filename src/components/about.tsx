import { Card } from "./ui/card"

export function About() {
  return (
    <section id="about" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-primary">About</span> Me
        </h2>

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-primary/10">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground/90">
              <span className="block">안녕하세요.</span>
              <span>협업을 통해 문제를 구조적으로 해결하고, 운영까지 책임지는 백엔드 개발자 김민수입니다.</span>
            </p>
            <p className="text-foreground/90">
              저는 개인의 성과만큼이나 팀과 서비스 전체의 흐름을 안정적으로 유지하는 것이 중요하다고 생각합니다.
              실제 업무에서는 동료 및 현업 사용자와의 협업 과정에서 문제의 원인을 함께 정리하고, 재발하지 않는 방향으로 해결책을 제시하는 역할을 주로 맡아왔습니다.
              그 과정에서 “덕분에 문제를 빠르게 정리할 수 있었다”, “운영 관점에서 많이 도움이 됐다”는 피드백을 받을 때 가장 큰 보람을 느낍니다.
            </p>
            <p className="text-foreground/90">
              개발에 있어서는 단기적인 해결보다 장기적인 안정성과 운영 효율을 우선합니다.
              기능 구현에 앞서 요구사항과 예외 케이스를 먼저 정리하고, 테스트 코드와 API 명세를 기준으로 동작을 명확히 정의하는 방식을 선호합니다.
              이를 통해 사이드 이펙트를 최소화하고, 이후 변경이나 확장이 발생하더라도 부담 없이 대응할 수 있는 구조를 만드는 것을 목표로 합니다.
            </p>
            <p className="text-foreground/90">
              또한 단순히 “동작하는 코드”에 그치지 않고, 운영 환경에서 실제로 관리 가능한 코드를 만드는 데에 집중해 왔습니다.
              변경 이력과 의도를 코드와 문서로 남기고, 기능별·상황별 테스트를 통해 시간이 지나도 쉽게 흔들리지 않는 시스템을 설계·개선해 나가고 있습니다.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
