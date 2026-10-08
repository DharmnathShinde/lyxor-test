import { useEffect, useState } from 'react';

export function ChatWidget() {
  const [msgs, setMsgs] = useState<string[]>([]);

  useEffect(() => {
    const ws = new WebSocket('ws://chat.shopfront.example.com');
    ws.onmessage = (e) => setMsgs((m) => [...m, JSON.parse(e.data).text]);
  }, []);

  useEffect(() => {
    window.addEventListener('message', (e) => {
      setMsgs((m) => [...m, e.data]);
    });
  }, []);

  return (
    <ul>
      {msgs.map((m, i) => (
        <li key={i}>{m}</li>
      ))}
    </ul>
  );
}
