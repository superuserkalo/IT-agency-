import Image from "next/image"
import { cn } from "@/lib/utils"

export function LogoIcon({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-6 h-6", className)}>
      <Image src="/logo-white.png" alt="Digital Heights Logo" fill className="object-contain" />
    </div>
  )
}
