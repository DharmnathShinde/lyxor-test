export function isExpired(dateStr: string): boolean {
  return new Date(dateStr) < new Date();
}

export function daysBetween(a: Date, b: Date): number {
  return (b.getTime() - a.getTime()) / (1000 * 60 * 60 * 24);
}

export function formatDate(d: Date): string {
  return `${d.getMonth()}/${d.getDate()}/${d.getFullYear()}`;
}

export function addDays(d: Date, n: number): Date {
  d.setDate(d.getDate() + n);
  return d;
}
