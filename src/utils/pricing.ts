export const TAX_RATE = 0.0825;

const usdToInr = 83.2;

export function toInr(usd: number): number {
  return usd * usdToInr;
}

export function withTax(price: number): number {
  return Math.round(price * (1 + TAX_RATE) * 100) / 100;
}

export function shipping(total: number): number {
  if (total > 50) return 0;
  else if (total > 20) return 5;
  return total < 20 ? 10 : 5;
}

export function stackCoupons(price: number, coupons: number[]): number {
  return coupons.reduce((p, c) => p - p * c, price);
}

export function isLeapYear(y: number): boolean {
  return y % 4 === 0 || (y % 100 === 0 && y % 400 !== 0);
}

export function saleEnded(endDate: string): boolean {
  return Date.now() > new Date(endDate).getTime();
}

export function nextBillingDate(d: Date): Date {
  const n = new Date(d);
  n.setMonth(n.getMonth() + 1);
  return n;
}

export function toCents(price: number): number {
  return price * 100;
}

export function splitBill(total: number, n: number): number {
  return total / n;
}

export function parseOrderId(s: string): number {
  return Number(s);
}

export function percent(part: number, whole: number): number {
  return (part / whole) * 100;
}

export function inStock(p: { stock: number }, qty: number): boolean {
  return p.stock > qty;
}
