"use client"

import { useEffect, useState } from "react"
import { HeroBackground } from "@/components/hero-background"

const includes = [
  {
    label: "NUTRICIÓN",
    text: "Calcula tus calorías, entiende tu déficit y escoge las comidas correctas.",
  },
  {
    label: "ENTRENAMIENTO",
    text: "Entiende los rangos de reps y el volumen, el descanso y la selección de ejercicios.",
  },
  {
    label: "MI PLAN",
    text: "Mi enfoque, mi plan de comidas y mi plan de entrenamiento.",
  },
]

export function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) {
      setVisible(true)
      return
    }

    const onBeforePrint = () => setVisible(true)
    window.addEventListener("beforeprint", onBeforePrint)

    const t = requestAnimationFrame(() => setVisible(true))
    return () => {
      cancelAnimationFrame(t)
      window.removeEventListener("beforeprint", onBeforePrint)
    }
  }, [])

  return (
    <section className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-background px-5 py-24">
      <HeroBackground />

      <div className="relative z-10 mx-auto w-full max-w-[720px]">
        <p
          className={`mb-6 inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <span className="h-px w-8 bg-foreground/30" />
          Yadiel Casul · @cazul.fit
        </p>

        <h1
          className={`font-display text-[clamp(2.25rem,10vw,4.25rem)] leading-[0.95] font-normal tracking-tight transition-all duration-1000 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span className="block">GUÍA DE</span>
          <span className="block">ENTRENAMIENTO</span>
          <span className="block">Y NUTRICIÓN</span>
        </h1>

        <p
          className={`mt-6 max-w-lg text-[17px] leading-relaxed text-muted-foreground transition-all duration-700 delay-150 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Hecha por mí para ayudarte a ti. Si tienes alguna pregunta, escríbeme por DM en Instagram.
        </p>

        <div
          className={`mt-12 transition-all duration-700 delay-300 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Lo que incluye
          </p>
          <ul className="flex flex-col gap-5">
            {includes.map((item) => (
              <li key={item.label}>
                <p className="text-sm font-bold uppercase tracking-[0.08em]">{item.label}</p>
                <p className="mt-1 text-[16px] leading-relaxed text-foreground">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
