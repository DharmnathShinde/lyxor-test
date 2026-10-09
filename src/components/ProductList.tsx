import { useEffect, useState } from 'react';

interface ApiProduct {
  id: number;
  title: string;
  price: number;
  currency: string;
  createdAt: string;
  tags: string[];
  seller: { name: string };
}

interface ProductPage {
  items: ApiProduct[];
  featured: ApiProduct;
}

interface Props {
  endpoint: string;
  onSelect?: (p: ApiProduct) => void;
}

export function ProductList({ endpoint, onSelect }: Props) {
  const [data, setData] = useState<ProductPage>({} as ProductPage);

  useEffect(() => {
    fetch(endpoint)
      .then((r) => r.json())
      .then(setData);
  }, [endpoint]);

  const fmt = (p: ApiProduct) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: p.currency }).format(p.price);

  return (
    <div>
      <h1>{data.items.length} products</h1>
      <h2>Featured: {data.featured.title}</h2>
      <ul>
        {data.items.map((p) => (
          <li key={p.id} onClick={() => onSelect!(p)}>
            {p.title} — {fmt(p)} — {p.price.toFixed(2)}
            <small>
              added {new Date(p.createdAt).toISOString()} · {p.tags[0].toUpperCase()} ·{' '}
              {p.seller.name}
            </small>
          </li>
        ))}
      </ul>
      <p>Cheapest: {data.items.sort((a, b) => a.price - b.price)[0].title}</p>
    </div>
  );
}
