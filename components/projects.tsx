"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

const projects = [
  {
    title: "Justipin",
    description:
      "A consignment service application that guarantees ease and security of transactions between the person who entrusts the item to the buyer.",
    image: "/Images/cover_justip.png",
    tags: ["Flutter", "MySQL", "Laravel"],
    githubLink: "https://github.com/derika-dev/JUSTIPin.git",
    type: "Mobile App",
  },
  {
    title: "Agro recomendation",
    description:
    "Web to find out the best plant potential in your area, early detection of plant diseases, and automatic prediction of planting & harvest seasons.",
    image: "/Images/cover_agro.png",
    tags: ["React", "MySQL", "Laravel"],
    githubLink: "https://github.com/derika-dev/olivia.git",
    type: "Web App",
  },
  {
    title: "Beautiful Culture",
    description:
    "Websites as information technology",
    image: "/Images/cover_BCulture.png",
    tags: ["HTML", "CSS"],
    type: "Web Design",
  },
  {
    title: "Personal Portofolio",
    description:
    "This personal portfolio website showcases my profile, skills, and top projects with a modern, responsive design as a professional representation in the tech field.",
    image: "/Images/cover_porto.png",
    tags: ["React"],
    githubLink: "#",
    type: "Web App",
  },
  {
    title: "SafeZone",
    description:
    "Bullying reporting and school monitoring app for a safe learning environment.",
    image: "/Images/cover_safezone.png",
    tags: ["Figma"],
    githubLink: "#",
    type: "UI/UX Design",
  },
  {
    title: "TrevelEase",
    description:
    "The app simplifies travel planning and booking for all groups, including tickets, hotels, and attractions.",
    image: "/Images/cover_trevelease.png",
    tags: ["Figma"],
    githubLink: "#",
    type: "UI/UX Design",
  },
]

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20 px-4 bg-navy-900/50">
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
              Featured Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A selection of my recent work showcasing my skills and experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <Card className="relative bg-navy-800/70 overflow-hidden group h-full flex flex-col border-none">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/60"></div>
                </div>

                {/* Card Content */}
                <div className="relative z-10 p-6 flex flex-col flex-grow">
                  <CardHeader className="pb-2">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="text-sm text-white-300 font-medium mb-1">{project.type}</p>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-navy-700/70 text-blue-300 px-2 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="pt-4 mt-auto">
                    <div className="flex gap-3 w-full">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-navy-600 text-gray-200 hover:bg-navy-700 hover:text-white"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </CardFooter>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
