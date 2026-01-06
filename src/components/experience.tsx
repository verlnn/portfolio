import { Badge } from "./ui/badge"
import { Card } from "./ui/card"

const experiences = [
  {
    period: "2025 - ",
    title: "대학교",
    company: "한성대학교",
    description: "선취업 후진학 제도를 이용하여 주경야독하고 있습니다.",
    tags: ["선취업 후진학"],
  },
  {
    period: "2021 - ",
    title: "백앤드 개발자",
    company: "주식회사플랜잇스퀘어(PLANITSQUARE Inc.)",
    description: "백앤드, 프론트앤드, DB작업을 같이 병행하며 여러 병원들에서 주 솔루션들을 담당하였으며 운영 및 개발을 맡았습니다.",
    tags: ["Java", "Spring Boot", "React", "Angular", "TypeScript", "Linux", "Nginx", "VERTICA", "PostgreSQL", "Etc..."],
  },
  {
    period: "2022 - 2025",
    title: "병역특례",
    company: "Army",
    description: "병역특례 제도를 이용하여 군전역 마쳤습니다.",
    tags: ["산업기능요원", "병역특례"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-muted/30 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-primary">Experience</span>
        </h2>

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
