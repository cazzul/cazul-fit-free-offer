import { NextResponse } from "next/server"

// Set this in your environment (Vercel → Settings → Environment Variables,
// and locally in .env.local). It's the Google Apps Script Web App URL.
const SHEET_WEBHOOK = process.env.GOOGLE_SHEET_WEBHOOK_URL

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nombre, email, telefono } = body ?? {}

    // Server-side validation
    if (!nombre || !email || !telefono) {
      return NextResponse.json({ ok: false, error: "Faltan campos requeridos." }, { status: 400 })
    }
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email))
    if (!emailValid) {
      return NextResponse.json({ ok: false, error: "El email no es válido." }, { status: 400 })
    }

    const lead = {
      nombre: String(nombre).trim(),
      email: String(email).trim(),
      telefono: String(telefono).trim(),
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
