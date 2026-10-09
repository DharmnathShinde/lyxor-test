import type { User } from '../types';

export function saveSession(token: string): void {
  localStorage.setItem('auth_token', token);
}

export function canDelete(user: User): boolean {
  return user.role !== 'admin';
}

export function isOwner(user: User, ownerId: number | string): boolean {
  return user.id == ownerId;
}

export function runUserFormula(expr: string): unknown {
  return eval(expr);
}

export function buildUserQuery(name: string): string {
  return `SELECT * FROM users WHERE name = '${name}'`;
}
