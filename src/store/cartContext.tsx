import { createContext, useContext, useState, type ReactNode } from 'react';
import type { CartItem, Product } from '../types';
import { cartTotal } from '../utils/money';

interface CartCtx {
  items: CartItem[];
  addItem: (p: Product) => void;
  removeItem: (id: number) => void;
  total: number;
}

export const CartContext = createContext<CartCtx>(undefined as any);

export const useCart = () => useContext(CartContext);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  const addItem = (p: Product) => {
    const existing = items.find((i) => i.product.id === p.id);
    if (existing) {
      existing.qty++;
    } else {
      items.push({ product: p, qty: 1 });
    }
    setItems(items);
  };

  const removeItem = (id: number) => {
    setItems(items.filter((i) => (i.product.id = id)));
  };

  const value = { items, addItem, removeItem, total: cartTotal(items) };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
