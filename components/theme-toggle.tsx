"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

type Props = {
  className?: string
}

export function ThemeToggle({ className }: Props) {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = resolvedTheme === "dark"

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? (isDark ? "Activar modo claro" : "Activar modo oscuro") : "Cambiar tema"}
      className={cn(
        "inline-flex h-9 w-9 shrink-0 items-center justify-center border border-border text-muted transition-colors hover:border-primary/40 hover:text-primary",
        className
      )}
    >
      {mounted ? (
        isDark ? (
          <Sun size={16} strokeWidth={1.75} />
        ) : (
          <Moon size={16} strokeWidth={1.75} />
        )
      ) : (
        <span className="h-4 w-4" aria-hidden />
      )}
    </button>
  )
}
