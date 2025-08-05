import { cn } from "@/lib/utils"
import type React from "react"
<<<<<<< HEAD
=======
import { useState, useRef, useCallback, cloneElement, isValidElement } from "react"
>>>>>>> a880ca2 (design)

export const AnimatedGradientButton = ({
  children,
  className,
<<<<<<< HEAD
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-full p-0.5 text-sm font-medium text-gray-50 transition-all duration-300 hover:scale-105",
        className,
      )}
    >
      <span className="absolute h-full w-full bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-500 group-hover:from-purple-600/80 group-hover:via-blue-500/80 group-hover:to-indigo-500/80" />
      <span className="relative rounded-full px-6 py-3 transition-all duration-200 ease-out bg-gray-900 group-hover:bg-opacity-90">
        {children}
      </span>
=======
  asChild = false,
  size = "default",
}: {
  children: React.ReactNode
  className?: string
  asChild?: boolean
  size?: "default" | "sm" | "lg" | "xl"
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const buttonRef = useRef<HTMLElement>(null)

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (!buttonRef.current) return

    const rect = buttonRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }, [])

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  const sizeClasses = {
    default: "p-0.5 text-sm",
    sm: "p-0.5 text-sm",
    lg: "p-1 text-base",
    xl: "p-1 text-lg",
  }

  const innerSizeClasses = {
    default: "px-6 py-3",
    sm: "px-5 py-2.5",
    lg: "px-8 py-4", 
    xl: "px-10 py-5",
  }

  const buttonClasses = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium text-gray-50 transition-all duration-300 hover:scale-105 cursor-pointer",
    sizeClasses[size],
    className,
  )

  const content = (
    <>
      <span className="absolute h-full w-full bg-gradient-to-br from-purple-600 via-blue-500 to-indigo-500 group-hover:from-purple-600/80 group-hover:via-blue-500/80 group-hover:to-indigo-500/80" />
      <span className={cn("relative rounded-full transition-all duration-200 ease-out bg-gray-900 group-hover:bg-opacity-90 w-full h-full flex items-center justify-center", innerSizeClasses[size])}>
        {/* Mouse-tracking glass effect */}
        {isHovered && (
          <span
            className="absolute w-20 h-20 bg-white/25 rounded-full blur-lg pointer-events-none"
            style={{
              left: mousePosition.x - 40,
              top: mousePosition.y - 40,
            }}
          />
        )}
        <span className="relative z-10">{asChild ? (isValidElement(children) ? children.props.children : children) : children}</span>
      </span>
    </>
  )

  if (asChild && isValidElement(children)) {
    return cloneElement(children, {
      ...children.props,
      ref: buttonRef,
      className: cn(buttonClasses, children.props.className),
      onMouseMove: handleMouseMove,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      children: content,
    })
  }

  return (
    <div
      ref={buttonRef}
      className={buttonClasses}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {content}
>>>>>>> a880ca2 (design)
    </div>
  )
}
