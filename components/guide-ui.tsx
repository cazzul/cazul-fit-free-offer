import type React from "react"

export function SectionKicker({ number, label }: { number: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
      <span className="h-px w-8 bg-foreground/30" />
      {number} · {label}
    </span>
  )
}

export function SectionBar({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block bg-foreground px-3 py-1.5 text-xs font-bold uppercase tracking-[0.15em] text-background">
      {children}
    </span>
  )
}

export function Callout({ title, children, className = "" }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={`my-7 border-l-2 border-primary bg-muted px-5 py-4 ${className}`}>
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-foreground">{title}</p>
      <p className="mt-2 text-[16px] leading-relaxed text-foreground">{children}</p>
    </div>
  )
}

export function DataTable({
  columns,
  rows,
}: {
  columns: [string, string]
  rows: Array<[string, string]>
}) {
  return (
    <div className="my-6 overflow-hidden border border-border">
      <table className="w-full border-collapse text-left text-[16px]">
        <thead>
          <tr className="bg-foreground text-background">
            <th className="px-4 py-2.5 font-semibold">{columns[0]}</th>
            <th className="px-4 py-2.5 font-semibold">{columns[1]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i % 2 === 1 ? "bg-muted" : "bg-background"}>
              <td className="border-t border-border px-4 py-2.5 align-top text-foreground">{row[0]}</td>
              <td className="border-t border-border px-4 py-2.5 align-top text-foreground">{row[1]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function WideDataTable({
  columns,
  rows,
  boldLastRow,
}: {
  columns: string[]
  rows: string[][]
  boldLastRow?: boolean
}) {
  return (
    <div className="my-6 overflow-x-auto border border-border">
      <table className="w-full min-w-[640px] border-collapse text-left text-[15px]">
        <thead>
          <tr className="bg-foreground text-background">
            {columns.map((col) => (
              <th key={col} className="px-3 py-2.5 font-semibold sm:px-4">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const isLast = boldLastRow && i === rows.length - 1
            return (
              <tr key={i} className={i % 2 === 1 ? "bg-muted" : "bg-background"}>
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`border-t border-border px-3 py-2.5 align-top text-foreground sm:px-4 ${isLast ? "font-semibold" : ""}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export function PasoKicker({ step }: { step: number }) {
  return (
    <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Paso {step}</p>
  )
}

export function RuleText({ text }: { text: string }) {
  const dotIndex = text.indexOf(". ")
  if (dotIndex === -1) {
    return <span className="font-semibold">{text}</span>
  }
  const first = text.slice(0, dotIndex + 1)
  const rest = text.slice(dotIndex + 2)
  return (
    <>
      <span className="font-semibold">{first}</span>
      {rest ? ` ${rest}` : null}
    </>
  )
}
