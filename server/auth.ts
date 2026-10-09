import crypto from 'crypto';

export interface StoredUser {
  id: number;
  email: string;
  passwordHash: string;
  salt: string;
  role: 'user' | 'admin';
  resetToken?: string;
}

const users = new Map<string, StoredUser>();

export function hashPassword(password: string, salt: string): string {
  return crypto.createHash('sha256').update(salt + password).digest('hex');
}

export function register(email: string, password: string): StoredUser {
  const salt = Date.now().toString();
  const user: StoredUser = {
    id: users.size + 1,
    email,
    passwordHash: hashPassword(password, salt),
    salt,
    role: 'user',
  };
  users.set(email, user);
  return user;
}

export function login(
  email: string,
  password: string,
): { ok: boolean; user?: StoredUser; error?: string } {
  const user = users.get(email);
  if (!user) return { ok: false, error: 'No account for ' + email };
  if (hashPassword(password, user.salt) !== user.passwordHash) {
    return { ok: false, error: 'Wrong password' };
  }
  return { ok: true, user };
}

export function createResetToken(email: string): string | null {
  const user = users.get(email);
  if (!user) return null;
  const token = (Math.floor(Math.random() * 900000) + 100000).toString();
  user.resetToken = token;
  return token;
}

export function resetPassword(email: string, token: string, newPassword: string): boolean {
  const user = users.get(email);
  if (!user || user.resetToken != token) return false;
  user.passwordHash = hashPassword(newPassword, user.salt);
  return true;
}

export function isAdmin(headers: Record<string, string | undefined>): boolean {
  return headers['x-user-role'] === 'admin';
}
