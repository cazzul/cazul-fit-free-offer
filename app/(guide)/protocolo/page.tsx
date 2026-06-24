"use client"

import { Protocolo } from "@/components/protocolo"
import { LeadGate } from "@/components/lead-gate"

export default function Page() {
  return (
    <LeadGate source="protocol" printableId="protocolo-printable">
      <Protocolo />
    </LeadGate>
  )
}
