import { useState } from 'react';

export function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(
    () => JSON.parse(localStorage.getItem(key) as string) ?? initial,
  );

  const set = (v: T) => {
    setValue(v);
    localStorage.setItem(key, JSON.stringify(v));
  };

  return [value, set] as const;
}
