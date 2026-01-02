import { Badge } from "./ui/badge"
import { Card } from "./ui/card"

const experiences = [
  {
    period: "2023 - 현재",
    title: "시니어 프론트엔드 개발자",
    company: "Tech Company",
    description: "React와 Next.js를 활용한 대규모 웹 애플리케이션 개발 및 아키텍처 설계를 담당하고 있습니다.",
    tags: ["React", "Next.js", "TypeScript", "TailwindCSS"],
  },
  {
    period: "2021 - 2023",
    title: "프론트엔드 개발자",
    company: "Startup Inc.",
    description: "스타트업에서 다양한 프로젝트를 진행하며 풀스택 개발 경험을 쌓았습니다.",
    tags: ["Vue.js", "Node.js", "MongoDB", "AWS"],
  },
  {
    period: "2019 - 2021",
    title: "주니어 개발자",
    company: "Digital Agency",
    description: "웹사이트 및 웹 애플리케이션 제작에 참여하며 개발 기초를 다졌습니다.",
    tags: ["HTML", "CSS", "JavaScript", "jQuery"],
  },
]

export function Experience() {
  return (
    <section className="py-20 px-4 bg-muted/30">
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
