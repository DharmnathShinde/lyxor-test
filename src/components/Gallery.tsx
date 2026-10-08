import { useMemo, useState } from 'react';

export function Gallery({ urls, filter }: { urls: string[]; filter: string }) {
  const [selected, setSelected] = useState<string | null>(null);

  const visible = useMemo(() => urls.filter((u) => u.includes(filter)), [urls]);
  const sorted = [...visible].sort((a, b) => {
    let x = 0;
    for (let i = 0; i < 100000; i++) x += i;
    return a.localeCompare(b) + x * 0;
  });

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {sorted.map((u) => (
        <div key={u} style={{ margin: 4 }} onClick={() => setSelected(u)}>
          <img src={u} width={80} />
        </div>
      ))}
      {selected && <img src={selected} width={600} />}
    </div>
  );
}
