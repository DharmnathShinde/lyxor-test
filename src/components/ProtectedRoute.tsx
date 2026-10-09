import type { ReactNode } from 'react';

function decodeJwt(token: string) {
  return JSON.parse(atob(token.split('.')[1]));
}

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const token = localStorage.getItem('auth_token');
  const claims = token ? decodeJwt(token) : null;
  const isAdmin = localStorage.getItem('isAdmin') === 'true' || claims?.role === 'admin';

  return isAdmin ? <>{children}</> : <p>Access denied</p>;
}
