<<<<<<< HEAD
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Digital Heights - IT Agency & Consultancy",
  description: "Empowering Businesses to Reach New Digital Heights.",
    generator: 'v0.dev'
=======
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kaloyan Gantchev - IT Solutions & Web Development",
  description: "Professional IT services including web development, e-commerce solutions, business applications, and digital marketing & SEO. Transform your business with cutting-edge technology.",
  keywords: "web development, e-commerce, business applications, digital marketing, SEO, IT solutions",
  authors: [{ name: "Kaloyan Gantchev" }],
  creator: "Kaloyan Gantchev",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kaloyan.gantchev.com",
    siteName: "Kaloyan Gantchev - IT Solutions",
    title: "Kaloyan Gantchev - IT Solutions & Web Development",
    description: "Professional IT services including web development, e-commerce solutions, business applications, and digital marketing & SEO.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaloyan Gantchev - IT Solutions & Web Development",
    description: "Professional IT services including web development, e-commerce solutions, business applications, and digital marketing & SEO.",
  },
>>>>>>> a880ca2 (design)
}

export default function RootLayout({
  children,
<<<<<<< HEAD
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>{children}</body>
    </html>
  )
}
=======
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
>>>>>>> a880ca2 (design)
