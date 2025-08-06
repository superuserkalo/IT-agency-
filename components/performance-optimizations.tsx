"use client"

import { useEffect } from "react"

// ENHANCED Performance optimization utilities for mobile
export const PerformanceOptimizations = () => {
  useEffect(() => {
    // Disable heavy animations on low-end devices
    const isLowEndDevice = () => {
      return (
        navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4 ||
        (navigator as any).deviceMemory && (navigator as any).deviceMemory <= 4 ||
        /Android.*(4\.[0-4]|5\.[01])|iPhone.*(5|6)/.test(navigator.userAgent)
      )
    }

    if (isLowEndDevice()) {
      document.documentElement.classList.add('reduce-motion')
    }

    // Add passive event listeners for better scroll performance
    const addPassiveEventListeners = () => {
      const passiveEvents = ['touchstart', 'touchmove', 'wheel', 'mousewheel']
      passiveEvents.forEach(event => {
        document.addEventListener(event, () => {}, { passive: true })
      })
    }

    addPassiveEventListeners()

    // Preload critical fonts
    if ('fonts' in document && 'load' in document.fonts) {
      document.fonts.load('16px Inter').then(() => {
        document.documentElement.classList.add('fonts-loaded')
      })
    }

    // Enable GPU acceleration for smooth animations
    const enableGPUAcceleration = () => {
      const animatedElements = document.querySelectorAll('[class*="motion"]')
      animatedElements.forEach(el => {
        const element = el as HTMLElement
        element.style.willChange = 'transform'
        element.style.backfaceVisibility = 'hidden'
      })
    }

    enableGPUAcceleration()

    // Cleanup function
    return () => {
      const animatedElements = document.querySelectorAll('[class*="motion"]')
      animatedElements.forEach(el => {
        const element = el as HTMLElement
        element.style.willChange = 'auto'
      })
    }
  }, [])

  return null
}

// Hook for responsive behavior
export const useResponsive = () => {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  const isTablet = typeof window !== 'undefined' && window.innerWidth >= 768 && window.innerWidth < 1024
  const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 1024

  return { isMobile, isTablet, isDesktop }
}

// Enhanced touch-friendly button component
export const TouchOptimizedButton = ({ 
  children, 
  className, 
  ...props 
}: {
  children: React.ReactNode
  className?: string
  [key: string]: any
}) => {
  return (
    <button
      className={`touch-manipulation select-none active:scale-95 transition-transform duration-100 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}