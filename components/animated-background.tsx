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

    // Set canvas size with proper device pixel ratio handling for full viewport
    const setCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1
      const width = window.innerWidth
      const height = window.innerHeight
      
      // Set the internal size (in memory)
      canvas.width = width * dpr
      canvas.height = height * dpr
      
      // Scale the canvas back down using CSS
      canvas.style.width = width + 'px'
      canvas.style.height = height + 'px'
      
      // Scale the drawing context so everything draws at the correct size
      ctx.scale(dpr, dpr)
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
    
    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * window.innerWidth
      const y = Math.random() * window.innerHeight
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
      // Clear and fill background using window dimensions
      ctx.fillStyle = '#000000'
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
      
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

        // Bounce off edges using window dimensions
        if (particle.x <= 0 || particle.x >= window.innerWidth) {
          particle.vx *= -1
          particle.originalVx *= -1
          particle.x = Math.max(0, Math.min(window.innerWidth, particle.x))
        }
        if (particle.y <= 0 || particle.y >= window.innerHeight) {
          particle.vy *= -1
          particle.originalVy *= -1
          particle.y = Math.max(0, Math.min(window.innerHeight, particle.y))
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
      // Update particle bounds on resize using window dimensions
      particles.forEach(particle => {
        if (particle.x > window.innerWidth) particle.x = window.innerWidth
        if (particle.y > window.innerHeight) particle.y = window.innerHeight
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