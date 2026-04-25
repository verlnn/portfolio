import { Badge } from "./ui/badge"
import { Card } from "./ui/card"

const experiences = [
  {
    period: "2021 - 2026",
    title: "백앤드 개발자",
    company: "주식회사플랜잇스퀘어(PLANITSQUARE Inc.)",
    description: "백앤드, 프론트앤드, DB작업을 같이 병행하며 여러 병원들에서 주 솔루션들을 담당하였으며 운영 및 개발을 맡았습니다.",
    tags: ["Java", "Spring Boot", "Elasticsearch", "React", "Angular", "TypeScript", "Linux", "Nginx", "VERTICA", "PostgreSQL", "Etc..."],
  },
]

export function Experience() {
  const summary = [
    { label: "총 경력", value: "4년+" },
    { label: "도메인", value: "의료 · 금융" },
    { label: "운영 경험", value: "다기관 서비스 전담" },
    { label: "역할 키워드", value: "백엔드 · 운영 · 협업" },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Experience
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">실무</span> 경력 요약
          </h2>
          <p className="text-muted-foreground">
            운영 중심의 실무 경험과 역할 범위를 요약합니다.
          </p>
        </div>

        <div className="mb-10 grid gap-4 md:grid-cols-4">
          {summary.map((item) => (
            <Card key={item.label} className="p-4 text-center border-border/70 bg-card/90">
              <p className="text-sm text-muted-foreground">{item.label}</p>
              <p className="text-lg font-semibold">{item.value}</p>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 md:p-8 hover:border-primary/30 transition-colors">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="md:w-48 flex-shrink-0">
                  <p className="text-sm font-medium text-primary">{exp.period}</p>
                </div>

                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                  </div>

                  <p className="text-foreground/80 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
