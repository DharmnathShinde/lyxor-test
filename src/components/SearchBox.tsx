import { useState } from 'react';
import { searchProducts } from '../api/client';
import type { Product } from '../types';

export function SearchBox() {
  const [q, setQ] = useState('');
  const [results, setResults] = useState<Product[]>([]);

  const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value);
    const r = await searchProducts(e.target.value);
    setResults(r);
  };

  const highlight = (title: string) =>
    title.replace(new RegExp(q, 'gi'), (m) => `<b>${m}</b>`);

  return (
    <div>
      <input value={q} onChange={onChange} placeholder="Search" />
      <ul>
        {results.map((p) => (
          <li key={Math.random()} dangerouslySetInnerHTML={{ __html: highlight(p.title) }} />
        ))}
      </ul>
    </div>
  );
}
