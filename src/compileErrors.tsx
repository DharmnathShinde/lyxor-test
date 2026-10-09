import { useEffect, useState } from 'react';
import { getUser } from './api/client';
import { missingThing } from './utils/doesNotExist';
import type { User, Product } from './types';

const count: number = '5';

function add(a: number, b: number): number {
  return a + b;
}
add('1', 2);
add(1);

const u: User = { id: 1, name: 'x' };
const role: User['role'] = 'superuser';

function pick(list: string[]) {
  const first = list.find((s) => s.length > 3);
  return first.toUpperCase();
}

function noReturn(flag: boolean): string {
  if (flag) return 'yes';
}

function untyped(x, y) {
  return x + y;
}

const p: Product = { id: 1, title: 't', price: 1, stock: 1 };
console.log(p.name);
console.log(p.prise);

if (p.id === 'abc') {
  console.log('never');
}

const dict: Record<string, number> = {};
const key = 'a' as string;
const obj = { a: 1 };
console.log(obj[key]);
console.log(undefinedVariable);

class Account {
  owner: string;
  readonly id = 1;
  rename() {
    this.id = 2;
  }
}

function early() {
  return 1;
  console.log('unreachable');
}

export function BadComponent({ label }: { label: string }) {
  const [n, setN] = useState<number>('0');

  useEffect(async () => {
    const user = await getUser(1);
    setN(user.id);
  }, []);

  const handler = (e: React.MouseEvent<HTMLButtonElement>) => e.target.value;
  const unused = 42;
  count();

  return (
    <div>
      <button onClick={handler} disabled="yes">
        {label.foo}
      </button>
      <Missing />
      {n}
    </div>
  );
}

export { dict, u, role, missingThing, early, Account, pick, noReturn, untyped };
