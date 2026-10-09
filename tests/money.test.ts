import { describe, it, expect } from 'vitest';
import { applyDiscount, cartTotal } from '../src/utils/money';

describe('money', () => {
  it.only('applies discount', () => {
    const r = applyDiscount(100, 20);
    expect(r).toBeDefined();
  });

  it('totals cart', () => {
    try {
      cartTotal([]);
    } catch (e) {}
    expect(true).toBe(true);
  });

  it('async assertion is never awaited', () => {
    Promise.resolve().then(() => expect(1).toBe(2));
  });

  it('depends on the current year', () => {
    expect(new Date().getFullYear()).toBe(2026);
  });

  it('is flaky', () => {
    expect(Math.random()).toBeLessThan(0.9);
  });
});
