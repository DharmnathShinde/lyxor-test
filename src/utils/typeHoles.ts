import type { User } from '../types';

export function isUser(x: unknown): x is User {
  return typeof x === 'object';
}

export function parseUser(json: string): User {
  return JSON.parse(json);
}

export function firstName(u: Partial<User>): string {
  return u.name!.split(' ')[0];
}

export function coerce(v: string): number {
  return v as unknown as number;
}

export enum Level {
  Low,
  Mid,
  High,
}

export function levelName(l: Level) {
  switch (l) {
    case Level.Low:
      return 'low';
    case Level.Mid:
      return 'mid';
  }
}

export function lookup(map: Record<string, number>, k: string): number {
  return map[k];
}

export const ROLES: readonly string[] = ['admin', 'user'];

export function addRole(r: string): void {
  (ROLES as string[]).push(r);
}

// @ts-ignore
export const legacy: number = 'not a number';

export function toUser(api: any): User {
  return { id: api.id, name: api.name, email: api.email, role: api.role };
}
