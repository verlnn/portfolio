import { Card } from "./ui/card"
import { ScrollArea } from "./ui/scroll-area"

export function About() {
  const summaryPoints = [
    "운영 장애 상황에서 네트워크 우회 구조를 설계해 개발 중단 위기를 해결",
    "데이터 처리 로직을 O(N×M)에서 O(N)으로 개선해 성능 병목을 해소",
    "테스트 코드와 API 명세 기반 개발로 사이드 이펙트를 최소화",
  ]

  return (
    <section id="about" className="py-20 px-4 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Resume Summary
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">자기소개</span> 요약
          </h2>
          <p className="text-muted-foreground">
            문제 해결 방식과 운영 중심의 철학을 간결하게 정리했습니다.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Card className="p-8 md:p-10 bg-card/90 border-border/70">
            <h3 className="text-xl font-semibold mb-6">핵심 요약</h3>
            <ul className="space-y-4 text-sm md:text-base text-foreground/80">
              {summaryPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                  <span className="flex-1">{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-2xl border border-border/70 bg-muted/40 p-4 text-sm text-muted-foreground">
              단순히 동작하는 기능이 아니라, 운영 환경에서 안정적으로 관리 가능한 시스템을 만드는 백엔드 개발자를 지향합니다.
            </div>
          </Card>

          <Card className="p-0 bg-card/90 backdrop-blur border-border/70">
            <div className="px-8 pt-8 md:px-10 md:pt-10">
              <h3 className="text-xl font-semibold">자기소개</h3>
            </div>
            <ScrollArea className="h-[360px] px-8 pb-8 md:h-[420px] md:px-10 md:pb-10">
              <div className="space-y-6 text-base md:text-lg leading-relaxed">
                <p className="text-foreground/90">
                  4년차 Java 백엔드 개발자로 대규모 의료 데이터 환경에서 시스템 운영과 문제 해결을 경험해 왔습니다. 최소 수천만 건에서 최대
                  60억 건 규모의 데이터를 처리하는 시스템을 다루며 서비스 운영 과정에서 발생하는 장애 대응, 성능 개선, 시스템 안정화 경험을
                  쌓았습니다. Sybase, Vertica, PostgreSQL, Oracle, MS SQL Server 등 다양한 DB 환경에서 데이터를 조회하고 연계하는
                  시스템을 운영하며 실제 서비스 환경에서 발생하는 문제를 구조적으로 분석하고 해결하는 역할을 수행해 왔습니다.
                </p>
                <p className="text-foreground/90">
                  운영 장애 상황에서 네트워크 우회 구조를 설계해 개발 중단 위기를 해결한 경험이 있습니다. 신규 DB 접근을 위한 방화벽 요청
                  과정에서 커뮤니케이션 오류가 발생해 기존 개발 환경의 DB 접근 권한까지 차단되는 문제가 발생했습니다. 이로 인해 개발자들이
                  DB에 접속할 수 없게 되었고 프로젝트 개발이 중단될 위험이 있었습니다. 문제를 해결하기 위해 기존 서비스용 서버를 활용하는
                  방향으로 접근했습니다. 해당 서버에 Nginx Reverse Proxy와 Stream 모듈을 구성하여 DB 트래픽을 우회 연결하는 구조를
                  설계했고, 개발자들이 물리적으로 다른 자리로 이동하지 않고도 기존 환경에서 DB에 접근할 수 있도록 개발 환경을 복구했습니다.
                  그 결과 개발 중단 없이 프로젝트를 계속 진행할 수 있었고, 운영 환경과 네트워크 구조를 함께 고려한 문제 해결 경험을 얻을 수
                  있었습니다.
                </p>
                <p className="text-foreground/90">
                  또한 데이터 처리 로직에서 발생하던 성능 문제를 개선한 경험이 있습니다. 기존 코드에서는 이중 반복문과 find() 메서드가 결합된
                  구조로 인해 데이터 양이 많아질수록 브라우저 프리징이 발생했습니다. 로직을 분석해 병목 지점을 확인한 뒤 검색 대상 데이터를
                  Set 자료구조로 변환하여 상수 시간 조회가 가능하도록 변경했습니다. 이를 통해 데이터 처리 로직의 시간복잡도를 O(N×M)에서
                  O(N)으로 개선했고, 브라우저 프리징 문제를 해결할 수 있었습니다. 이 경험을 통해 자료구조 선택이 실제 서비스 성능에 큰 영향을
                  미친다는 점을 실무에서 체감할 수 있었습니다.
                </p>
                <p className="text-foreground/90">
                  실무에서는 Sybase, Vertica, PostgreSQL, Oracle, MS SQL Server 등 다양한 DB 환경을 다루며 의료 데이터를 처리하는
                  시스템을 운영해 왔습니다. 데이터 규모는 검사 및 진단 데이터에 따라 차이가 있었지만 최소 수천만 건에서 최대 약 60억 건
                  수준까지 경험했으며, 서울대병원 환경 기준으로 월 약 400~500명의 사용자가 접속하는 서비스를 운영하며 데이터 조회, 연계,
                  처리 과정에서 안정적인 시스템 운영을 지원했습니다.
                </p>
                <p className="text-foreground/90">
                  개발 과정에서는 기능 구현 이전에 요구사항과 예외 케이스를 먼저 정리하고 API 명세와 테스트 코드를 기준으로 동작을 정의하는
                  방식을 적용해 왔습니다. 이를 통해 기능 변경 시 영향 범위를 명확하게 파악할 수 있었고 기존 기능의 안정성을 유지하면서 새로운
                  기능을 확장할 수 있었습니다. 또한 코드와 문서에 변경 의도와 구조를 남겨 협업 과정에서도 이해하기 쉬운 코드를 유지하려고
                  노력해 왔습니다.
                </p>
                <p className="text-foreground/90">
                  앞으로도 데이터 처리, 시스템 구조 설계, 운영 환경을 함께 고려하는 백엔드 개발자로서 실제 운영 환경에서 안정적으로 동작하는
                  시스템을 설계하고 개선하는 데 기여하고 싶습니다.
                </p>
              </div>
            </ScrollArea>
          </Card>
        </div>
      </div>
    </section>
  )
}
