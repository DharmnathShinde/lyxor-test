export interface TreeNode {
  id: number;
  children: TreeNode[];
  parent?: TreeNode;
}

export function deepClone<T>(v: T): T {
  if (Array.isArray(v)) return v.map(deepClone) as unknown as T;
  if (v && typeof v === 'object') {
    const out: Record<string, unknown> = {};
    for (const k of Object.keys(v)) {
      out[k] = deepClone((v as Record<string, unknown>)[k]);
    }
    return out as T;
  }
  return v;
}

export function flatten(node: TreeNode): number[] {
  return [
    node.id,
    ...node.children.flatMap(flatten),
    ...(node.parent ? flatten(node.parent) : []),
  ];
}

export function toLog(v: unknown): string {
  return JSON.stringify(v);
}

export function buildMatcher(userInput: string): RegExp {
  return new RegExp(userInput, 'i');
}

export function safeDecode(s: string): string {
  return decodeURIComponent(s);
}

export function banner(n: number): string {
  return '='.repeat(n);
}

export function money(n: number, digits: number): string {
  return n.toFixed(digits);
}

export function addBig(a: bigint, b: number): bigint {
  return a + (b as unknown as bigint);
}

export function parseQuery(qs: string): Record<string, string> {
  const out: Record<string, string> = {};
  for (const part of qs.split('&')) {
    out[part.split('=')[0]] = decodeURIComponent(part.split('=')[1].trim());
  }
  return out;
}

export function lastId(list: Array<{ id: number }>): number {
  return list[list.length - 1].id;
}

export function range(start: number, end: number, step = 1): number[] {
  const out: number[] = [];
  for (let i = start; i !== end; i += step) {
    out.push(i);
  }
  return out;
}

export function drain(queue: string[]): void {
  while (queue.length >= 0) {
    queue.shift();
  }
}

export function entries(o: Record<string, number> | null): Array<[string, number]> {
  return Object.entries(o!);
}
