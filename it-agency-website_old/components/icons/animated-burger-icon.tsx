"use client"

import { motion } from "framer-motion"

const barVariants = {
  top: {
    open: { rotate: 45, y: 8 },
    closed: { rotate: 0, y: 0 },
  },
  middle: {
    open: { opacity: 0 },
    closed: { opacity: 1 },
  },
  bottom: {
    open: { rotate: -45, y: -8 },
    closed: { rotate: 0, y: 0 },
  },
}

export function AnimatedBurgerIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div className="w-8 h-8 relative">
      <motion.span
        className="absolute h-0.5 w-full bg-white"
        style={{ top: "7px", left: 0 }}
        variants={barVariants.top}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute h-0.5 w-full bg-white"
        style={{ top: "15px", left: 0 }}
        variants={barVariants.middle}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      <motion.span
        className="absolute h-0.5 w-full bg-white"
        style={{ top: "23px", left: 0 }}
        variants={barVariants.bottom}
        animate={isOpen ? "open" : "closed"}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
    </div>
  )
}
