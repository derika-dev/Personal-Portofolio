"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Users } from "lucide-react"

const experiences = [
  {
    title: "Full-Stack Developer Intern",
    company: "PT Inofost Trans Sistem",
    period: "Jan 2022 - Juli 2022",
    description:
      "Developed and maintained both front-end and back-end web applications, collaborated with the design team to implement UI/UX improvements, and optimized website performance.",
    type: "work",
  },
  {
    title: "Member of",
    company: "Sigma Innovation Community, Semarang",
    period: "Jan 2025 - Present",
    description:
      "Actively participate in community activities, knowledge sharing, and collaborative projects to enhance skills and network with like-minded professionals.",
    type: "organization",
  },
  {
    title: "Treasurer of the Electrical Engineering Student Association",
    company: "Himpunan Mahasiswa teknik Elektro",
    period: "May 2024 - may 2025",
    description:
      "Managed financial records, prepared budgets, and oversaw fund allocation to support student activities and events.",
    type: "organization",
  },
]

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 px-4 bg-navy-950/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">My professional journey and organizational involvement</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-navy-700"></div>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 z-10 mt-1.5"></div>

              {/* Content */}
              <div className="md:w-1/2 ml-8 md:ml-0 md:px-8">
                <div className="bg-navy-800/50 rounded-lg p-6 hover:bg-navy-800 transition-all duration-300 border border-navy-700 hover:shadow-lg hover:shadow-blue-900/10">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`p-2 rounded-lg ${
                        exp.type === "work" ? "bg-blue-500/20 text-blue-400" : "bg-purple-500/20 text-purple-400"
                      }`}
                    >
                      {exp.type === "work" ? <Briefcase className="h-5 w-5" /> : <Users className="h-5 w-5" />}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                      <p className="text-gray-400 text-sm">{exp.company}</p>
                    </div>
                  </div>

                  <div className="mb-4">
                    <span className="inline-block bg-navy-700 text-gray-300 text-xs px-3 py-1 rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-gray-300">{exp.description}</p>
                </div>
              </div>

              {/* Empty div for layout */}
              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
