import type React from "react"
import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { cn } from "@/lib/utils"
import { AnimatedBackground } from "@/components/animated-background"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "kaloyan.gantchev - Digital Strategy & Web Development",
  description: "Empowering Businesses to Reach New Digital Heights.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-screen font-sans antialiased", inter.variable)}>
        <AnimatedBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
