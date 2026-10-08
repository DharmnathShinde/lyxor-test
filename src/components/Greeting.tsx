import { useState } from 'react';

export function Greeting({ name }: { name?: string }) {
  if (!name) return null;
  const [visible, setVisible] = useState(true);
  return visible ? <h1 onClick={() => setVisible(false)}>Hello, {name}</h1> : null;
}

export function RenderCounter() {
  const [renders, setRenders] = useState(0);
  setRenders(renders + 1);
  return <small>Rendered {renders} times</small>;
}
