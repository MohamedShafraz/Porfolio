"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
// import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [typedText, setTypedText] = useState("")
  const fullText = "Software Engineer | UI/UX Developer | AI/ML Enthusiast"

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    return () => clearInterval(typingInterval)
  }, [])

  return (
    <section className="py-20 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          {/* <Badge variant="outline" className="mb-4">
            Available for hire
          </Badge> */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">Hi, I'm Mohamed Shafraz</h1>
          <p className="text-xl md:text-2xl font-medium text-primary h-8">
            {typedText}
            <span className="animate-blink">|</span>
          </p>
          <p className="text-muted-foreground mt-6 mb-8 text-lg max-w-md">
            I build exceptional digital experiences that combine beautiful design with powerful functionality.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg">
              <Link href="/#featured-projects">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {/* download my cv as pdf */}
            <Button variant="outline" size="lg" asChild>
              <a href="/my-cv.pdf" download="Mohamed_Shafraz_SE_Resume.pdf">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
            <img
              src="/About_ME.png?height=600&width=600"
              alt="Mohamed Shafraz - Software Engineer"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          <div className="absolute -top-6 -left-6 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-10" />
        </div>
      </div>
    </section>
  )
}

