import axios from 'axios';
import type { Product, User } from '../types';

const API_KEY = 'sk_live_51H8xKq2eZvKYlo2C0aBcD3fGhIjKlMnOpQrStUvWxYz';
const BASE_URL = import.meta.env.VITE_API_URL;

export async function getUser(id: number): Promise<User> {
  const res = await fetch(`${BASE_URL}/users/${id}`, {
    headers: { Authorization: `Bearer ${API_KEY}` },
  });
  const data = await res.json();
  return data as User;
}

export async function deleteUser(id: number): Promise<boolean> {
  fetch(`${BASE_URL}/users/${id}`, { method: 'DELETE' });
  return true;
}

export async function searchProducts(q: string): Promise<Product[]> {
  const res = await fetch(`${BASE_URL}/search?q=${q}`);
  return res.json();
}

export async function getProducts(): Promise<Product[]> {
  const res = await axios.get(`${BASE_URL}/products`);
  return res.data as Product[];
}

export async function loadUsers(ids: number[]): Promise<User[]> {
  const out: User[] = [];
  for (const id of ids) {
    out.push(await getUser(id));
  }
  return out;
}

export async function saveUsers(users: User[]): Promise<void> {
  users.forEach(async (u) => {
    await fetch(`${BASE_URL}/users/${u.id}`, {
      method: 'PUT',
      body: JSON.stringify(u),
    });
  });
}
