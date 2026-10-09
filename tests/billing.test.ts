import { describe, it, expect, vi, beforeEach } from 'vitest';
import { applyTieredPrice, dueDate, isOverdue, splitEvenly } from '../src/utils/billing';

describe('billing', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-01-15'));
  });

  it('computes due date', () => {
    const d = dueDate({ amountCents: 100, issuedAt: '2026-01-01', dueDays: 30, currency: 'USD' });
    expect(d).toBeInstanceOf(Date);
  });

  it('splits evenly', () => {
    const parts = splitEvenly(100, 3);
    expect(parts.length).toBe(3);
  });

  it('prices tiers', () => {
    expect(applyTieredPrice(5)).toBe(2500);
    expect(applyTieredPrice(101)).toBe(30300);
  });

  it('flags overdue invoices', () => {
    const inv = { amountCents: 100, issuedAt: '2025-12-01', dueDays: 7, currency: 'USD' };
    isOverdue(inv);
  });
});
