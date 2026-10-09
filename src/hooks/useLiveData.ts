import { useEffect, useRef, useState } from 'react';

interface Msg {
  id: number;
  text: string;
}

export function useLiveData(url: string) {
  const [items, setItems] = useState<Msg[]>([]);
  const bottom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const connect = () => {
      const ws = new WebSocket(url);
      ws.onmessage = (e) => {
        const msg: Msg = JSON.parse(e.data);
        setItems((prev) => [...prev, msg]);
      };
      ws.onclose = () => connect();
    };
    connect();
  }, [url]);

  useEffect(() => {
    bottom.current!.scrollIntoView();
  }, [items]);

  useEffect(() => {
    setItems((prev) => prev.filter((m) => m.text.trim() !== ''));
  });

  const latest = items[items.length - 1].id;

  return { items, bottom, latest };
}
