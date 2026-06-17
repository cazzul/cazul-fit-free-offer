const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/

const BLOCKED_EMAIL_DOMAINS = new Set([
  "example.com",
  "example.org",
  "example.net",
  "test.com",
  "fake.com",
  "asdf.com",
  "mailinator.com",
  "tempmail.com",
  "guerrillamail.com",
  "yopmail.com",
  "throwaway.email",
  "trashmail.com",
  "dispostable.com",
  "10minutemail.com",
])

const FAKE_EMAIL_LOCALS = new Set([
  "test",
  "testing",
  "fake",
  "asdf",
  "asd",
  "none",
  "no",
  "na",
  "null",
  "abc",
  "xxx",
  "qwerty",
  "email",
  "correo",
])

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase()
}

export function normalizeInstagram(value: string) {
  return value.trim().replace(/^@+/, "").toLowerCase()
}

export function isValidEmail(email: string): boolean {
  const normalized = normalizeEmail(email)
  if (!normalized || normalized.length > 254) return false
  if (!EMAIL_REGEX.test(normalized)) return false

  const [local, domain] = normalized.split("@")
  if (!local || !domain) return false
  if (local.length > 64) return false
  if (local.startsWith(".") || local.endsWith(".") || local.includes("..")) return false
  if (domain.startsWith("-") || domain.endsWith("-")) return false

  const parts = domain.split(".")
  if (parts.length < 2) return false

  const tld = parts[parts.length - 1]
  if (!tld || tld.length < 2 || !/^[a-z]+$/.test(tld)) return false

  if (BLOCKED_EMAIL_DOMAINS.has(domain)) return false
  if (FAKE_EMAIL_LOCALS.has(local)) return false

  return true
}

export function getEmailError(email: string): string | null {
  const normalized = normalizeEmail(email)
  if (!normalized) return "Escribe tu email."
  if (!isValidEmail(normalized)) return "Escribe un email real. Tiene que ser uno que uses de verdad."
  return null
}

export function isValidInstagram(username: string): boolean {
  const normalized = normalizeInstagram(username)
  if (!normalized || normalized.length > 30) return false
  if (!/^[a-z0-9._]+$/.test(normalized)) return false
  if (normalized.startsWith(".") || normalized.endsWith(".")) return false
  if (normalized.includes("..")) return false
  return true
}

export function getInstagramError(username: string): string | null {
  const normalized = normalizeInstagram(username)
  if (!normalized) return "Escribe tu usuario de Instagram."
  if (!isValidInstagram(normalized)) {
    return "Escribe un usuario de Instagram válido (sin el @)."
  }
  return null
}
