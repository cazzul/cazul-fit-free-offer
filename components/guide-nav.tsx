"use client"

import { useEffect, useState } from "react"
import { BackToHomeButton } from "@/components/back-to-home-button"
import { ThemeToggle } from "@/components/theme-toggle"

const SECTIONS = [
  { id: "entrenamiento", label: "Entrenamiento" },
  { id: "nutricion", label: "Nutrición" },
  { id: "mi-plan", label: "Mi Plan" },
  { id: "siguiente", label: "Lo que sigue" },
] as const

export function GuideNav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState<string>("entrenamiento")

  const handleJump = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  useEffect(() => {
    if (menuOpen) {
      const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false)
      window.addEventListener("keydown", onKey)
      return () => window.removeEventListener("keydown", onKey)
    }
  }, [menuOpen])

  useEffect(() => {
    const ids = SECTIONS.map((s) => s.id)
    const elements = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible.length > 0) {
          setActiveId(visible[0].target.id)
        }
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const navLinkClass = (id: string) =>
    `rounded-sm px-3 py-1.5 text-sm font-medium transition ${
      activeId === id
        ? "bg-foreground text-background"
        : "text-foreground hover:bg-muted"
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[720px] items-center justify-between px-5 pt-3.5">
        <BackToHomeButton />
        <ThemeToggle />
      </div>
      <nav className="mx-auto flex max-w-[720px] items-center justify-between px-5 py-3.5">
        <span className="font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-foreground sm:text-xs">
          Guía de Entrenamiento y Nutrición
        </span>

        <ul className="hidden items-center gap-1 sm:flex">
          {SECTIONS.map((item) => (
            <li key={item.id}>
              <button onClick={() => handleJump(item.id)} className={navLinkClass(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-border sm:hidden"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <div className="flex flex-col gap-1">
            <span className="h-0.5 w-4 bg-foreground" />
            <span className="h-0.5 w-4 bg-foreground" />
            <span className="h-0.5 w-4 bg-foreground" />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-border bg-background sm:hidden">
          <ul className="mx-auto flex max-w-[720px] flex-col px-5 py-2">
            {SECTIONS.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleJump(item.id)}
                  className={`w-full py-2.5 text-left text-sm font-medium ${
                    activeId === item.id ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
