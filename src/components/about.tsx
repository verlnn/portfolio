import { Card } from "./ui/card"

export function About() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-primary">About</span> Me
        </h2>

        <Card className="p-8 md:p-12 bg-card/50 backdrop-blur border-primary/10">
          <div className="space-y-6 text-lg leading-relaxed">
            <p className="text-foreground/90">
              저는 사용자 경험을 최우선으로 생각하는 풀스택 개발자입니다. 깨끗하고 효율적인 코드를 작성하며, 최신 기술
              트렌드를 빠르게 학습하고 적용하는 것을 즐깁니다.
            </p>
            <p className="text-foreground/90">
              React, Next.js, TypeScript를 주로 사용하며, 사용자 인터페이스 디자인과 백엔드 아키텍처 모두에 관심이
              많습니다. 끊임없이 배우고 성장하며, 팀과 함께 더 나은 제품을 만들어가는 것을 목표로 합니다.
            </p>
            <p className="text-foreground/90">
              협업과 소통을 중요하게 생각하며, 문제 해결 과정에서 창의적인 접근을 시도하는 것을 좋아합니다.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
