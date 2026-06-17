import { NextResponse } from "next/server"
import {
  getEmailError,
  getInstagramError,
  normalizeEmail,
  normalizeInstagram,
} from "@/lib/lead-validation"

// Set this in your environment (Vercel → Settings → Environment Variables,
// and locally in .env.local). It's the Google Apps Script Web App URL.
const SHEET_WEBHOOK = process.env.GOOGLE_SHEET_WEBHOOK_URL

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, email, instagram } = body ?? {}

    if (!nombre || !email || !instagram) {
      return NextResponse.json({ ok: false, error: "Faltan campos requeridos." }, { status: 400 })
    }

    const emailError = getEmailError(String(email))
    if (emailError) {
      return NextResponse.json({ ok: false, error: emailError }, { status: 400 })
    }

    const instagramError = getInstagramError(String(instagram))
    if (instagramError) {
      return NextResponse.json({ ok: false, error: instagramError }, { status: 400 })
    }

    const lead = {
      nombre: String(nombre).trim(),
      email: normalizeEmail(String(email)),
      instagram: normalizeInstagram(String(instagram)),
      fecha: new Date().toISOString(),
      fuente: "guia-web",
    }

    // Send the lead to your Google Sheet via the Apps Script webhook.
    if (SHEET_WEBHOOK) {
      try {
        await fetch(SHEET_WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        })
      } catch (err) {
        // Never block the visitor if the sheet write fails — just log it.
        console.error("[lead] sheet webhook failed:", err)
      }
    } else {
      console.log("[lead] GOOGLE_SHEET_WEBHOOK_URL no configurado — lead no guardado:", lead)
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[lead] error:", error)
    return NextResponse.json({ ok: false, error: "No se pudo procesar la solicitud." }, { status: 500 })
  }
}
