import type { Metadata } from "next"
import { ProjectCard } from "@/components/project-card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore my portfolio of software engineering, UI/UX design, and AI/ML projects.",
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto mb-12">
        <h1 className="text-4xl font-bold mb-4 text-center">Projects</h1>
        <p className="text-muted-foreground mb-6 text-center">
          Highlights from my portfolio — production-ready apps, AI integrations, responsive frontends, and scalable
          backends.
        </p>

        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">TaskMSAI — AI-Driven Task Management System</h2>
            <ul className="list-disc list-inside text-muted-foreground mt-2">
              <li>Built a production-ready task management frontend using Next.js and TypeScript with mobile-first responsive design</li>
              <li>Implemented JWT authentication with secure API communication between frontend and backend</li>
              <li>Integrated OpenAI-powered features to enhance task automation and intelligence</li>
              <li>Designed scalable architecture using FastAPI, Docker, and modern deployment practices</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Sports Shop POS System — Full Stack Billing System</h2>
            <ul className="list-disc list-inside text-muted-foreground mt-2">
              <li>Developed a POS system for a sports shop with product management, billing, and inventory tracking features</li>
              <li>Built responsive frontend using React/Next.js with role-based access control</li>
              <li>Implemented backend APIs for orders, stock management, and transaction processing</li>
              <li>Designed dashboard for sales analytics and daily revenue tracking with real-time updates</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Weather Reporter — React Weather Application</h2>
            <ul className="list-disc list-inside text-muted-foreground mt-2">
              <li>Built a responsive weather application using React with real-time weather API integration</li>
              <li>Implemented search functionality with dynamic UI updates and loading states</li>
              <li>Containerized the application using Docker and managed API keys via environment variables</li>
              <li>Added unit testing using Vitest and deployed using Vercel with CI/CD pipelines</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Pioneers — Mentorship System</h2>
            <ul className="list-disc list-inside text-muted-foreground mt-2">
              <li>Developed an end-to-end JAMstack application with SSR/SSG for SEO optimization and performance</li>
              <li>Implemented Firebase Authentication, Firestore models, and cloud functions for backend logic</li>
              <li>Built REST APIs and deployed using Vercel with CI/CD workflows and environment management</li>
              <li>Added Jest testing to ensure authentication flows and data integrity</li>
            </ul>
          </div>
        </div>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <div className="flex justify-center mb-8">
          <TabsList>
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="web">Web Development</TabsTrigger>
            <TabsTrigger value="ui">UI/UX Design</TabsTrigger>
            <TabsTrigger value="ai">AI/ML</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="E-commerce Platform"
              description="A full-stack e-commerce solution with advanced filtering, search, and payment integration."
              tags={["Next.js", "TypeScript", "Stripe", "Tailwind CSS"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="/projects/ecommerce"
            />
            <ProjectCard
              title="AI Content Generator"
              description="An AI-powered application that generates marketing content based on user prompts."
              tags={["React", "Python", "OpenAI"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="/projects/ai-content"
            />
            <ProjectCard
              title="Healthcare Dashboard"
              description="A comprehensive dashboard for healthcare providers to monitor patient data and trends."
              tags={["React", "D3.js", "Firebase", "UI/UX"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="/projects/healthcare"
            />
            <ProjectCard
              title="Real Estate Listing App"
              description="A property listing application with map integration and virtual tours."
              tags={["React", "Node.js", "MongoDB", "Google Maps API"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="/projects/real-estate"
            />
            <ProjectCard
              title="Mobile Banking App"
              description="A user-friendly mobile banking application with intuitive navigation and security features."
              tags={["Figma", "Prototyping", "User Testing", "UI/UX"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="/projects/banking-app"
            />
            <ProjectCard
              title="Predictive Analytics Tool"
              description="A machine learning model that predicts customer behavior based on historical data."
              tags={["Python", "Scikit-learn", "Pandas", "Data Visualization"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="/projects/predictive-analytics"
            />
          </div>
        </TabsContent>

        <TabsContent value="web" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="E-commerce Platform"
              description="A full-stack e-commerce solution with advanced filtering, search, and payment integration."
              tags={["Next.js", "TypeScript", "Stripe", "Tailwind CSS"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="/projects/ecommerce"
            />
            <ProjectCard
              title="Real Estate Listing App"
              description="A property listing application with map integration and virtual tours."
              tags={["React", "Node.js", "MongoDB", "Google Maps API"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="/projects/real-estate"
            />
            <ProjectCard
              title="Social Media Dashboard"
              description="A dashboard for managing and analyzing social media accounts and campaigns."
              tags={["Vue.js", "Express", "PostgreSQL", "Chart.js"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="/projects/social-media"
            />
          </div>
        </TabsContent>

        <TabsContent value="ui" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="Healthcare Dashboard"
              description="A comprehensive dashboard for healthcare providers to monitor patient data and trends."
              tags={["React", "D3.js", "Firebase", "UI/UX"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="/projects/healthcare"
            />
            <ProjectCard
              title="Mobile Banking App"
              description="A user-friendly mobile banking application with intuitive navigation and security features."
              tags={["Figma", "Prototyping", "User Testing", "UI/UX"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="/projects/banking-app"
            />
            <ProjectCard
              title="Travel Booking Redesign"
              description="A complete redesign of a travel booking platform focusing on user experience and conversion."
              tags={["Adobe XD", "User Research", "Wireframing", "UI/UX"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="/projects/travel-booking"
            />
          </div>
        </TabsContent>

        <TabsContent value="ai" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
              title="AI Content Generator"
              description="An AI-powered application that generates marketing content based on user prompts."
              tags={["React", "Python", "OpenAI"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="/projects/ai-content"
            />
            <ProjectCard
              title="Predictive Analytics Tool"
              description="A machine learning model that predicts customer behavior based on historical data."
              tags={["Python", "Scikit-learn", "Pandas", "Data Visualization"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="/projects/predictive-analytics"
            />
            <ProjectCard
              title="Image Recognition System"
              description="A computer vision system that identifies objects and people in images and videos."
              tags={["Python", "OpenCV", "Computer Vision"]}
              imageUrl="/placeholder.svg?height=300&width=500"
              projectUrl="/projects/image-recognition"
            />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

