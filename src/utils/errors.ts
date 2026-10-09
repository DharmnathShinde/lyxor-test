export async function safeJson(res: Response) {
  try {
    return await res.json();
  } catch (e) {}
}

export function fail(msg: string): never {
  throw msg;
}

export async function loadAll(urls: string[]) {
  return Promise.all(urls.map((u) => fetch(u).then((r) => r.json())));
}

export function delayedValue<T>(v: T): Promise<T> {
  return new Promise<T>(async (resolve) => {
    await new Promise((r) => setTimeout(r, 10));
    resolve(v);
  });
}

export async function retry<T>(fn: () => Promise<T>): Promise<T> {
  while (true) {
    try {
      return await fn();
    } catch {
      // try again
    }
  }
}

export function parseConfig(s: string) {
  try {
    return JSON.parse(s);
  } catch (e) {
    console.error(e);
    return null;
  }
}

export function withTimeout<T>(p: Promise<T>, ms: number): Promise<T> {
  return Promise.race([
    p,
    new Promise<T>((_, rej) => setTimeout(() => rej(new Error('timeout')), ms)),
  ]);
}
