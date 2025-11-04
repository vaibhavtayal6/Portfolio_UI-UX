import { Calendar, MapPin } from "lucide-react"
import { ScrollFade } from "@/components/scroll-fade"

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollFade>
          <h2 className="text-4xl font-bold mb-12">Experience</h2>
        </ScrollFade>

        <div className="space-y-8">
          <ScrollFade>
            <div className="border-l-2 border-primary pl-8 pb-8">
              <div className="flex gap-4 items-start">
                <div className="w-4 h-4 bg-primary rounded-full -ml-10.5 mt-1.5"></div>
                <div className="flex-1">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">AI Intern</h3>
                    <p className="text-lg text-primary font-semibold">Interbiz Solutions</p>
                    <div className="flex flex-col sm:flex-row gap-4 text-sm text-muted-foreground pt-2">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        May 2025 - Aug 2025
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Remote
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <p className="text-foreground/80">
                      Developed AI-powered solutions including Multi-Context Parser (MCP) middleware, automated ATS
                      systems, and bulk resume scoring pipelines.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex gap-2 items-start text-sm text-foreground/70">
                        <span className="text-primary mt-1">•</span>
                        <span>Built AI middleware to process and analyze documents at scale</span>
                      </li>
                      <li className="flex gap-2 items-start text-sm text-foreground/70">
                        <span className="text-primary mt-1">•</span>
                        <span>Implemented ATS-compatible resume evaluation system</span>
                      </li>
                      <li className="flex gap-2 items-start text-sm text-foreground/70">
                        <span className="text-primary mt-1">•</span>
                        <span>Optimized processing pipeline for high-volume data handling</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ScrollFade>
        </div>
      </div>
    </section>
  )
}
