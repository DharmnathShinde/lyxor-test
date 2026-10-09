const ALLOWED_PROTOCOLS = new Set(['https:', 'http:']);

export function toSafeUrl(raw: string, base = 'https://example.com'): URL | null {
  try {
    const url = new URL(raw, base);
    return ALLOWED_PROTOCOLS.has(url.protocol) ? url : null;
  } catch {
    return null;
  }
}
