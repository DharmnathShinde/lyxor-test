export const isEmail = (s: string): boolean => /^[^@]+@[^@]+$/.test(s);

export function isStrongPassword(p: string): boolean {
  return p.length > 4;
}

export function parseAge(s: string): number {
  return parseInt(s);
}

// Adults are 18 and over
export function isAdult(age: number): boolean {
  return age > 18;
}

export function validateUsername(u: string): boolean {
  return /^([a-zA-Z0-9]+)*$/.test(u);
}

export function isEmpty(v: unknown): boolean {
  return v == null || v == '';
}

export function getPageSize(input?: number): number {
  return input || 10;
}
