import { Badge } from "./ui/badge"
import { Card } from "./ui/card"

const skillCategories = [
  {
    category: "Backend (Core)",
    hint: "실무 중심 기술",
    skills: ["Java", "Spring", "SpringBoot", "SpringSecurity", "JPA", "Elastic Search", "Nginx", "PostgreSQL", "Oracle", "MySQL", "MSSQL", "VERTICA"],
  },
  {
    category: "Frontend",
    hint: "서비스 화면 구축 경험",
    skills: ["React", "TypeScript", "Angular", "JavaScript", "css", "Material UI", "DevExtreme"],
  },
  {
    category: "Tools & Others",
    hint: "개발 및 운영 툴",
    skills: ["Git", "Docker", "Linux", "Tableau", "Cursor AI", "V0", "NotebookLM", "Google AI Studio", "Codex", "Spline"],
  },
  {
    category: "Currently Exploring",
    hint: "학습 및 확장 영역",
    skills: ["Python", "Flutter", "Dart", "Kafka", "MSA", "DDD", "AWS"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-muted/30 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Skills & Technologies
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-primary">기술</span> 스택
          </h2>
          <p className="text-muted-foreground">
            핵심 기술이 먼저 보이도록 정리하고, 학습 중인 영역은 분리했습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.category} className="p-6">
              <div className="mb-4 space-y-1">
                <h3 className="text-xl font-bold text-primary">{category.category}</h3>
                <p className="text-xs text-muted-foreground">{category.hint}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
