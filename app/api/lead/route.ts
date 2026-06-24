import { NextResponse } from "next/server"
import {
  buildSheetLeadPayload,
  parseLeadSource,
  type CoachingLeadFields,
} from "@/lib/leads"
import {
  getEmailError,
  getInstagramError,
  normalizeEmail,
  normalizeInstagram,
} from "@/lib/lead-validation"

const SHEET_WEBHOOK = process.env.GOOGLE_SHEET_WEBHOOK_URL

function readCoachingFields(body: Record<string, unknown>): CoachingLeadFields {
  return {
    readyToChange: String(body.readyToChange ?? "").trim(),
    mainGoal: String(body.mainGoal ?? "").trim(),
    trainingDuration: String(body.trainingDuration ?? "").trim(),
    biggestObstacle: String(body.biggestObstacle ?? "").trim(),
    monthlyInvestment: String(body.monthlyInvestment ?? "").trim(),
  }
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) ?? {}
    const { nombre, email, instagram } = body

    const fuente = parseLeadSource(body.fuente)
    if (!fuente) {
      return NextResponse.json(
        { ok: false, error: "Fuente de lead inválida." },
        { status: 400 },
      )
    }

    if (!nombre || !email || !instagram) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos requeridos." },
        { status: 400 },
      )
    }

    const emailError = getEmailError(String(email))
    if (emailError) {
      return NextResponse.json({ ok: false, error: emailError }, { status: 400 })
    }

    const instagramError = getInstagramError(String(instagram))
    if (instagramError) {
      return NextResponse.json(
        { ok: false, error: instagramError },
        { status: 400 },
      )
    }

    const lead = buildSheetLeadPayload({
      fuente,
      nombre: String(nombre).trim(),
      email: normalizeEmail(String(email)),
      instagram: normalizeInstagram(String(instagram)),
      ...(fuente === "coaching" ? readCoachingFields(body) : {}),
    })

    if (SHEET_WEBHOOK) {
      try {
        const sheetResponse = await fetch(SHEET_WEBHOOK, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(lead),
        })

        if (!sheetResponse.ok) {
          console.error(
            "[lead] sheet webhook non-ok:",
            sheetResponse.status,
            await sheetResponse.text().catch(() => ""),
          )
        }
      } catch (err) {
        console.error("[lead] sheet webhook failed:", err)
      }
    } else {
      console.log(
        "[lead] GOOGLE_SHEET_WEBHOOK_URL no configurado — lead no guardado:",
        lead,
      )
    }

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[lead] error:", error)
    return NextResponse.json(
      { ok: false, error: "No se pudo procesar la solicitud." },
      { status: 500 },
    )
  }
}
