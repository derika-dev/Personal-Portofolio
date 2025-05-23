"use client"

import type React from "react"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Send, Mail, MapPin, Phone, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      })
      setIsSubmitting(false)
      // Reset form
      const form = e.target as HTMLFormElement
      form.reset()
    }, 1500)
  }

  return (
    <section id="contact" className="py-20 px-4 bg-navy-900/50">
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
              Get In Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>

            <div className="flex items-start gap-4">
              <div className="bg-navy-800 p-3 rounded-lg">
                <Mail className="h-5 w-5 text-blue-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                <p className="text-gray-400">derikadea82@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-navy-800 p-3 rounded-lg">
                <MapPin className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-1">Location</h4>
                <p className="text-gray-400">Semarang, Indonesia</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-navy-800 p-3 rounded-lg">
                <Phone className="h-5 w-5 text-pink-400" />
              </div>
              <div>
                <h4 className="text-lg font-medium text-white mb-1">Phone</h4>
                <p className="text-gray-400">+62 8192 2110 69</p>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="text-lg font-medium text-white mb-4">Connect with me</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/derika-dev"
                  className="bg-navy-800 p-3 rounded-lg hover:bg-navy-700 transition-colors duration-300"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dea-derika-winahyu-a37262335/"
                  className="bg-navy-800 p-3 rounded-lg hover:bg-navy-700 transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="bg-navy-800 border-navy-700 focus:border-blue-500 text-white placeholder:text-gray-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Your email"
                    className="bg-navy-800 border-navy-700 focus:border-blue-500 text-white placeholder:text-gray-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  required
                  placeholder="Subject of your message"
                  className="bg-navy-800 border-navy-700 focus:border-blue-500 text-white placeholder:text-gray-500"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="Your message"
                  rows={6}
                  className="bg-navy-800 border-navy-700 focus:border-blue-500 text-white placeholder:text-gray-500 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-2 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
