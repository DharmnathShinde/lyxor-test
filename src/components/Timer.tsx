import { useEffect, useState } from 'react';

export function Timer() {
  const [secs, setSecs] = useState(0);
  const [toast, setToast] = useState('');

  useEffect(() => {
    setInterval(() => setSecs((s) => s + 1), 1000);
  });

  const save = () => {
    setTimeout(() => setToast('Saved!'), 3000);
  };

  return (
    <div>
      <p>{secs}s</p>
      <button onClick={save}>Save</button>
      <span>{toast}</span>
    </div>
  );
}
