"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import { ScrollFade } from "@/components/scroll-fade"

const projects = [
  {
    title: "Neuro Pilot",
    description: "AI-powered aviation analytics platform leveraging LLMs and data pipelines",
    tech: ["Python", "Groq LLMs", "Pandas AI", "Kaggle API"],
    image: "/aviation-dashboard.jpg",
    github: "https://github.com/snowxx456/Neural-Pilot",
    achievements: ["Real-time data analysis", "Scalable ML pipeline"],
  },
  {
    title: "AI Resume Suite",
    description: "Comprehensive resume builder with AI-powered ATS checker and skill analyzer",
    tech: ["React", "Node.js", "AI/ML", "Database"],
    image: "/resume-builder.jpg",
    github: "https://github.com/vaibhavtayal6/resume-builder",
    achievements: ["Hackathon Winner", "ATS Optimization"],
  },
  {
    title: "Face Recognition Analytics",
    description: "Real-time face recognition platform with pgvector integration for analytics",
    tech: ["Python", "MTCNN", "Flask", "pgvector", "PostgreSQL"],
    image: "/face-recognition.jpg",
    github: "https://github.com/vaibhavtayal6",
    achievements: ["Real-time processing", "Vector DB optimization"],
  },
  {
    title: "Payment Wallet System",
    description: "Secure payment wallet with transaction management and user authentication",
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    image: "/payment-wallet.jpg",
    github: "https://github.com/vaibhavtayal6/Paytm",
    achievements: ["Secure transactions", "Real-time updates"],
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollFade>
          <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>
        </ScrollFade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ScrollFade key={project.title} delay={index * 100}>
              <Card className="overflow-hidden hover:border-primary/50 transition-colors group h-full">
                <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm text-foreground/70">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-muted-foreground">Key Achievements:</p>
                    <ul className="text-xs text-foreground/70 space-y-1">
                      {project.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-2 items-start">
                          <span className="text-primary">→</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                        <Github className="w-4 h-4" />
                        Code
                      </Button>
                    </a>
                    <Button size="sm" variant="outline">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </ScrollFade>
          ))}
        </div>
      </div>
    </section>
  )
}
