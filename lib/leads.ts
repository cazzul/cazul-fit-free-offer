export type LeadSource = "guide" | "protocol" | "coaching"

export type LeadCategory = "qualified" | "cold"

export const LEAD_SOURCE_LABELS: Record<LeadSource, string> = {
  coaching: "Aplicación Coaching",
  guide: "Guía de entrenamiento y nutrición",
  protocol: "Protocolo 90 días",
}

export const LEAD_CATEGORY_LABELS: Record<LeadCategory, string> = {
  qualified: "Qualified",
  cold: "Cold",
}

export function getLeadCategory(source: LeadSource): LeadCategory {
  return source === "coaching" ? "qualified" : "cold"
}

export type CoachingLeadFields = {
  readyToChange?: string
  mainGoal?: string
  trainingDuration?: string
  biggestObstacle?: string
  monthlyInvestment?: string
}

export type LeadPayload = {
  fuente: LeadSource
  nombre: string
  email: string
  instagram: string
} & CoachingLeadFields

export function parseLeadSource(value: unknown): LeadSource | null {
  if (value === "coaching" || value === "guide" || value === "protocol") {
    return value
  }
  return null
}

export function buildSheetLeadPayload(input: LeadPayload) {
  const category = getLeadCategory(input.fuente)

  return {
    fecha: new Date().toISOString(),
    nombre: input.nombre,
    email: input.email,
    instagram: input.instagram,
    fuente: LEAD_SOURCE_LABELS[input.fuente],
    fuenteKey: input.fuente,
    tipo: LEAD_CATEGORY_LABELS[category],
    readyToChange: input.readyToChange ?? "",
    mainGoal: input.mainGoal ?? "",
    trainingDuration: input.trainingDuration ?? "",
    biggestObstacle: input.biggestObstacle ?? "",
    monthlyInvestment: input.monthlyInvestment ?? "",
  }
}
