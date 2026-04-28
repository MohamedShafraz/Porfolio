import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: {
    default: "Mohamed Shafraz | Software Engineer & UI/UX Developer",
    template: "%s | Mohamed Shafraz",
  },
  description:
    "Software Engineer, UI/UX Developer, and AI/ML enthusiast with expertise in building modern web applications and user experiences.",
  keywords: [
    "software engineer",
    "UI/UX developer",
    "AI",
    "machine learning",
    "frontend developer",
    "portfolio",
    "web development",
  ],
  authors: [{ name: "Mohamed Shafraz" }],
  creator: "Mohamed Shafraz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johndoe.dev",
    title: "Mohamed Shafraz | Software Engineer & UI/UX Developer",
    description:
      "Software Engineer, UI/UX Developer, and AI/ML enthusiast with expertise in building modern web applications and user experiences.",
    siteName: "Mohamed Shafraz Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mohamed Shafraz Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohamed Shafraz | Software Engineer & UI/UX Developer",
    description:
      "Software Engineer, UI/UX Developer, and AI/ML enthusiast with expertise in building modern web applications and user experiences.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
