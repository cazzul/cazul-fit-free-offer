"use client"

import { useEffect, useState } from "react"
import { Guide } from "@/components/guide"
import { LeadModal } from "@/components/lead-modal"

const STORAGE_KEY = "cazul-guide-unlocked"
const MODAL_DELAY_MS = 1750

export default function Page() {
  const [unlocked, setUnlocked] = useState(false)
  const [hydrated, setHydrated] = useState(false)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    try {
      if (localStorage.getItem(STORAGE_KEY) === "1") setUnlocked(true)
    } catch {
      // ignore
    }
    setHydrated(true)
  }, [])

  useEffect(() => {
    if (!hydrated || unlocked) return
    const timer = window.setTimeout(() => setShowModal(true), MODAL_DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [hydrated, unlocked])

  const handleUnlock = () => {
    setUnlocked(true)
    setShowModal(false)
    try {
      localStorage.setItem(STORAGE_KEY, "1")
    } catch {
      // ignore
    }
  }

  if (!hydrated) {
    return <div className="min-h-[100svh] bg-background" />
  }

  return (
    <main className="relative">
      <div
        id="guia-printable"
        className={showModal && !unlocked ? "pointer-events-none blur-md" : ""}
      >
        <Guide showDownload={unlocked} />
      </div>
      {showModal && !unlocked && <LeadModal onUnlock={handleUnlock} />}
    </main>
  )
}
