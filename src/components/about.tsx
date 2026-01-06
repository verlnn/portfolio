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
              안녕하세요. 협업을 통해 함께 고민하고 성장하는 백엔드 개발자 김민수입니다.
            </p>
            <p className="text-foreground/90">
              저는 저의 업무만큼이나 동료들의 업무와 고민도 중요하다고 생각합니다.
              동료들로부터 “덕분에 잘 해결했어.”, “항상 잘 챙겨줘서 고마워.”라는 말을 들을 때마다, 내가 조금 더 고민하고 한 발 더 움직인 시간이 헛되지 않았다는 보람을 느낍니다.
              이러한 경험은 자연스럽게 더 책임감 있게 일하게 만드는 원동력이 되었습니다.
            </p>
            <p className="text-foreground/90">
              업무를 대할 때는 단순히 빠르게 처리하거나, 완벽하다고 판단되는 지점에서 서둘러 마무리하는 방식을 선호하지 않습니다.
              사이드 이펙트를 최소화하는 것을 중요하게 생각하며, 기능을 구현하기 전에 요구사항과 동작을 테스트 코드로 먼저 정리하는 개발 방식을 지향합니다.
              API 명세서와 테스트 코드를 통해 업무의 맥락과 변경 이력을 기록·관리하는 과정을 중요하게 여기고,
              기능별·상황별 테스트를 통해 시간이 지나도 쉽게 흔들리지 않는 견고한 코드를 만들어 가고자 합니다.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
