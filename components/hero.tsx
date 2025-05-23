"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowRight, GitlabIcon as GitHub, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto max-w-6xl z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-80 h-80 ml-4 mx-auto lg:mx-0 mb-8 rounded-full overflow-hidden border-4 border-navy-700 shadow-xl">
            <img
              src="/Images/foto_dea.jpg"
              alt="Dea Derika"
              className="w-full h-full object-cover"
            />
          </div>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
                Dea Derika
              </span>
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-300 mb-6">
              Front-End Developer crafting beautiful digital experiences
            </h2>

            <p className="text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
              I build responsive, user-friendly websites and applications with modern technologies.
            </p>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button
                className="group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-navy-800 hover:text-white px-6 py-2 rounded-full transition-all duration-300"
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Projects
              </Button>

              <div className="flex gap-4 mt-4 lg:mt-0">
                  <a
                    href="https://github.com/derika-dev" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full hover:bg-navy-800 hover:text-blue-400 transition-all duration-300"
                    >
                      <GitHub className="h-5 w-5" />
                    </Button>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/dea-derika-winahyu-a37262335/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <Button
                      size="icon"
                      variant="ghost"
                      className="rounded-full hover:bg-navy-800 hover:text-blue-400 transition-all duration-300"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Button>
                  </a>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
