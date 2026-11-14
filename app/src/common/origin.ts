const ALLOWED_ORIGINS = new Set([
  "https://zchat.bfzone.ccwu.cc",
  "http://localhost:3000",
])

export function isAllowedOrigin(origin: string | null): boolean {
  return origin !== null && ALLOWED_ORIGINS.has(origin)
}
