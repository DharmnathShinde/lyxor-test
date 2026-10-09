import { useEffect, useMemo, useRef, useState } from 'react';
import type { CartItem } from '../types';

export function OrderSummary({ items, coupon }: { items: CartItem[]; coupon: string }) {
  const [discount, setDiscount] = useState(0);
  const [lines, setLines] = useState(items);
  const submitted = useRef(false);

  const total = useMemo(
    () => lines.reduce((s, l) => s + l.product.price * l.qty, 0) - discount,
    [lines],
  );

  useEffect(() => {
    if (!coupon) return;
    fetch(`/api/coupons/${coupon}`)
      .then((r) => r.json())
      .then((c: { off: number }) => setDiscount(c.off));
  }, [coupon]);

  const rows = [];
  for (var i = 0; i < lines.length; i++) {
    rows.push(
      <li key={i} onClick={() => setLines(lines.filter((_, j) => j !== i))}>
        {lines[i].product.title}
      </li>,
    );
  }

  const place = () => {
    if (submitted.current) return;
    submitted.current = true;
    fetch('/api/orders', { method: 'POST', body: JSON.stringify({ lines, total }) });
  };

  return (
    <div>
      <ul>{rows}</ul>
      {discount && <p>Saved {discount}</p>}
      <p>Total: {total.toFixed(2)}</p>
      <button onClick={place} disabled={lines.length === 0}>
        Place order
      </button>
    </div>
  );
}
