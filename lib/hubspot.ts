import {
  type LeadPayload,
  getLeadCategory,
  LEAD_SOURCE_LABELS,
} from "@/lib/leads"

// HubSpot Private App token. Create one in HubSpot:
// Settings -> Integrations -> Private Apps -> Create, with scopes:
// crm.objects.contacts.read/write and crm.objects.deals.read/write.
// Then add HUBSPOT_TOKEN to .env.local AND to your Vercel env vars.
const HUBSPOT_TOKEN = process.env.HUBSPOT_TOKEN
const HS_BASE = "https://api.hubapi.com"

function hsFetch(path: string, init: RequestInit) {
  return fetch(`${HS_BASE}${path}`, {
    ...init,
    headers: {
      Authorization: `Bearer ${HUBSPOT_TOKEN}`,
      "Content-Type": "application/json",
      ...(init.headers ?? {}),
    },
  })
}

function contactProperties(input: LeadPayload): Record<string, string> {
  const props: Record<string, string> = {
    email: input.email,
    firstname: input.nombre,
    igtiktok_handle: input.instagram,
    lead_source: LEAD_SOURCE_LABELS[input.fuente],
    hs_lead_status: "NEW",
  }
  // Only the coaching application carries these qualifying fields.
  // goal & training_experience are HubSpot dropdowns — map the Spanish form
  // labels to HubSpot's internal option codes. Unmapped values are skipped so
  // the upsert never fails on an invalid option.
  const GOAL_MAP: Record<string, string> = {
    "Perder grasa": "fat_loss",
    "Recomposición": "recomp",
    // "Ganar músculo" -> add a "muscle_gain" option in HubSpot, then map it here.
  }
  const TRAINING_MAP: Record<string, string> = {
    "Menos de 6 meses": "less_than_6_months",
    "6 meses a 1 año": "6_to_12_months",
    "1 a 3 años": "1_to_2_years",
    "3 a 5 años": "3_plus_years",
  }
  const goalCode = input.mainGoal ? GOAL_MAP[input.mainGoal] : undefined
  if (goalCode) props.goal = goalCode
  const trainingCode = input.trainingDuration
    ? TRAINING_MAP[input.trainingDuration]
    : undefined
  if (trainingCode) props.training_experience = trainingCode
  if (input.biggestObstacle) props.biggest_obstacle = input.biggestObstacle
  return props
}

/**
 * Mirrors each lead into HubSpot. Cold leads (guide/protocol) become a
 * Contact. Qualified leads (coaching application) also get a Deal placed in
 * the pipeline so they show up in the funnel. Fully non-blocking: any failure
 * is logged and swallowed so it never breaks the form submission.
 */
export async function syncLeadToHubSpot(input: LeadPayload): Promise<void> {
  if (!HUBSPOT_TOKEN) {
    console.log("[hubspot] HUBSPOT_TOKEN not set — skipping:", input.email)
    return
  }

  try {
    // Upsert the contact by email (create or update).
    const upsert = await hsFetch("/crm/v3/objects/contacts/batch/upsert", {
      method: "POST",
      body: JSON.stringify({
        inputs: [
          {
            idProperty: "email",
            id: input.email,
            properties: contactProperties(input),
          },
        ],
      }),
    })

    if (!upsert.ok) {
      console.error(
        "[hubspot] contact upsert failed:",
        upsert.status,
        await upsert.text().catch(() => ""),
      )
      return
    }

    // Only coaching applications create a deal in the pipeline.
    if (getLeadCategory(input.fuente) !== "qualified") return

    const data = (await upsert.json().catch(() => null)) as
      | { results?: Array<{ id?: string }> }
      | null
    const contactId = data?.results?.[0]?.id

    const deal = await hsFetch("/crm/v3/objects/deals", {
      method: "POST",
      body: JSON.stringify({
        properties: {
          dealname: `Aplicación — ${input.nombre}`,
          pipeline: "default",
          // "qualifiedtobuy" = the "Applied" stage (rename in HubSpot later).
          dealstage: "qualifiedtobuy",
        },
        ...(contactId
          ? {
              associations: [
                {
                  to: { id: contactId },
                  types: [
                    {
                      associationCategory: "HUBSPOT_DEFINED",
                      associationTypeId: 3, // deal -> contact
                    },
                  ],
                },
              ],
            }
          : {}),
      }),
    })

    if (!deal.ok) {
      console.error(
        "[hubspot] deal create failed:",
        deal.status,
        await deal.text().catch(() => ""),
      )
    }
  } catch (err) {
    console.error("[hubspot] sync failed:", err)
  }
}
