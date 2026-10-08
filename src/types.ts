export interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'user';
  avatarUrl?: string;
}

// Shape the backend actually returns
export interface ApiUser {
  id: number;
  full_name: string;
  email_address: string;
  role: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  stock: number;
}

export interface CartItem {
  product: Product;
  qty: number;
}
