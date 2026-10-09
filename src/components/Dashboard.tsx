import { useEffect, useRef, useState } from 'react';

export function Dashboard({ userId, filters }: { userId: number; filters: { status: string } }) {
  const [stats, setStats] = useState<number[]>([]);
  const [name, setName] = useState(String(userId));
  const renders = useRef(0);
  renders.current++;

  const opts = { status: filters.status };

  useEffect(() => {
    fetch(`/api/stats?status=${opts.status}`)
      .then((r) => r.json())
      .then(setStats);
  }, [opts]);

  useEffect(() => {
    const id = setInterval(() => fetch('/api/ping'), 100);
    return () => clearInterval(id);
  }, []);

  const reset: any = () => setStats([]);

  const buttons = [];
  for (var i = 0; i < 3; i++) {
    buttons.push(
      <button key={i} onClick={() => setName('btn' + i)}>
        b{i}
      </button>,
    );
  }

  return (
    <div>
      <p>
        {name} renders:{renders.current}
      </p>
      {buttons}
      <button onClick={reset()}>Clear</button>
      {stats.length && (
        <ul>
          {stats.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
