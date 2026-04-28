import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Clock, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog",
  description: "Articles and insights on software engineering, UI/UX design, and AI/ML technologies.",
}

const blogPosts = [
  {
    id: 1,
    title: "Building Accessible Web Applications",
    excerpt:
      "Learn how to create web applications that are accessible to everyone, including people with disabilities.",
    date: "March 15, 2023",
    readTime: "8 min read",
    category: "UI/UX",
    slug: "building-accessible-web-applications",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: 2,
    title: "Getting Started with Next.js and TypeScript",
    excerpt:
      "A comprehensive guide to setting up a new project with Next.js and TypeScript for type-safe React applications.",
    date: "February 28, 2023",
    readTime: "12 min read",
    category: "Web Development",
    slug: "getting-started-with-nextjs-typescript",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: 3,
    title: "Introduction to Machine Learning for Web Developers",
    excerpt:
      "Discover how web developers can leverage machine learning to enhance user experiences and build smarter applications.",
    date: "January 20, 2023",
    readTime: "10 min read",
    category: "AI/ML",
    slug: "machine-learning-for-web-developers",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: 4,
    title: "Designing Effective User Interfaces",
    excerpt: "Principles and practices for creating user interfaces that are both beautiful and functional.",
    date: "December 12, 2022",
    readTime: "7 min read",
    category: "UI/UX",
    slug: "designing-effective-user-interfaces",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: 5,
    title: "The Future of Frontend Development",
    excerpt: "Exploring emerging trends and technologies that will shape the future of frontend development.",
    date: "November 5, 2022",
    readTime: "9 min read",
    category: "Web Development",
    slug: "future-of-frontend-development",
    image: "/placeholder.svg?height=300&width=600",
  },
  {
    id: 6,
    title: "Practical Applications of AI in Everyday Products",
    excerpt:
      "How artificial intelligence is being integrated into everyday products and services to improve user experiences.",
    date: "October 18, 2022",
    readTime: "11 min read",
    category: "AI/ML",
    slug: "practical-applications-of-ai",
    image: "/placeholder.svg?height=300&width=600",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-muted-foreground">
          Thoughts, insights, and tutorials on software engineering, UI/UX design, and AI/ML technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <Card key={post.id} className="overflow-hidden flex flex-col">
            <div className="relative h-48 overflow-hidden">
              <img
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute top-4 left-4">
                <Badge>{post.category}</Badge>
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle className="line-clamp-2">
                <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent className="pb-2 flex-grow">
              <p className="text-muted-foreground line-clamp-3 mb-4">{post.excerpt}</p>
            </CardContent>
            <CardFooter className="flex justify-between items-center pt-0">
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="h-4 w-4 mr-1" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-1" />
                <span>{post.readTime}</span>
              </div>
            </CardFooter>
            <CardFooter className="pt-0">
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-medium text-primary flex items-center hover:underline"
              >
                Read More
                <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

