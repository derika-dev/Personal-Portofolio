"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { GraduationCap, Award, Heart } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-4 bg-navy-900/50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-300 leading-relaxed text-center">
              I am an active Informatics Engineering student at Politeknik Negeri Semarang with hands-on internship experience at a software house, where I gained real-world exposure in software development.
              I have participated in various competitions in web design, web development, and UI/UX, which have sharpened both my technical skills and creativity in problem-solving.
              Known as a determined, fast learner, and collaborative individual, I am always open to working with others and taking on new challenges that help me grow in the tech industry.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
