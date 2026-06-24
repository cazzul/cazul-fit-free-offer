"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduceMotion) {
      setVisible(true)
      return
    }

    const onBeforePrint = () => setVisible(true)
    window.addEventListener("beforeprint", onBeforePrint)

    const el = ref.current
    if (!el) {
      return () => window.removeEventListener("beforeprint", onBeforePrint)
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0, rootMargin: "0px 0px 10% 0px" },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      window.removeEventListener("beforeprint", onBeforePrint)
    }
  }, [])

  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      } ${className}`}
    >
      {children}
    </Tag>
  )
}
