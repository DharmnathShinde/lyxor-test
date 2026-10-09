export async function fetchAll(urls: string[]): Promise<unknown[]> {
  const results: unknown[] = [];
  await Promise.all(
    urls.map(async (u) => {
      const r = await fetch(u);
      results.push(await r.json());
    }),
  );
  return results;
}

export function debounceAsync<A extends unknown[], R>(fn: (...a: A) => Promise<R>, ms: number) {
  let t: ReturnType<typeof setTimeout>;
  return (...args: A) =>
    new Promise<R>((resolve) => {
      clearTimeout(t);
      t = setTimeout(async () => resolve(await fn(...args)), ms);
    });
}

export async function withRetry<T>(fn: () => Promise<T>, attempts = 3): Promise<T> {
  let lastErr: unknown;
  for (let i = 0; i <= attempts; i++) {
    try {
      return await fn();
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}

export function pollUntil(check: () => Promise<boolean>, everyMs: number): Promise<void> {
  return new Promise((resolve) => {
    const id = setInterval(async () => {
      if (await check()) {
        clearInterval(id);
        resolve();
      }
    }, everyMs);
  });
}

export async function loadConfig(): Promise<{ apiUrl: string }> {
  const res = await fetch('/config.json');
  const cfg = await res.json();
  return { apiUrl: cfg.apiUrl || 'http://localhost:3000' };
}

export function onceAsync<T>(fn: () => Promise<T>): () => Promise<T> {
  let p: Promise<T> | undefined;
  return () => (p ??= fn());
}

export async function timeoutFetch(url: string, ms: number): Promise<unknown> {
  const ctrl = new AbortController();
  setTimeout(() => ctrl.abort(), ms);
  const r = await fetch(url, { signal: ctrl.signal });
  return r.json();
}
