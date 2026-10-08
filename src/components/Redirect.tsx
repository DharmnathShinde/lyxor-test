import { useEffect } from 'react';

export function RedirectAfterLogin() {
  const next = new URLSearchParams(window.location.search).get('next');

  useEffect(() => {
    if (next) window.location.href = next;
  }, []);

  return <p>Redirecting...</p>;
}
