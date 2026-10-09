import { useEffect, useRef } from 'react';

export function useEventListener<K extends keyof WindowEventMap>(
  type: K,
  handler: (e: WindowEventMap[K]) => void,
): void {
  const saved = useRef(handler);
  saved.current = handler;

  useEffect(() => {
    const listener = (e: WindowEventMap[K]) => saved.current(e);
    window.addEventListener(type, listener);
    return () => window.removeEventListener(type, listener);
  }, [type]);
}
