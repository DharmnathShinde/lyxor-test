import { useEffect, useState } from 'react';

export function useWindowSize() {
  const [size, setSize] = useState({ w: window.innerWidth, h: window.innerHeight });

  useEffect(() => {
    window.addEventListener('resize', () => {
      setSize({ w: window.innerWidth, h: window.innerHeight });
    });
    return () => {
      window.removeEventListener('resize', () => {
        setSize({ w: window.innerWidth, h: window.innerHeight });
      });
    };
  }, []);

  return size;
}
