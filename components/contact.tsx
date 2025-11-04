"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail, Send } from "lucide-react"
import { ScrollFade } from "@/components/scroll-fade"

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - can be connected to a serverless function
    console.log("Form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <ScrollFade>
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-lg text-foreground/70 mb-12">
            Looking to collaborate, hire, or chat about AI? Send a message — I usually reply within a few business days.
          </p>
        </ScrollFade>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <ScrollFade>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-ring"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-ring"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 transition-ring resize-none"
                  placeholder="Your message..."
                />
              </div>

              <Button type="submit" size="lg" className="w-full gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>

              {submitted && (
                <div className="p-4 bg-accent/10 text-accent rounded-lg text-sm font-medium">
                  Thanks! I'll get back to you soon.
                </div>
              )}
            </form>
          </ScrollFade>

          {/* Contact Info */}
          <ScrollFade delay={100}>
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:vaibhav@example.com"
                    className="flex items-start gap-4 p-4 rounded-lg hover:bg-input transition-colors"
                  >
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">vaibhav@example.com</p>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-4">Social Links</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { name: "GitHub", url: "https://github.com/snowxx456" },
                    { name: "LinkedIn", url: "https://linkedin.com/in/vaibhav-tayal" },
                    { name: "Twitter", url: "https://twitter.com" },
                    { name: "Email", url: "mailto:vaibhav@example.com" },
                  ].map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-lg bg-input hover:bg-primary/10 text-center text-sm font-medium transition-colors hover:text-primary"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollFade>
        </div>
      </div>
    </section>
  )
}
