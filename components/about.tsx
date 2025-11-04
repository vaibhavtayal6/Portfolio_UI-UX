import { ScrollFade } from "@/components/scroll-fade"
import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <ScrollFade>
          <h2 className="text-4xl font-bold mb-12">About Me</h2>
        </ScrollFade>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <ScrollFade>
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a B.Tech Computer Science student at MPSTME, NMIMS (Batch 2026) with a CGPA of 3.32/4.00. I
                specialise in applied AI, developer tooling, and end-to-end systems engineering.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Beyond academics, I've led the UAS NMIMS Drone Team as Captain, won multiple hackathons, and shipped
                ML-powered products. I'm passionate about turning complex research into production-ready systems that
                solve real problems.
              </p>

              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold">Highlights</h3>
                <ul className="space-y-3">
                  {[
                    "Captain, UAS NMIMS Drone Team",
                    "Hackathon Winner - AI Resume Suite",
                    "Top 5 at IIT Bombay Techfest",
                    "2nd Place - Boeing Aeromodelling",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 items-start">
                      <span className="text-primary font-bold text-lg">→</span>
                      <span className="text-foreground/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </ScrollFade>

          <ScrollFade delay={150}>
            <div className="flex justify-center lg:col-span-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-background rounded-2xl border border-border/50 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Image
                    src="/headshot.png"
                    alt="Vaibhav Tayal - Full Stack Engineer"
                    width={300}
                    height={400}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </ScrollFade>

          <div className="space-y-6">
            <ScrollFade delay={100}>
              <div className="bg-background rounded-xl p-6 border border-border">
                <h3 className="font-bold text-lg mb-4">Education</h3>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">B.Tech Computer Science</p>
                    <p className="text-sm text-muted-foreground">MPSTME, NMIMS University</p>
                    <p className="text-sm text-muted-foreground">2022 - 2026 • CGPA: 3.32/4.00</p>
                  </div>
                </div>
              </div>
            </ScrollFade>

            <ScrollFade delay={200}>
              <div className="bg-background rounded-xl p-6 border border-border">
                <h3 className="font-bold text-lg mb-4">Certifications</h3>
                <div className="space-y-2">
                  {["AWS Cloud Practitioner", "Oracle Cloud AI Foundations"].map((cert) => (
                    <p key={cert} className="flex items-center gap-2 text-sm text-foreground/80">
                      <span className="w-2 h-2 bg-primary rounded-full"></span>
                      {cert}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollFade>
          </div>
        </div>
      </div>
    </section>
  )
}
