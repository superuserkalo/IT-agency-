import Link from "next/link"
import { Instagram, Linkedin } from "lucide-react"
import { XLogo } from "./icons/x-logo"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20 relative z-10">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="w-full flex flex-col md:flex-row md:relative items-center justify-between gap-8">
            <Link href="/" className="flex items-center" prefetch={false}>
              <span className="font-light text-xl text-white tracking-widest">kaloyan.gantchev</span>
            </Link>

            <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm md:absolute md:left-1/2 md:-translate-x-1/2">
              {/* Temporarily hidden for client presentation */}
              {/* <Link href="/about" className="text-gray-400 hover:text-white transition-colors" prefetch={false}>
                About Me
              </Link> */}
              <Link href="/imprint" className="text-gray-400 hover:text-white transition-colors" prefetch={false}>
                Imprint
              </Link>
              {/* <Link href="/terms" className="text-gray-400 hover:text-white transition-colors" prefetch={false}>
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors" prefetch={false}>
                Privacy
              </Link> */}
            </nav>

            <div className="flex gap-4 items-center">
              {/* Temporarily hidden for client presentation */}
              {/* <Link href="https://twitter.com" aria-label="X" className="text-gray-400 hover:text-white hover:scale-110 transition-all" target="_blank" rel="noopener noreferrer">
                <XLogo className="h-4 w-4" />
              </Link> */}
              <Link
                href="https://www.instagram.com/tsarkalo?igsh=eWpjcGx1NGNjY29w&utm_source=qr"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white hover:scale-110 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/kaloyan-gantchev-91b820312/"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white hover:scale-110 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />

          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} kaloyan.gantchev. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}