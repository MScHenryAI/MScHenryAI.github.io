"use client"

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  z: number
  originalX: number
  originalY: number
  originalZ: number
}

export function ParticleSphere() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let mouseX = 0
    let mouseY = 0
    let isHovering = false

    const resize = () => {
      const container = canvas.parentElement
      if (!container) return
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    resize()
    window.addEventListener('resize', resize)

    // Create particles in a sphere shape
    const particles: Particle[] = []
    const particleCount = 800
    const radius = Math.min(canvas.width, canvas.height) * 0.3

    for (let i = 0; i < particleCount; i++) {
      // Fibonacci sphere distribution
      const phi = Math.acos(-1 + (2 * i) / particleCount)
      const theta = Math.sqrt(particleCount * Math.PI) * phi
      
      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)
      
      particles.push({
        x, y, z,
        originalX: x,
        originalY: y,
        originalZ: z,
      })
    }

    let rotationX = 0
    let rotationY = 0
    let targetRotationX = 0
    let targetRotationY = 0

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left - rect.width / 2
      mouseY = e.clientY - rect.top - rect.height / 2
      targetRotationX = mouseY * 0.0003
      targetRotationY = mouseX * 0.0003
    }

    const handleMouseEnter = () => { isHovering = true }
    const handleMouseLeave = () => { isHovering = false }

    canvas.addEventListener('mousemove', handleMouseMove)
    canvas.addEventListener('mouseenter', handleMouseEnter)
    canvas.addEventListener('mouseleave', handleMouseLeave)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Smooth rotation
      if (isHovering) {
        rotationX += (targetRotationX - rotationX) * 0.05
        rotationY += (targetRotationY - rotationY) * 0.05
      } else {
        rotationY += 0.002
        rotationX = Math.sin(Date.now() * 0.0005) * 0.1
      }

      const centerX = canvas.width / 2
      const centerY = canvas.height / 2

      // Sort particles by z for proper depth rendering
      const sortedParticles = particles.map((p, i) => {
        // Apply rotation
        const cosX = Math.cos(rotationX)
        const sinX = Math.sin(rotationX)
        const cosY = Math.cos(rotationY)
        const sinY = Math.sin(rotationY)

        // Rotate around X axis
        const y = p.originalY * cosX - p.originalZ * sinX
        let z = p.originalY * sinX + p.originalZ * cosX

        // Rotate around Y axis
        const x = p.originalX * cosY + z * sinY
        z = -p.originalX * sinY + z * cosY

        return { x, y, z, index: i }
      }).sort((a, b) => a.z - b.z)

      // Draw particles
      sortedParticles.forEach(({ x, y, z }) => {
        const scale = (z + radius * 1.5) / (radius * 3)
        const size = Math.max(0.5, scale * 3)
        const alpha = Math.max(0.1, scale * 0.8)

        // Color gradient based on position
        const hue = 220 + (z / radius) * 20 // Blue range
        const saturation = 80
        const lightness = 50 + scale * 20

        ctx.beginPath()
        ctx.arc(centerX + x, centerY + y, size, 0, Math.PI * 2)
        ctx.fillStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha})`
        ctx.fill()

        // Glow effect for front particles
        if (z > 0) {
          ctx.beginPath()
          ctx.arc(centerX + x, centerY + y, size * 2, 0, Math.PI * 2)
          const gradient = ctx.createRadialGradient(
            centerX + x, centerY + y, 0,
            centerX + x, centerY + y, size * 2
          )
          gradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness}%, ${alpha * 0.3})`)
          gradient.addColorStop(1, 'transparent')
          ctx.fillStyle = gradient
          ctx.fill()
        }
      })

      // Draw connections between nearby particles
      ctx.strokeStyle = 'rgba(100, 150, 255, 0.05)'
      ctx.lineWidth = 0.5
      
      for (let i = 0; i < sortedParticles.length; i += 3) {
        for (let j = i + 1; j < sortedParticles.length; j += 3) {
          const dx = sortedParticles[i].x - sortedParticles[j].x
          const dy = sortedParticles[i].y - sortedParticles[j].y
          const dz = sortedParticles[i].z - sortedParticles[j].z
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (distance < radius * 0.3) {
            ctx.beginPath()
            ctx.moveTo(centerX + sortedParticles[i].x, centerY + sortedParticles[i].y)
            ctx.lineTo(centerX + sortedParticles[j].x, centerY + sortedParticles[j].y)
            ctx.stroke()
          }
        }
      }

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', handleMouseMove)
      canvas.removeEventListener('mouseenter', handleMouseEnter)
      canvas.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ background: 'transparent' }}
    />
  )
}
