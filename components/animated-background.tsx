"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size with proper device pixel ratio handling
    const setCanvasSize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      
      // Set the internal size (in memory)
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      
      // Scale the canvas back down using CSS
      canvas.style.width = rect.width + 'px'
      canvas.style.height = rect.height + 'px'
      
      // Scale the drawing context so everything draws at the correct size
      ctx.scale(dpr, dpr)
      
      // Store actual display dimensions for calculations
      canvas.dataset.displayWidth = rect.width.toString()
      canvas.dataset.displayHeight = rect.height.toString()
    }
    setCanvasSize()

    // Particle system
    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      originalX: number
      originalY: number
      originalVx: number
      originalVy: number
      size: number
    }> = []

    // Create particles (reduce count on mobile for performance)
    const isMobile = window.innerWidth < 768
    const particleCount = isMobile ? 40 : 80
    
    // Get display dimensions for particle positioning
    const getDisplayWidth = () => parseFloat(canvas.dataset.displayWidth || '0') || window.innerWidth
    const getDisplayHeight = () => parseFloat(canvas.dataset.displayHeight || '0') || window.innerHeight
    
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * getDisplayWidth()
      const y = Math.random() * getDisplayHeight()
      const vx = (Math.random() - 0.5) * 0.5
      const vy = (Math.random() - 0.5) * 0.5
      particles.push({
        x: x,
        y: y,
        vx: vx,
        vy: vy,
        originalX: x,
        originalY: y,
        originalVx: vx,
        originalVy: vy,
        size: Math.random() * 2 + 1
      })
    }

    // Global mouse tracking for entire document
    const handleGlobalMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 }
    }

    // Add global mouse listeners
    document.addEventListener('mousemove', handleGlobalMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Animation loop
    const animate = () => {
      // Clear and fill background using display dimensions
      const displayWidth = getDisplayWidth()
      const displayHeight = getDisplayHeight()
      
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, displayWidth, displayHeight)
      
      const mouse = mouseRef.current
      
      // Update and draw particles
      particles.forEach(particle => {
        // Mouse repulsion effect (matching tsparticles behavior)
        const dx = particle.x - mouse.x
        const dy = particle.y - mouse.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        
        if (distance < 100 && mouse.x > -100) {
          // Strong repulsion force (similar to tsparticles)
          const force = (100 - distance) / 100
          const repelForce = force * force * 3 // Stronger repulsion
          particle.vx = particle.originalVx + (dx / distance) * repelForce
          particle.vy = particle.originalVy + (dy / distance) * repelForce
        } else {
          // Smooth return to original velocity
          particle.vx += (particle.originalVx - particle.vx) * 0.05
          particle.vy += (particle.originalVy - particle.vy) * 0.05
        }

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges using display dimensions
        const displayWidth = getDisplayWidth()
        const displayHeight = getDisplayHeight()
        
        if (particle.x <= 0 || particle.x >= displayWidth) {
          particle.vx *= -1
          particle.originalVx *= -1
          particle.x = Math.max(0, Math.min(displayWidth, particle.x))
        }
        if (particle.y <= 0 || particle.y >= displayHeight) {
          particle.vy *= -1
          particle.originalVy *= -1
          particle.y = Math.max(0, Math.min(displayHeight, particle.y))
        }

        // Draw particle with subtle glow
        ctx.fillStyle = 'rgba(255, 255, 255, 0.4)'
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw connecting lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)'
      ctx.lineWidth = 1
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(animate)
    }
    
    animate()

    // Handle resize
    const handleResize = () => {
      setCanvasSize()
      // Update particle bounds on resize using display dimensions
      const displayWidth = getDisplayWidth()
      const displayHeight = getDisplayHeight()
      particles.forEach(particle => {
        if (particle.x > displayWidth) particle.x = displayWidth
        if (particle.y > displayHeight) particle.y = displayHeight
      })
    }
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('mousemove', handleGlobalMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/2 via-transparent to-transparent" />
    </div>
  )
}