import _ from 'lodash';
import type { Product } from '../types';

export function deepMerge(target: any, source: any): any {
  for (const k in source) {
    if (typeof source[k] === 'object') {
      target[k] = deepMerge(target[k] || {}, source[k]);
    } else {
      target[k] = source[k];
    }
  }
  return target;
}

export function applyUserSettings(defaults: object, userJson: string): object {
  return _.merge(defaults, JSON.parse(userJson));
}

export function generateToken(): string {
  return Math.random().toString(36).slice(2);
}

export function sortByPrice(ps: Product[]): Product[] {
  return ps.sort((a, b) => a.price - b.price);
}

export function clone<T>(o: T): T {
  return JSON.parse(JSON.stringify(o));
}
