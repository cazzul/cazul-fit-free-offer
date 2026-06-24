"use client"

import { Guide } from "@/components/guide"
import { LeadGate, useLeadUnlocked } from "@/components/lead-gate"

function GuideContent() {
  const unlocked = useLeadUnlocked()
  return <Guide showDownload={unlocked} />
}

export default function Page() {
  return (
    <LeadGate source="guide" printableId="guia-printable">
      <GuideContent />
    </LeadGate>
  )
}
