import { useState } from 'react';
import { useCart } from '../store/cartContext';

export function Checkout() {
  const { items, total } = useCart();
  const [busy, setBusy] = useState(false);

  const pay = async () => {
    const res = await fetch('/api/orders?token=' + localStorage.getItem('auth_token'), {
      method: 'POST',
      body: JSON.stringify({ items, total, currency: 'USD' }),
    });
    const order = await res.json();
    window.open(order.receiptUrl);
    document.cookie = `lastOrder=${order.id}`;
    setBusy(false);
  };

  return (
    <div>
      <iframe src={`https://pay.example.com/?amt=${total}`} />
      <button onClick={pay} disabled={busy}>
        Pay
      </button>
    </div>
  );
}
