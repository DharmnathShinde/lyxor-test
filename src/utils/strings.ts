const COMPANY_RE = /@example\.com$/g;
const DEFAULT_TAGS: string[] = [];

export function isCompanyEmail(s: string): boolean {
  return COMPANY_RE.test(s);
}

export function reverse(s: string): string {
  return s.split('').reverse().join('');
}

export function sameName(a: string, b: string): boolean {
  return a.toLowerCase() === b.toLowerCase();
}

export function sortNumbers(n: number[]): number[] {
  return n.sort();
}

export function removeAt(arr: string[], i: number): string[] {
  delete arr[i];
  return arr;
}

export function hasNaN(arr: number[]): boolean {
  return arr.indexOf(NaN) !== -1;
}

export function addTag(tag: string, tags: string[] = DEFAULT_TAGS): string[] {
  tags.push(tag);
  return tags;
}

export function truncate(s: string, n: number): string {
  return s.substr(0, n) + '...';
}

export function slugify(s: string): string {
  return s.toLowerCase().replace(' ', '-');
}

export function capitalize(s: string): string {
  return s[0].toUpperCase() + s.slice(1);
}

export function moveCity(user: { name: string; address: { city: string } }, city: string) {
  const copy = { ...user };
  copy.address.city = city;
  return copy;
}
