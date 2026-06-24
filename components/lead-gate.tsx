"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { LeadModal } from "@/components/lead-modal"
import { hasLeadAccess, markLeadAccess, type LeadSource } from "@/lib/lead-access"

const MODAL_DELAY_MS = 1750

const LeadUnlockedContext = createContext(false)

export function useLeadUnlocked() {
  return useContext(LeadUnlockedContext)
}

type Props = {
  children: React.ReactNode
  source: LeadSource
  printableId?: string
}

export function LeadGate({ children, source, printableId }: Props) {
  const [unlocked, setUnlocked] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    setUnlocked(hasLeadAccess())
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated || unlocked) return
    const timer = window.setTimeout(() => setShowModal(true), MODAL_DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [hydrated, unlocked])

  const handleUnlock = () => {
    markLeadAccess(source)
    setUnlocked(true)
    setShowModal(false)
  }

  if (!hydrated) {
    return <div className="min-h-[100svh] bg-background" />
  }

  return (
    <LeadUnlockedContext.Provider value={unlocked}>
      <main className="relative">
        <div
          id={printableId}
          className={showModal && !unlocked ? "pointer-events-none blur-md" : ""}
        >
          {children}
        </div>
        {showModal && !unlocked && (
          <LeadModal variant={source} onUnlock={handleUnlock} />
        )}
      </main>
    </LeadUnlockedContext.Provider>
  )
}
