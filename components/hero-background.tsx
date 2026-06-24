"use client"

import { useEffect, useRef } from "react"

/**
 * Subtle dark particle field + grid lines for the white hero.
 * Adapted from the reference site's animated hero treatment.
 */
export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    let rafId = 0

    type P = { x: number; y: number; vx: number; vy: number; r: number; a: number }
    let particles: P[] = []

    const buildParticles = () => {
      const count = Math.min(55, Math.floor((width * height) / 18000))
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 1.2 + 0.3,
        a: Math.random() * 0.25 + 0.08,
      }))
    }

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      buildParticles()
    }

    const drawStatic = () => {
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,0,0,${p.a})`
        ctx.fill()
      }
    }

    const connectDistance = 110

    const tick = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > width) p.vx *= -1
        if (p.y < 0 || p.y > height) p.vy *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,0,0,${p.a})`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const q = particles[j]
          const dx = p.x - q.x
          const dy = p.y - q.y
          const dist = Math.hypot(dx, dy)
          if (dist < connectDistance) {
            const o = (1 - dist / connectDistance) * 0.08
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(q.x, q.y)
            ctx.strokeStyle = `rgba(0,0,0,${o})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      rafId = requestAnimationFrame(tick)
    }

    resize()
    window.addEventListener("resize", resize)

    if (reduceMotion) {
      drawStatic()
    } else {
      rafId = requestAnimationFrame(tick)
    }

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Subtle grid lines */}
      <div className="absolute inset-0 opacity-25">
        {[...Array(8)].map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute right-0 left-0 h-px bg-foreground/10"
            style={{ top: `${12.5 * (i + 1)}%` }}
          />
        ))}
        {[...Array(12)].map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 w-px bg-foreground/10"
            style={{ left: `${8.33 * (i + 1)}%` }}
          />
        ))}
      </div>
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  )
}
