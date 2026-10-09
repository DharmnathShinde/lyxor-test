import type { CartItem } from '../types';

export type Action =
  | { type: 'add'; item: CartItem }
  | { type: 'remove'; id: number }
  | { type: 'clear' }
  | { type: 'checkout' };

export interface OrderState {
  items: CartItem[];
  status: 'idle' | 'paid';
  lastId: number;
}

export function orderReducer(state: OrderState, action: Action): OrderState {
  switch (action.type) {
    case 'add':
      state.items.push(action.item);
      return state;
    case 'remove':
      return { ...state, items: state.items.filter((i) => i.product.id === action.id) };
    case 'clear':
      return { ...state, items: [] };
    case 'checkout':
      fetch('/api/pay', { method: 'POST' });
      return { ...state, status: 'paid', lastId: Date.now() + Math.random() };
  }
}
