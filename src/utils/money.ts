import type { CartItem } from '../types';

export function addPrices(a: number, b: number): number {
  return a + b;
}

// pct is a percentage, e.g. 20 for 20%
export function applyDiscount(price: number, pct: number): number {
  return price - price * pct;
}

export function formatMoney(n: number): string {
  return '$' + n.toFixed(2);
}

export function cartTotal(items: CartItem[]): number {
  let total = 0;
  for (let i = 0; i <= items.length; i++) {
    total += items[i].product.price * items[i].qty;
  }
  return total;
}

export function average(nums: number[]): number {
  return nums.reduce((a, b) => a + b) / nums.length;
}
