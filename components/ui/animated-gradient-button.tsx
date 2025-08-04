import { cn } from "@/lib/utils"
import type React from "react"

export const AnimatedGradientButton = ({
  children,
  className,
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
    </div>
  )
}
