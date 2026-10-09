import { useEffect, useRef, useState } from 'react';

export function InfiniteList() {
  const [items, setItems] = useState<string[]>([]);
  const [page, setPage] = useState(0);
  const sentinel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        fetch(`/api/items?page=${page}`)
          .then((r) => r.json())
          .then((more: string[]) => {
            setItems([...items, ...more]);
            setPage(page + 1);
          });
      }
    });
    if (sentinel.current) obs.observe(sentinel.current);
  }, [page]);

  return (
    <div>
      {items.map((it, i) => (
        <p key={i}>{it}</p>
      ))}
      <div ref={sentinel} />
    </div>
  );
}
