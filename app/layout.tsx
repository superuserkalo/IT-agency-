import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}