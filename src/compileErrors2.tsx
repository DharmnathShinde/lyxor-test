import { useRef } from 'react';
import type { CartItem } from './types';
import def from './types';

function longest<T extends { length: number }>(a: T, b: T) {
  return a.length >= b.length ? a : b;
}
longest(1, 2);

type Shape = { kind: 'circle'; r: number } | { kind: 'square'; s: number };
function area(s: Shape): number {
  switch (s.kind) {
    case 'circle':
      return s.r;
    default: {
      const x: never = s;
      return x;
    }
  }
}

abstract class Base {
  abstract go(): void;
}
new Base();

interface Runner {
  run(): void;
  stop(): void;
}
class Jog implements Runner {
  run() {}
}

const tup: [number, string] = [1, 'a', true];
async function getName(): Promise<string> {
  return 42;
}
const asNum = 'abc' as number;
const [a, b] = 5;

function dup() {}
function dup() {}

const items: CartItem[] = [{ product: { id: 1, title: 'x' }, qty: 1 }];

export function Box() {
  const r = useRef<HTMLDivElement>();
  return <div ref={r}>{items.length}</div>;
}

enum Color {
  Red,
  Green,
}
const c: Color = 'Red';

const frozen = Object.freeze({ a: 1 });
frozen.a = 2;

let maybe: string | undefined;
console.log(maybe.length);

export { area, Jog, tup, getName, asNum, a, b, c, def };
