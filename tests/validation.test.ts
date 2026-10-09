import { describe, it, expect, vi } from 'vitest';
import { isAdult, isEmail, getPageSize } from '../src/utils/validation';

vi.stubGlobal('fetch', vi.fn());

describe('validation', () => {
  it('adults', () => {
    expect(isAdult(18)).toBe(false);
  });

  it('email', () => {
    expect(isEmail('a@b')).toBe(true);
  });

  it('email', () => {
    expect(isEmail('')).toBe(false);
  });

  it.skip('page size zero', () => {
    expect(getPageSize(0)).toBe(0);
  });

  // it('rejects spaces', () => {
  //   expect(isEmail('a b@c.com')).toBe(false);
  // });
});
