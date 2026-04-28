import type { Metadata } from "next"
import { ContactSection } from "@/components/contact-section"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with me for job opportunities, collaborations, or just to say hello.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
        <p className="text-muted-foreground">
          Have a project in mind or want to discuss a potential collaboration? I'd love to hear from you.
        </p>
      </div>

      <ContactSection />
    </div>
  )
}

