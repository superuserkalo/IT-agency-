"use client"

<<<<<<< HEAD
import { useState, useEffect } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { LogoIcon } from "./icons/logo-icon"
import { AnimatedBurgerIcon } from "./icons/animated-burger-icon"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
=======
import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { AnimatedBurgerIcon } from "./icons/animated-burger-icon"
>>>>>>> a880ca2 (design)
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
<<<<<<< HEAD
  const [language, setLanguage] = useState("DE")
=======
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isServicesHovered, setIsServicesHovered] = useState(false)
  const hoverTimeoutRef = useRef(null)
>>>>>>> a880ca2 (design)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

<<<<<<< HEAD
  const navLinks = [
    { href: "#services", label: "Services" },
=======
  // Reset mobile services dropdown when main menu closes
  useEffect(() => {
    if (!isMenuOpen) {
      setIsMobileServicesOpen(false)
    }
  }, [isMenuOpen])

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  const navLinks = [
>>>>>>> a880ca2 (design)
    { href: "#faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ]

<<<<<<< HEAD
  const LanguageSwitcher = () => (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors text-sm font-medium outline-none">
        {language}
        <ChevronDown className="h-4 w-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-black/50 backdrop-blur-lg border-gray-800 text-gray-200 min-w-[80px]">
        <DropdownMenuItem
          onClick={() => setLanguage("DE")}
          className="cursor-pointer focus:bg-purple-500/20 focus:text-white"
        >
          DE
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setLanguage("EN")}
          className="cursor-pointer focus:bg-purple-500/20 focus:text-white"
        >
          EN
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
=======
  const serviceLinks = [
    { href: "/services/web-development", label: "Web Development" },
    { href: "/services/ecommerce", label: "E-Commerce" },
    { href: "/services/business-applications", label: "Business Applications" },
    { href: "/services/marketing-seo", label: "Marketing & SEO" },
  ]

  const ServicesDropdown = () => {
    const handleMouseEnter = () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
      setIsServicesHovered(true)
    }
    
    const handleMouseLeave = () => {
      hoverTimeoutRef.current = setTimeout(() => {
        setIsServicesHovered(false)
      }, 150)
    }

    return (
      <div 
        className="relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <span className="text-gray-300 hover:text-white transition-colors text-sm font-medium cursor-pointer relative group">
          Services
          <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300" />
        </span>
        
        <AnimatePresence>
          {isServicesHovered && (
            <>
              {/* Bridge element to prevent hover gaps */}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-[200px] h-8 z-40" />
              
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-8 bg-black/50 backdrop-blur-lg border border-gray-800 rounded-lg shadow-lg min-w-[200px] py-1 z-50"
              >
                {serviceLinks.map((service, index) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-4 py-2 mx-1 my-0.5 text-gray-200 hover:bg-purple-500/20 hover:text-white transition-colors rounded-md cursor-pointer"
                  >
                    {service.label}
                  </Link>
                ))}
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    )
  }

>>>>>>> a880ca2 (design)

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
<<<<<<< HEAD
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <LogoIcon />
            <span className="font-bold text-xl text-white">Digital Heights</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
=======
          <Link href="/" className="flex items-center cursor-pointer" prefetch={false}>
            <span className="font-light text-xl text-white tracking-widest">kaloyan.gantchev</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <ServicesDropdown />
>>>>>>> a880ca2 (design)
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
<<<<<<< HEAD
                className="text-gray-300 hover:text-white transition-colors relative group"
=======
                className="text-gray-300 hover:text-white transition-colors relative group cursor-pointer"
>>>>>>> a880ca2 (design)
                prefetch={false}
              >
                {link.label}
                <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
<<<<<<< HEAD
            <LanguageSwitcher />
          </nav>
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
=======
          </nav>
          <div className="md:hidden flex items-center gap-4">
>>>>>>> a880ca2 (design)
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
<<<<<<< HEAD
=======
                {/* Services Section */}
                <motion.div variants={navItemVariants} className="text-center">
                  <button
                    onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                    className="flex items-center gap-2 py-4 text-3xl font-semibold transition-colors hover:text-purple-400"
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
                              className="py-2 text-xl text-gray-300 hover:text-purple-400 transition-colors cursor-pointer"
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
>>>>>>> a880ca2 (design)
                {navLinks.map((link) => (
                  <motion.div key={link.href} variants={navItemVariants}>
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
<<<<<<< HEAD
                      className="inline-block w-full py-4 text-3xl font-semibold transition-colors hover:text-purple-400"
=======
                      className="inline-block w-full py-4 text-3xl font-semibold transition-colors hover:text-purple-400 cursor-pointer"
>>>>>>> a880ca2 (design)
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
