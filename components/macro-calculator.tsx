"use client"

import { useMemo, useState } from "react"

const DEFAULT_WEIGHT = "200"
const DEFAULT_CALORIES = "2500"

function calcMacros(weightLb: number, calories: number) {
  const proteinG = Math.round(weightLb * 0.7)
  const fatG = Math.round(weightLb * 0.3)
  const proteinCal = proteinG * 4
  const fatCal = fatG * 9
  const carbsCal = calories - proteinCal - fatCal
  const carbsG = Math.max(0, Math.round(carbsCal / 4))
  return { proteinG, fatG, carbsG, proteinCal, fatCal, carbsCal: Math.max(0, carbsCal) }
}

function selectOnFocus(e: React.FocusEvent<HTMLInputElement>) {
  e.target.select()
}

export function MacroCalculator() {
  const [weight, setWeight] = useState(DEFAULT_WEIGHT)
  const [calories, setCalories] = useState(DEFAULT_CALORIES)

  const result = useMemo(() => {
    const w = parseFloat(weight)
    const c = parseFloat(calories)
    if (!w || w <= 0 || !c || c <= 0) return null
    return calcMacros(w, c)
  }, [weight, calories])

  return (
    <div className="mt-6 border border-border bg-muted/40 p-5 sm:p-6">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
        Por ejemplo, prueba los tuyos
      </p>
      <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
        Toca un campo y escribe tus números (se selecciona solo, no tienes que borrar).
      </p>

      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="macro-weight" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em]">
            Peso (lb)
          </label>
          <input
            id="macro-weight"
            type="number"
            inputMode="decimal"
            min={1}
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            onFocus={selectOnFocus}
            className="h-11 w-full border border-border bg-background px-3 text-[16px] outline-none transition focus:border-foreground"
          />
        </div>
        <div>
          <label htmlFor="macro-calories" className="mb-1.5 block text-xs font-bold uppercase tracking-[0.12em]">
            Calorías del día
          </label>
          <input
            id="macro-calories"
            type="number"
            inputMode="numeric"
            min={1}
            value={calories}
            onChange={(e) => setCalories(e.target.value)}
            onFocus={selectOnFocus}
            className="h-11 w-full border border-border bg-background px-3 text-[16px] outline-none transition focus:border-foreground"
          />
        </div>
      </div>

      {result && (
        <div className="mt-6 border-t border-border pt-5">
          <p className="text-xs font-bold uppercase tracking-[0.12em]">Tu split</p>
          <div className="mt-3 grid gap-3 sm:grid-cols-3">
            <div className="border border-border bg-background px-4 py-3">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Proteína</p>
              <p className="mt-1 text-2xl font-bold tracking-tight">{result.proteinG} g</p>
              <p className="text-sm text-muted-foreground">{result.proteinCal} kcal</p>
            </div>
            <div className="border border-border bg-background px-4 py-3">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Grasa</p>
              <p className="mt-1 text-2xl font-bold tracking-tight">{result.fatG} g</p>
              <p className="text-sm text-muted-foreground">{result.fatCal} kcal</p>
            </div>
            <div className="border border-border bg-background px-4 py-3">
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Carbos</p>
              <p className="mt-1 text-2xl font-bold tracking-tight">{result.carbsG} g</p>
              <p className="text-sm text-muted-foreground">{result.carbsCal} kcal</p>
            </div>
          </div>
          <p className="mt-4 text-[14px] leading-relaxed text-muted-foreground">
            Proteína 0.7 g × lb · Grasa 0.3 g × lb · Carbos = lo que sobra en calorías.
          </p>
        </div>
      )}
    </div>
  )
}
