import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { cn } from "@/lib/utils"
import { NextIntlClientProvider } from "next-intl"
import { notFound } from "next/navigation"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Digital Heights - IT Agency & Consultancy",
  description: "Empowering Businesses to Reach New Digital Heights.",
  generator: "v0.dev",
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  let messages
  try {
    messages = (await import(`@/messages/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale} className="dark">
      <body className={cn("min-h-screen bg-background font-sans antialiased", inter.variable)}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
