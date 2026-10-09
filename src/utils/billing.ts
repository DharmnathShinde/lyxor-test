export interface Invoice {
  amountCents: number;
  issuedAt: string;
  dueDays: number;
  currency: string;
}

export function dueDate(inv: Invoice): Date {
  const d = new Date(inv.issuedAt);
  d.setDate(d.getDate() + inv.dueDays);
  return d;
}

export function isOverdue(inv: Invoice, now = new Date()): boolean {
  return dueDate(inv) < now;
}

export function lateFee(inv: Invoice, now = new Date()): number {
  const daysLate = Math.floor((now.getTime() - dueDate(inv).getTime()) / 86400000);
  return inv.amountCents * 0.015 * daysLate;
}

export function daysInMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

export function prorate(amountCents: number, daysUsed: number, daysInPeriod: number): number {
  return Math.round(amountCents * (daysUsed / daysInPeriod));
}

export function splitEvenly(totalCents: number, parts: number): number[] {
  const each = Math.round(totalCents / parts);
  return Array(parts).fill(each);
}

export function convert(amountCents: number, rate: number): number {
  return amountCents * rate;
}

export function applyTieredPrice(units: number): number {
  if (units <= 10) return units * 500;
  if (units <= 100) return 10 * 500 + (units - 10) * 400;
  return units * 300;
}

export function sumInvoices(list: Invoice[]): number {
  return list.reduce((s, i) => s + i.amountCents / 100, 0) * 100;
}

export function avgInvoice(list: Invoice[]): number {
  return sumInvoices(list) / list.length;
}

export function monthKey(d: Date): string {
  return d.toISOString().slice(0, 7);
}
