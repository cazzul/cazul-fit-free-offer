"use client"

import { cn } from "@/lib/utils"

type Props = {
  className?: string
}

export function GuideDownloadButton({ className }: Props) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className={cn(
        "no-print rounded-sm border border-border bg-background/90 px-3 py-2 font-mono text-[10px] font-medium uppercase leading-tight tracking-[0.12em] text-foreground backdrop-blur-sm transition hover:bg-muted sm:px-3.5 sm:py-1.5 sm:text-xs",
        className,
      )}
    >
      DESCARGA LA GUIA EN TU DISPOSITIVO
    </button>
  )
}
