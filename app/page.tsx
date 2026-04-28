import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HeroSection } from "@/components/hero-section"
import { ProjectCard } from "@/components/project-card"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
// import { TestimonialSection } from "@/components/testimonial-section"
import Link from "next/link"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />

      <section id="about" className="py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-4">
              I'm a passionate Software Engineer and Mobile App Developer with a strong interest in AI and Machine Learning.
              With over 1 years of experience in building modern web applications, I specialize in creating intuitive
              and user-friendly interfaces that deliver exceptional user experiences.
            </p>
            <p className="text-muted-foreground mb-6">
              My approach combines technical expertise with design thinking, allowing me to bridge the gap between
              complex functionality and accessible user interfaces. I'm constantly exploring new technologies and
              methodologies to enhance my skills and deliver better solutions.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">JavaScript</Badge>
              <Badge variant="secondary">TypeScript</Badge>
              <Badge variant="secondary">React</Badge>
              <Badge variant="secondary">Next.js</Badge>
              <Badge variant="secondary">UI/UX Design</Badge>
              <Badge variant="secondary">Flutter</Badge>
              <Badge variant="secondary">Python</Badge>
            </div>
            <div className="mt-8">
              <Button asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="/placeholder-user3.jpg?height=400&width=600"
              alt="Portrait of John Doe"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      <SkillsSection />

      <section id="featured-projects" className="py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <Tabs defaultValue="all" className="w-full">
          {/* <div className="flex justify-center mb-8">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="web">Web Development</TabsTrigger>
              <TabsTrigger value="ui">UI/UX Design</TabsTrigger>
              <TabsTrigger value="ai">AI/ML</TabsTrigger>
            </TabsList>
          </div> */}
          <TabsContent value="all" className="mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <ProjectCard
            title="Hospital Management System"
            description="An IT solution enhancing the efficiency of Gomez Hospital in performing their functions."
            tags={["PHP", "PhpMyAdmin", "JavaScript", "HTML", "CSS", "MySQL"]}
            imageUrl="/Hospital Management System.png"
            projectUrl="/projects/hospital-management"
          />
          <ProjectCard
            title="Trip Planning System"
            description="A platform for guided tourism, reducing travel planning hassle and unifying bookings."
            tags={["React", "React Native (Expo)", "Spring Boot", "MySQL", "AWS RDS", "Java", "Trello"]}
            imageUrl="/Trip Planning System.png"
            projectUrl="/projects/trip-planning"
          />
          {/* <ProjectCard
            title="Telecommunication System"
            description="A system for secure customer account management, billing, and support services."
            tags={["React.js", "Node.js", "Express.js", "MySQL", "MongoDB", "REST API", "MVC"]}
            imageUrl="/placeholder.svg?height=300&width=500"
            projectUrl="/projects/telecommunication"
          /> */}
          <ProjectCard
                title="eTaask"
                description="This Flutter task management app is designed to help users efficiently manage their tasks with features to add, view, update, and delete tasks"
                tags={["Flutter", "SQLite", "MVVM"]}
                imageUrl="/Etaask.png"
                projectUrl="/projects/ai-content"
              />
              {/* <ProjectCard
                title="Volunify"
                description="The app connects individuals with a wide range of volunteer opportunities from local nonprofits, charities, and community organizations."
                tags={["Flutter", "Firebase","FlutterFlow"]}
                imageUrl="/placeholder.svg?height=300&width=500"
                projectUrl="/projects/predictive-analytics"
              /> */}
              <ProjectCard
                title="LibrMs"
                description="Project Overview A Library Management System implemented as a Java console application. It demonstrates core Object-Oriented Programming (OOP) principles—such as encapsulation, inheritance, and polymorphism"
                tags={["Java"]}
                imageUrl="/LibreMS.png"
                projectUrl="/projects/LibrMs"
              />
        </div>
      </TabsContent>
          <TabsContent value="web" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProjectCard
            title="Hospital Management System"
            description="An IT solution enhancing the efficiency of Gomez Hospital in performing their functions."
            tags={["PHP", "PhpMyAdmin", "JavaScript", "HTML", "CSS", "MySQL"]}
            imageUrl="/placeholder.svg?height=300&width=500"
            projectUrl="/projects/hospital-management"
          />
          <ProjectCard
            title="Trip Planning System"
            description="A platform for guided tourism, reducing travel planning hassle and unifying bookings."
            tags={["React", "React Native (Expo)", "Spring Boot", "MySQL", "AWS RDS", "Java", "Trello"]}
            imageUrl="/placeholder.svg?height=300&width=500"
            projectUrl="/projects/trip-planning"
          />
          <ProjectCard
            title="Telecommunication System"
            description="A system for secure customer account management, billing, and support services."
            tags={["React.js", "Node.js", "Express.js", "MySQL", "MongoDB", "REST API", "MVC"]}
            imageUrl="/placeholder.svg?height=300&width=500"
            projectUrl="/projects/telecommunication"
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
            </div>
          </TabsContent>
          <TabsContent value="mobile" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="eTaask"
                description="This Flutter task management app is designed to help users efficiently manage their tasks with features to add, view, update, and delete tasks"
                tags={["Flutter", "SQLite", "MVVM"]}
                imageUrl="/placeholder.svg?height=300&width=500"
                projectUrl="/projects/ai-content"
              />
              <ProjectCard
                title="Volunify"
                description="The app connects individuals with a wide range of volunteer opportunities from local nonprofits, charities, and community organizations."
                tags={["Flutter", "Firebase","FlutterFlow"]}
                imageUrl="/placeholder.svg?height=300&width=500"
                projectUrl="/projects/predictive-analytics"
              />
              <ProjectCard
                title="eTaask"
                description="This Flutter task management app is designed to help users efficiently manage their tasks with features to add, view, update, and delete tasks"
                tags={["Flutter", "OpenWeatherAPI"]}
                imageUrl="/placeholder.svg?height=300&width=500"
                projectUrl="/projects/ai-content"
              />
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* <TestimonialSection /> */}

      <ContactSection />
    </div>
  )
}

