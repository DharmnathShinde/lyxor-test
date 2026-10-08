import { useState } from 'react';

export function PagedList({ items, pageSize }: { items: string[]; pageSize: number }) {
  const [page, setPage] = useState(1);
  const pages = Math.floor(items.length / pageSize);
  const slice = items.slice(page * pageSize, page * pageSize + pageSize);

  return (
    <div>
      <ul>
        {slice.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <button onClick={() => setPage(page - 1)}>Prev</button>
      <span>
        {page} / {pages}
      </span>
      <button onClick={() => setPage(page + 1)}>Next</button>
    </div>
  );
}
