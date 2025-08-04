"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { LogoIcon } from "./icons/logo-icon"
import { AnimatedBurgerIcon } from "./icons/animated-burger-icon"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown } from "lucide-react"
import { useTranslations, useLocale } from "next-intl"
import { createNavigation } from "next-intl/navigation"

const menuVariants = {
  hidden: {
    x: "100%",
    transition: { type: "tween", ease: "easeInOut", duration: 0.4 },
  },
  visible: {
    x: 0,
    transition: { type: "tween", ease: "easeInOut", duration: 0.4 },
  },
}

const navContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.3,
    },
  },
}

const navItemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 100 } },
}

const locales = ["de", "en"]
const { usePathname, useRouter, Link } = createNavigation({ locales })

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations("Header")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#services", label: t("services") },
    { href: "#faq", label: t("faq") },
    { href: "/contact", label: t("contact") },
  ]

  const changeLocale = (lng: string) => {
    router.replace(pathname, { locale: lng })
  }

  const LanguageSwitcher = () => (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors text-sm font-medium outline-none">
        {locale.toUpperCase()}
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black/50 backdrop-blur-lg border-gray-800 text-gray-200 min-w-[80px]">
        <DropdownMenuItem
          onClick={() => changeLocale("de")}
          className="cursor-pointer focus:bg-purple-500/20 focus:text-white"
        >
          DE
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => changeLocale("en")}
          className="cursor-pointer focus:bg-purple-500/20 focus:text-white"
        >
          EN
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-black/50 backdrop-blur-lg border-b border-gray-800" : "bg-transparent",
        )}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <LogoIcon />
            <span className="font-bold text-xl text-white">Digital Heights</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors relative group"
                prefetch={false}
              >
                {link.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            <LanguageSwitcher />
          </nav>
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 z-50 relative"
              aria-label="Toggle navigation menu"
            >
              <AnimatedBurgerIcon isOpen={isMenuOpen} />
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-30"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-0 right-0 h-full w-[80vw] max-w-sm bg-black/40 backdrop-blur-xl z-40"
            >
              <motion.nav
                variants={navContainerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col items-center justify-center h-full gap-8"
              >
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={navItemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="inline-block w-full py-4 text-3xl font-semibold transition-colors hover:text-purple-400"
                      prefetch={false}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
