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
    <section id="skills" className="py-20 px-4 bg-background scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="mb-10 space-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Skills & Technologies</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">기술 스택</h2>
          <p className="text-sm text-muted-foreground mt-1">핵심 기술이 먼저 보이도록 정리하고, 학습 중인 영역은 분리했습니다.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillCategories.map((category) => (
            <Card key={category.category} className="p-5 border-border bg-card shadow-none">
              <div className="mb-3">
                <h3 className="text-sm font-bold text-foreground">{category.category}</h3>
                <p className="text-xs text-muted-foreground">{category.hint}</p>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs bg-secondary text-secondary-foreground"
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
