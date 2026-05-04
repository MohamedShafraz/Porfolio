import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Download, Briefcase, GraduationCap, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "About Me",
  description:
    "Learn more about my background, skills, and experience as a software engineer, UI/UX developer, and AI/ML enthusiast.",
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="sticky top-24">
              <div className="relative rounded-lg overflow-hidden mb-6">
                <img src="/placeholder-user2.jpg?height=400&width=300" alt="Mohamed Shafraz" className="w-full h-auto" />
              </div>
              <h1 className="text-2xl font-bold mb-2">Mohamed Shafraz</h1>
              <p className="text-primary mb-4">AI Software Engineer | Full-Stack Developer</p>
              <p className="text-muted-foreground mb-6">Based in Sri Lanka</p>
              <div className="flex flex-col space-y-3">
                <Button asChild>
                  <a href="/contact">Contact Me</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/my-cv.pdf" download="Mohamed_Shafraz_SE_Resume.pdf">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-muted-foreground mb-4">
              I'm a passionate Software Engineer and UI/UX Developer with a strong interest in AI and Machine Learning.
              With over 2 years of experience in building modern web applications, I specialize in creating intuitive
              and user-friendly interfaces that deliver exceptional user experiences.
            </p>
            <p className="text-muted-foreground mb-6">
              My journey in technology began when I was 19, building simple websites for local businesses. This early
              exposure to web development sparked my interest in creating digital experiences that are not only
              functional but also aesthetically pleasing and intuitive to use.
            </p>
            <p className="text-muted-foreground mb-8">
              Today, I combine my technical expertise with design thinking to bridge the gap between complex
              functionality and accessible user interfaces. I'm constantly exploring new technologies and methodologies
              to enhance my skills and deliver better solutions.
            </p>

            <h3 className="text-xl font-semibold mb-4">Work Experience</h3>
            <div className="space-y-6 mb-10">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Briefcase className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                        <h4 className="font-semibold">Freelance Software Engineer</h4>
                        <Badge variant="outline">2026/02 – Present</Badge>
                      </div>
                      <p className="text-primary mb-2">Freelancer.com</p>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Developed and deployed full-stack applications using React, Next.js, FastAPI</li>
                        <li>• Designed RESTful APIs to improve system performance and integration</li>
                        <li>• Built scalable, reusable components following clean coding practices</li>
                        <li>• Delivered client solutions in Agile workflows</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Briefcase className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                        <h4 className="font-semibold">Junior Backend Developer</h4>
                        <Badge variant="outline">2025/10 – 2026/02</Badge>
                      </div>
                      <p className="text-primary mb-2">Particle Execution</p>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Built backend services using FastAPI with OpenAPI documentation</li>
                        <li>• Integrated AI features (OpenAI APIs) for automation and chat systems</li>
                        <li>• Collaborated with frontend teams for Next.js API integration</li>
                        <li>• Improved API performance through testing and validation</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Briefcase className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                        <h4 className="font-semibold">Junior Full Stack Developer</h4>
                        <Badge variant="outline">2025/05 – 2025/10</Badge>
                      </div>
                      <p className="text-primary mb-2">BLAID Tech</p>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Developed full-stack applications using Next.js and FastAPI</li>
                        <li>• Implemented CI/CD pipelines (Docker, GitHub Actions, Azure)</li>
                        <li>• Built scalable UI with SSR/ISR and efficient state management</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Briefcase className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                        <h4 className="font-semibold">Software Engineer Intern</h4>
                        <Badge variant="outline">2024/11 – 2025/05</Badge>
                      </div>
                      <p className="text-primary mb-2">Kainovation Technologies</p>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Developed APIs and frontend features using .NET and Next.js</li>
                        <li>• Integrated AI-based functionalities using OpenAI APIs</li>
                        <li>• Contributed to testing, debugging, and CI/CD processes</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Briefcase className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                        <h4 className="font-semibold">Mobile Developer</h4>
                        <Badge variant="outline">2023/11 – 2024/05</Badge>
                      </div>
                      <p className="text-primary mb-2">Nomad Buddy Hospitality (Private) Limited</p>
                      <ul className="text-muted-foreground space-y-1">
                        <li>• Built Flutter mobile interfaces with custom widgets and state management patterns (Provider/BLoC)</li>
                        <li>• Optimized UI performance by profiling widget build times and minimizing unnecessary rebuilds</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold mb-4">Education</h3>
            <div className="space-y-6 mb-10">
              {/* <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <GraduationCap className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                        <h4 className="font-semibold">Master of Science in Computer Science</h4>
                        <Badge variant="outline">2015 - 2017</Badge>
                      </div>
                      <p className="text-primary mb-2">Stanford University</p>
                      <p className="text-muted-foreground">
                        Specialized in Human-Computer Interaction and Artificial Intelligence. Thesis: "Improving User
                        Experience Through Predictive AI Models"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card> */}

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <GraduationCap className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                        <h4 className="font-semibold">Bachelor of Science in Information Systems</h4>
                        <Badge variant="outline">2022 - 2025</Badge>
                      </div>
                      <p className="text-primary mb-2">University of Colombo School of Computing</p>
                      <p className="text-muted-foreground">
                        Focused on software development and digital design. Participated in
                        multiple hackathons and coding competitions.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* <h3 className="text-xl font-semibold mb-4">Certifications & Awards</h3>
            <div className="space-y-6 mb-10">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold mb-2">Google UX Design Professional Certificate</h4>
                      <p className="text-muted-foreground">
                        Comprehensive training in user experience design, including research, wireframing, prototyping,
                        and testing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold mb-2">AWS Certified Solutions Architect</h4>
                      <p className="text-muted-foreground">
                        Expertise in designing and deploying scalable, highly available systems on AWS.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <Award className="h-5 w-5 text-primary mt-1 mr-3" />
                    <div>
                      <h4 className="font-semibold mb-2">Best Web Application Award - DevCon 2020</h4>
                      <p className="text-muted-foreground">
                        Recognized for developing an innovative healthcare application with exceptional user experience.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div> */}

            {/* <div className="flex justify-center mt-12">
              <Button asChild size="lg">
                <Link href="/#featured-projects">View My Projects</Link>
              </Button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

