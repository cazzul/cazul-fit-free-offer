"use client"

import { useMemo, useState } from "react"

const DEFAULT_MAINTENANCE = "2500"

const DEFICITS = [
  { kcal: 250, rate: "Lento", rateNote: "Sostenible, para quien quiere ir con calma" },
  { kcal: 500, rate: "Buena tasa", rateNote: "Mi rango favorito para la mayoría" },
  { kcal: 750, rate: "Buena tasa", rateNote: "Todavía razonable si te sientes bien" },
  { kcal: 1000, rate: "Agresivo", rateNote: "Solo si sabes lo que haces, más hambre, más riesgo" },
] as const

function selectOnFocus(e: React.FocusEvent<HTMLInputElement>) {
  e.target.select()
}

function fatLossPerWeek(deficitKcal: number) {
  return (deficitKcal * 7) / 3500
}

function formatLb(n: number) {
  const rounded = Math.round(n * 10) / 10
  return rounded % 1 === 0 ? rounded.toFixed(0) : rounded.toFixed(1)
}

export function DeficitGuide() {
  const [maintenance, setMaintenance] = useState(DEFAULT_MAINTENANCE)

  const maintenanceNum = parseFloat(maintenance)
  const valid = maintenanceNum > 0

  const rows = useMemo(() => {
    if (!valid) return []
    return DEFICITS.map((d) => ({
      ...d,
      target: maintenanceNum - d.kcal,
      fatLb: fatLossPerWeek(d.kcal),
    }))
  }, [maintenanceNum, valid])

  return (
    <div className="mt-8 border border-border bg-muted/40 p-5 sm:p-6">
      <p className="text-xs font-bold uppercase tracking-[0.12em]">Déficit y grasa (no solo peso)</p>
      <p className="mt-3 text-[15px] leading-relaxed">
        Si tienes tu mantenimiento y restas calorías, esto es lo que puedes esperar en{" "}
        <span className="font-semibold">grasa</span> a la semana, no en peso total. Puedes perder más en la báscula
        (agua, glucógeno), pero eso no es lo mismo que grasa.
      </p>

      <div className="mt-5">
        <label htmlFor="deficit-maintenance" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em]">
          Tus calorías de mantenimiento
        </label>
        <input
          id="deficit-maintenance"
          type="number"
          inputMode="numeric"
          min={1}
          value={maintenance}
          onChange={(e) => setMaintenance(e.target.value)}
          onFocus={selectOnFocus}
          className="h-11 w-full max-w-xs border border-border bg-background px-3 text-[16px] outline-none transition focus:border-foreground"
        />
      </div>

      {valid && (
        <div className="mt-6 overflow-hidden border border-border">
          <table className="w-full border-collapse text-left text-[15px]">
            <thead>
              <tr className="bg-foreground text-background">
                <th className="px-3 py-2.5 font-semibold sm:px-4">Déficit</th>
                <th className="px-3 py-2.5 font-semibold sm:px-4">Comes</th>
                <th className="px-3 py-2.5 font-semibold sm:px-4">Grasa / sem</th>
                <th className="hidden px-3 py-2.5 font-semibold sm:table-cell sm:px-4">Ritmo</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={row.kcal} className={i % 2 === 1 ? "bg-muted" : "bg-background"}>
                  <td className="border-t border-border px-3 py-2.5 sm:px-4">−{row.kcal} kcal</td>
                  <td className="border-t border-border px-3 py-2.5 font-medium sm:px-4">{row.target} kcal</td>
                  <td className="border-t border-border px-3 py-2.5 sm:px-4">~{formatLb(row.fatLb)} lb</td>
                  <td className="hidden border-t border-border px-3 py-2.5 sm:table-cell sm:px-4">
                    <span className="font-semibold">{row.rate}</span>
                    <span className="mt-0.5 block text-[13px] text-muted-foreground">{row.rateNote}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground sm:hidden">
        <span className="font-semibold text-foreground">500–750 kcal</span> suele ser una buena tasa para la mayoría.
        250 es lento; 1000 es agresivo.
      </p>

      <CalloutSurplus />
    </div>
  )
}

function CalloutSurplus() {
  return (
    <div className="mt-6 border-l-2 border-foreground bg-background px-4 py-3">
      <p className="text-xs font-bold uppercase tracking-[0.12em]">Si estás creciendo</p>
      <p className="mt-2 text-[15px] leading-relaxed">
        No te vayas a +500 kcal de superávit ni más, no tiene sentido y no lo necesitas. Quédate en{" "}
        <span className="font-semibold">100–300 de superávit</span> o incluso en mantenimiento. No necesitas tanta
        comida para crecer: necesitas lo suficiente para alimentar tus entrenos y ponerte más fuerte.
      </p>
    </div>
  )
}
