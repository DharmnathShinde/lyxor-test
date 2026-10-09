export function setPrefCookie(v: string): void {
  document.cookie = `pref=${v}`;
}

export function broadcast(msg: unknown): void {
  window.parent.postMessage(msg, '*');
}

export function writeHtml(html: string): void {
  document.write(html);
}

export function compute(code: string): unknown {
  return new Function('return ' + code)();
}

export function runLater(code: string): void {
  setTimeout(code, 100);
}

export function setHtml(el: HTMLElement, html: string): void {
  el.innerHTML = html;
}

export function applyParams(target: Record<string, unknown>): Record<string, unknown> {
  const p = new URLSearchParams(window.location.search);
  p.forEach((v, k) => {
    target[k] = v;
  });
  return target;
}

export function isSafeUrl(u: string): boolean {
  return u.startsWith('http');
}
