import { Mail, Github, Linkedin } from "lucide-react"
import { ScrollFade } from "@/components/scroll-fade"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card/50 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <ScrollFade>
            <div className="space-y-2">
              <a href="#home" className="flex items-center gap-2 font-bold text-lg text-primary">
                <span className="w-6 h-6 bg-primary text-primary-foreground rounded-lg flex items-center justify-center text-xs font-bold">
                  VT
                </span>
                <span>Vaibhav</span>
              </a>
              <p className="text-sm text-muted-foreground">AI Engineer & Full-Stack Developer</p>
            </div>
          </ScrollFade>

          {/* Quick Links */}
          <ScrollFade delay={50}>
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Navigation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {["About", "Projects", "Experience", "Skills"].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollFade>

          {/* Resources */}
          <ScrollFade delay={100}>
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    Resume
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-primary transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </ScrollFade>

          {/* Social */}
          <ScrollFade delay={150}>
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Connect</h4>
              <div className="flex gap-2">
                <a
                  href="https://github.com/snowxx456"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-input transition-colors text-muted-foreground hover:text-primary"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/vaibhav-tayal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg hover:bg-input transition-colors text-muted-foreground hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:vaibhav@example.com"
                  className="p-2 rounded-lg hover:bg-input transition-colors text-muted-foreground hover:text-primary"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </ScrollFade>
        </div>

        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {currentYear} Vaibhav Tayal. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="/terms" className="hover:text-primary transition-colors">
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
