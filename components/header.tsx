"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedBurgerIcon } from "./icons/animated-burger-icon"
import { ChevronDown } from "lucide-react"

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

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Reset mobile services dropdown when main menu closes
  useEffect(() => {
    if (!isMenuOpen) {
      setIsMobileServicesOpen(false)
    }
  }, [isMenuOpen])

  const navLinks = [
    { href: "#faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ]

  const serviceLinks = [
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/ecommerce", label: "E-Commerce" },
    { href: "/services/business-applications", label: "Business Applications" },
    { href: "/services/marketing-seo", label: "Marketing & SEO" },
  ]

  // Hover-based Services Dropdown
  const handleServicesMouseEnter = () => {
    if (servicesTimeoutRef.current) {
      clearTimeout(servicesTimeoutRef.current)
    }
    setIsServicesOpen(true)
  }

  const handleServicesMouseLeave = () => {
    servicesTimeoutRef.current = setTimeout(() => {
      setIsServicesOpen(false)
    }, 150)
  }

  const ServicesDropdown = () => (
    <div className="relative" onMouseEnter={handleServicesMouseEnter} onMouseLeave={handleServicesMouseLeave}>
      <button className="text-gray-300 hover:text-white transition-colors text-sm font-medium cursor-pointer relative group">
        Services
        <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300" />
      </button>
      
      {isServicesOpen && (
        <div className={cn(
          "absolute top-full left-1/2 -translate-x-1/2 mt-6 border border-gray-800 text-gray-200 rounded-md shadow-lg min-w-[200px] py-2 z-50 transition-all duration-300",
          isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-black/90 backdrop-blur-lg"
        )}>
          {serviceLinks.map((service) => (
            <Link
              key={service.href}
              href={service.href}
              className="block mx-2 px-3 py-2 text-gray-200 hover:bg-purple-500/20 hover:text-white transition-colors cursor-pointer rounded-md"
            >
              {service.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  )

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "bg-black/80 backdrop-blur-sm" : "bg-transparent",
        )}
      >
        <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4 md:px-6">
          <Link href="/" className="flex items-center cursor-pointer group" prefetch={false}>
            <span className="font-light text-lg sm:text-xl text-white tracking-widest hover:text-white transition-colors duration-300 relative">
              kaloyan.gantchev
              <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300" />
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <ServicesDropdown />
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-white transition-colors duration-300 relative group cursor-pointer"
                prefetch={false}
              >
                {link.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>
          
          <div className="md:hidden flex items-center gap-4">
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
              className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-0 right-0 h-full w-[85vw] max-w-sm bg-black/70 backdrop-blur-xl z-40 border-l border-gray-700/50 safe-area-inset-right"
            >
              <motion.nav
                variants={navContainerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                className="flex flex-col items-center justify-center h-full gap-8"
              >
                {/* Enhanced Mobile Services Section */}
                <motion.div variants={navItemVariants} className="text-center">
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="flex items-center gap-2 py-4 text-2xl sm:text-3xl font-semibold transition-colors hover:text-purple-400 active:text-purple-500 cursor-pointer touch-manipulation"
                  >
                    Services
                    <motion.div
                      animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-6 w-6" />
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-2 mt-4">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.href}
                              href={service.href}
                              onClick={() => {
                                setIsMenuOpen(false)
                                setIsMobileServicesOpen(false)
                              }}
                              className="py-2 text-lg sm:text-xl text-gray-300 hover:text-purple-400 active:text-purple-500 transition-colors cursor-pointer touch-manipulation"
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Other Nav Links */}
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={navItemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="inline-block w-full py-4 text-2xl sm:text-3xl font-semibold transition-colors hover:text-purple-400 active:text-purple-500 cursor-pointer touch-manipulation"
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