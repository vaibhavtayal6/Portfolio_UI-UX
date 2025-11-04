import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })
const poppins = Poppins({ subsets: ["latin"], weight: ["600", "700"], variable: "--font-heading" })

export const metadata: Metadata = {
  title: "Vaibhav Tayal — AI Engineer & Full-Stack Developer",
  description:
    "Portfolio of Vaibhav Tayal — ML engineer and B.Tech Computer Science student building AI products, ML pipelines, and developer tools.",
  openGraph: {
    title: "Vaibhav Tayal — AI Engineer & Full-Stack Developer",
    description: "I build AI-driven automation and real-time systems that turn research into production.",
    type: "website",
    url: "https://vaibhav-tayal.com",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vaibhav Tayal — AI Engineer & Full-Stack Developer",
    description: "ML engineer and B.Tech Computer Science student building AI products.",
    images: ["/og-image.png"],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#4f46e5" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' fontSize='75' fontWeight='bold' fill='%234f46e5'>VT</text></svg>"
        />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
