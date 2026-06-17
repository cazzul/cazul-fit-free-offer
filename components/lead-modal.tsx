"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import {
  getEmailError,
  getInstagramError,
  normalizeEmail,
  normalizeInstagram,
} from "@/lib/lead-validation"

type Props = {
  onUnlock: () => void
}

const FOCUSABLE =
  'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'

export function LeadModal({ onUnlock }: Props) {
  const dialogRef = useRef<HTMLDivElement>(null)
  const [nombre, setNombre] = useState("")
  const [email, setEmail] = useState("")
  const [instagram, setInstagram] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const validate = () => {
    if (!nombre.trim()) return "Escribe tu nombre."
    const emailError = getEmailError(email)
    if (emailError) return emailError
    const instagramError = getInstagramError(instagram)
    if (instagramError) return instagramError
    return null
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }
    setError(null)
    setLoading(true)

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nombre: nombre.trim(),
          email: normalizeEmail(email),
          instagram: normalizeInstagram(instagram),
        }),
      })

      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null
        setError(data?.error ?? "No se pudo enviar el formulario. Intenta otra vez.")
        return
      }

      onUnlock()
    } catch {
      // Don't block UX on network errors — still unlock so the guide is usable.
      onUnlock()
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = ""
    }
  }, [])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const focusables = () => Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE))
    const first = focusables()[0]
    first?.focus()

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return
      const items = focusables()
      if (items.length === 0) return
      const firstEl = items[0]
      const lastEl = items[items.length - 1]
      if (e.shiftKey && document.activeElement === firstEl) {
        e.preventDefault()
        lastEl.focus()
      } else if (!e.shiftKey && document.activeElement === lastEl) {
        e.preventDefault()
        firstEl.focus()
      }
    }

    dialog.addEventListener("keydown", onKeyDown)
    return () => dialog.removeEventListener("keydown", onKeyDown)
  }, [])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-5 py-8"
      role="presentation"
    >
      <div className="absolute inset-0 bg-background/40 backdrop-blur-md" aria-hidden="true" />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
        className="relative z-10 w-full max-w-md rounded-sm bg-[#0E0E0E] px-6 py-8 text-white shadow-2xl sm:px-8 sm:py-10"
      >
        <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-white/55">
          Por Yadiel Casul · @cazul.fit
        </p>

        <h2
          id="lead-modal-title"
          className="mt-5 text-center font-display text-[1.65rem] leading-[1.15] tracking-tight sm:text-3xl"
        >
          Lo que otros cobran cientos de dólares, yo te lo acabo de dar gratis.
        </h2>

        <p className="mt-4 text-center text-sm leading-relaxed text-white/55">
          Lee la guía completa, gratis.
        </p>

        <div className="mt-3 flex justify-center text-white/35" aria-hidden="true">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M10 4v10M10 14l-4-4M10 14l4-4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3 text-left" noValidate>
          <div className="flex flex-col gap-2">
            <label htmlFor="modal-nombre" className="sr-only">
              Nombre
            </label>
            <input
              id="modal-nombre"
              type="text"
              placeholder="Nombre"
              autoComplete="name"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="h-12 w-full rounded-sm border border-white/15 bg-white/[0.03] px-4 text-base text-white placeholder:text-white/40 outline-none transition focus:border-white/50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="modal-email" className="sr-only">
              Email
            </label>
            <input
              id="modal-email"
              type="email"
              placeholder="Email"
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-12 w-full rounded-sm border border-white/15 bg-white/[0.03] px-4 text-base text-white placeholder:text-white/40 outline-none transition focus:border-white/50"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="modal-instagram" className="sr-only">
              Instagram
            </label>
            <input
              id="modal-instagram"
              type="text"
              placeholder="Instagram (sin el @)"
              autoComplete="username"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              value={instagram}
              onChange={(e) => setInstagram(e.target.value)}
              className="h-12 w-full rounded-sm border border-white/15 bg-white/[0.03] px-4 text-base text-white placeholder:text-white/40 outline-none transition focus:border-white/50"
            />
          </div>

          {error && (
            <p className="text-sm font-medium text-red-400" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-2 flex h-12 w-full items-center justify-center rounded-sm bg-white text-base font-semibold text-[#0E0E0E] transition hover:bg-white/90 disabled:opacity-60"
          >
            {loading ? "Cargando…" : "Acceder gratis"}
          </button>

          <p className="mt-1 text-center text-xs text-white/40">Te doy acceso al instante. Sin spam.</p>
        </form>
      </div>
    </div>
  )
}
