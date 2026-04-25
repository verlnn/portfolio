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
    <section id="experience" className="py-20 px-4 bg-background scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 space-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Experience</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">실무 경력</h2>
          <p className="text-sm text-muted-foreground mt-1">운영 중심의 실무 경험과 역할 범위를 요약합니다.</p>
        </div>

        <div className="mb-8 grid gap-3 grid-cols-2 md:grid-cols-4">
          {summary.map((item) => (
            <Card key={item.label} className="p-4 text-center border-border bg-card shadow-none">
              <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
              <p className="text-base font-bold text-foreground">{item.value}</p>
            </Card>
          ))}
        </div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 md:p-8 border-border bg-card shadow-none">
              <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                <div className="md:w-36 flex-shrink-0">
                  <p className="text-sm font-semibold text-primary">{exp.period}</p>
                </div>

                <div className="flex-1 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-foreground">{exp.title}</h3>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                  </div>

                  <p className="text-sm text-foreground/80 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs bg-secondary text-secondary-foreground">
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
