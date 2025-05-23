import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"

export const metadata: Metadata = {
  title: "Dea Derika | Front-End Developer",
  description:
    "Personal portfolio of Dea Derika, a Front-End Developer specializing in creating modern, responsive web applications.",
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-navy-950 to-navy-900 text-white">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  )
}
