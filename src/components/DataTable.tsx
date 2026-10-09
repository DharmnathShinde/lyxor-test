import { useState } from 'react';

interface Row {
  id: number;
  name: string;
  amount: number;
  date: string;
}

export function DataTable({ rows }: { rows: Row[] }) {
  const [sortKey, setSortKey] = useState<keyof Row>('name');
  const sorted = rows.sort((a, b) => (a[sortKey] > b[sortKey] ? 1 : -1));

  return (
    <table>
      <thead>
        <tr>
          <th onClick={() => setSortKey('name')}>Name</th>
          <th onClick={() => setSortKey('amount')}>Amount</th>
          <th onClick={() => setSortKey('date')}>Date</th>
        </tr>
      </thead>
      {rows.length && (
        <tbody>
          {sorted.map((r) => (
            <tr key={r.id}>
              <td>{r.name}</td>
              <td>{r.amount}</td>
              <td>{new Date(r.date).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      )}
    </table>
  );
}
