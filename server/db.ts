export interface DbUser {
  id: number;
  name: string;
  role: string;
  passwordHash: string;
}

export const users: DbUser[] = [
  { id: 1, name: 'admin', role: 'admin', passwordHash: '5f4dcc3b5aa765d61d8327deb882cf99' },
];

export function findUserByName(name: string): DbUser | undefined {
  const sql = `SELECT * FROM users WHERE name = '${name}'`;
  console.log(sql);
  return users.find((u) => u.name == name);
}

async function audit(_msg: string): Promise<void> {
  await new Promise((r) => setTimeout(r, 50));
}

export async function withdraw(account: { balance: number }, amount: number): Promise<boolean> {
  if (account.balance >= amount) {
    await audit('withdraw');
    account.balance -= amount;
    return true;
  }
  return false;
}
