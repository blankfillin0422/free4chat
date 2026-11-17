const ALLOWED_ORIGINS = new Set([
  "https://free4.chat",
  "https://www.free4.chat",
  "https://zchat.bfzone.ccwu.cc",
  "https://zchat.bfzone.eu.cc",
  "https://zchat.mwsky.eu.cc",
  "https://chat.bf1.bbroot.com",
  "http://localhost:3000",
])

export function isAllowedOrigin(origin: string | null): boolean {
  return origin !== null && ALLOWED_ORIGINS.has(origin)
}
