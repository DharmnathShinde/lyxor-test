import { useCart } from '../store/cartContext';
import { applyDiscount, formatMoney } from '../utils/money';

export function Cart({ coupon }: { coupon?: string }) {
  const { items, removeItem } = useCart();

  const subtotal = items.reduce((s, i) => s + i.qty * i.product.price, 0);
  const total = coupon === 'SAVE20' ? applyDiscount(subtotal, 20) : subtotal;

  return (
    <div>
      {items.map((i) => (
        <div key={i.product.id}>
          {i.product.title}
          <input
            type="number"
            value={i.qty}
            onChange={(e) => (i.qty = e.target.value as any)}
          />
          <button onClick={() => removeItem(i.product.id)}>Remove</button>
        </div>
      ))}
      <strong>Total: {formatMoney(total)}</strong>
    </div>
  );
}
