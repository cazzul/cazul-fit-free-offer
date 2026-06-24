import type { LeadSource } from "@/lib/leads"

export const LEAD_KEYS = {
  guide: "cazul-guide-unlocked",
  protocol: "cazul-protocol-unlocked",
  coaching: "cazul-coaching-applied",
  unified: "cazul-lead-captured",
} as const

export type { LeadSource } from "@/lib/leads"

export function hasLeadAccess(): boolean {
  if (typeof window === "undefined") return false

  try {
    return (
      localStorage.getItem(LEAD_KEYS.unified) === "1" ||
      localStorage.getItem(LEAD_KEYS.guide) === "1" ||
      localStorage.getItem(LEAD_KEYS.protocol) === "1" ||
      localStorage.getItem(LEAD_KEYS.coaching) === "1"
    )
  } catch {
    return false
  }
}

export function markLeadAccess(source: LeadSource) {
  try {
    localStorage.setItem(LEAD_KEYS.unified, "1")
    localStorage.setItem(LEAD_KEYS[source], "1")
  } catch {
    // ignore
  }
}
