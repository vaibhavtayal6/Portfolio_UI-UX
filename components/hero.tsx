"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, Github, Linkedin, Mail } from "lucide-react"
import { ScrollFade } from "@/components/scroll-fade"

const projects = [
  {
    title: "Neuro Pilot",
    description: "AI-powered aviation analytics platform",
    tech: ["Python", "Groq", "Pandas AI"],
  },
  {
    title: "AI Resume Suite",
    description: "Hackathon-winning resume builder with ATS checker",
    tech: ["React", "Node.js", "AI"],
  },
  {
    title: "Face Recognition Platform",
    description: "Real-time analytics with pgvector",
    tech: ["Python", "Flask", "ML"],
  },
]

export function Hero() {
  const [currentProject, setCurrentProject] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    element?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-12 px-4 sm:px-6 lg:px-8 flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <ScrollFade>
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight">
                Hi — I'm{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Vaibhav
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">B.Tech Computer Science • AI & Full-Stack Engineer</p>
            </div>

            <p className="text-lg text-foreground/80 leading-relaxed max-w-lg">
              I build AI-driven automation and real-time systems that turn research into production. My work spans ML
              pipelines, LLM integrations, and scalable backend systems.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => handleNavClick("#projects")} className="gap-2">
                View Projects
                <ChevronRight className="w-4 h-4" />
              </Button>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline">
                  Download Resume
                </Button>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/vaibhavtayal6"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-input rounded-lg transition-colors text-primary hover:text-primary/80"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/vaibhavtayal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 hover:bg-input rounded-lg transition-colors text-primary hover:text-primary/80"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:vaibhavtayal8033@gmail.com"
                className="p-3 hover:bg-input rounded-lg transition-colors text-primary hover:text-primary/80"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </ScrollFade>

        {/* Right Column - Project Carousel */}
        <ScrollFade delay={200} direction="left" className="hidden lg:block">
          <div className="relative h-96 perspective">
            <div className="relative w-full h-full">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 transform ${
                    index === currentProject
                      ? "opacity-100 scale-100 translate-x-0"
                      : "opacity-0 scale-95 translate-x-full"
                  }`}
                >
                  <div className="h-full bg-card border border-border rounded-2xl p-6 space-y-4 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="h-40 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                      <span className="text-sm text-primary font-semibold">Project Preview</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProject(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentProject ? "bg-primary w-8" : "bg-border w-2"
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </ScrollFade>
      </div>
    </section>
  )
}
