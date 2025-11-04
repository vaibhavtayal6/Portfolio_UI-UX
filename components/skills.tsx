"use client"

import { ScrollFade } from "@/components/scroll-fade"

const skillCategories = [
  {
    category: "Programming",
    skills: ["Python", "C++", "JavaScript", "TypeScript", "SQL"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Flask", "FastAPI", "Node.js"],
  },
  {
    category: "Databases & Tools",
    skills: ["PostgreSQL", "pgvector", "Redis", "MongoDB"],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "Docker", "GitHub Actions", "Vercel"],
  },
  {
    category: "AI/ML",
    skills: ["LLM Integration", "Prompt Engineering", "Groq API", "Machine Learning"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <ScrollFade>
          <h2 className="text-4xl font-bold mb-12">Skills & Expertise</h2>
        </ScrollFade>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <ScrollFade key={category.category} delay={index * 80}>
              <div className="bg-background rounded-xl p-6 border border-border hover:border-primary/30 transition-colors h-full">
                <h3 className="font-bold text-lg mb-4 text-primary">{category.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-primary/10 text-primary text-sm font-medium rounded-full hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  )
}
