"use client"

import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Palette, Brain, Server } from "lucide-react"

export function SkillsSection() {
  const skillCategories = [
    {
      id: "frontend",
      name: "Frontend",
      icon: <Code className="h-5 w-5" />,
      skills: [
        { name: "JavaScript", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "React", level: 85 },
        { name: "Next.js", level: 80 },
        { name: "HTML/CSS", level: 85 },
        { name: "Tailwind CSS", level: 80 },
      ],
    },
    {
      id: "design",
      name: "UI/UX Design",
      icon: <Palette className="h-5 w-5" />,
      skills: [
        { name: "Figma", level: 75 },
        { name: "User Research", level: 65 },
        { name: "Wireframing", level: 80 },
        { name: "Prototyping", level: 75 },
        { name: "Design Systems", level: 70 },
      ],
    },
    {
      id: "ai",
      name: "AI/ML",
      icon: <Brain className="h-5 w-5" />,
      skills: [
        { name: "Python", level: 75 },
        { name: "PyTorch", level: 40 },
        { name: "Data Analysis", level: 50 },
        { name: "NLP", level: 45 },
        { name: "Computer Vision", level: 30 },
      ],
    },
    {
      id: "backend",
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "RESTful APIs", level: 90 },
        { name: "GraphQL", level: 75 },
        { name: "Authentication", level: 85 },
        { name: "Serverless", level: 80 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>

        <Tabs defaultValue="frontend" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-4 md:grid-cols-4">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
                  {category.icon}
                  <span className="hidden md:inline">{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    {category.icon}
                    {category.name}
                  </CardTitle>
                  <CardDescription>
                    My expertise and experience in {category.name.toLowerCase()} technologies.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

