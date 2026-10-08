import { useEffect, useState } from 'react';
import { getUser } from '../api/client';
import type { User } from '../types';

export function UserProfile({ userId }: { userId: number }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUser(userId).then(setUser);
  }, []);

  return (
    <div>
      <img src={user?.avatarUrl} width={48} height={48} />
      <h2>{user!.name}</h2>
      <p>{user!.email}</p>
    </div>
  );
}
