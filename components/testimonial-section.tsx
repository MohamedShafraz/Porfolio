"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    content:
      "John is an exceptional developer who delivered our project on time and exceeded our expectations. His attention to detail and problem-solving skills are remarkable. The UI/UX design was intuitive and our users love it!",
    author: "Sarah Johnson",
    role: "CTO, TechStart Inc.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    content:
      "Working with John was a pleasure. He understood our requirements quickly and translated them into a beautiful, functional application. His knowledge of both frontend and AI technologies made our project stand out.",
    author: "Michael Chen",
    role: "Product Manager, DataViz",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    content:
      "John's expertise in UI/UX design transformed our outdated platform into a modern, user-friendly experience. He's not just a developer but a true problem solver who thinks about the end user.",
    author: "Emily Rodriguez",
    role: "Founder, DesignHub",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">What Clients Say</h2>

        <div className="relative max-w-3xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="pt-10">
              <Quote className="h-10 w-10 text-primary/20 mb-4" />
              <p className="text-lg italic mb-6">{testimonials[activeIndex].content}</p>
            </CardContent>
            <CardFooter className="flex items-center space-x-4">
              <Avatar>
                <AvatarImage src={testimonials[activeIndex].avatar} alt={testimonials[activeIndex].author} />
                <AvatarFallback>
                  {testimonials[activeIndex].author
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">{testimonials[activeIndex].author}</p>
                <p className="text-sm text-muted-foreground">{testimonials[activeIndex].role}</p>
              </div>
            </CardFooter>
          </Card>

          <div className="flex justify-center mt-8 space-x-2">
            <Button variant="outline" size="icon" onClick={prevTestimonial}>
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous testimonial</span>
            </Button>
            <Button variant="outline" size="icon" onClick={nextTestimonial}>
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next testimonial</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

