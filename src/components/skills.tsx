import { Badge } from "./ui/badge"
import { Card } from "./ui/card"

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Angular", "css", "JavaScript", "Material UI", "DevExtreme"],
  },
  {
    category: "Backend",
    skills: ["Java", "Elastic Search", "Nginx", "JPA", "Spring", "SpringBoot", "SpringSecurity", "PostgreSQL", "Oracle", "MySQL", "MSSQL", "VERTICA"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Docker", "Linux", "Tableau", "Cursor AI", "V0", "NotebookLM", "Google AI Studio", "Codex", "Spline"],
  },
  {
    category: "Currently Exploring",
    skills: ["Python", "Flutter", "Dart", "Kafka", "MSA", "DDD", "AWS"],
  }
]

export function Skills() {
  return (
    <section id="skills" data-pdf-section="true" className="print-section print-section-start py-20 px-4 bg-muted/30 scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          <span className="text-primary">Skills</span> & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card key={category.category} className="p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">{category.category}</h3>
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
