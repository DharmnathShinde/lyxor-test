import { useEffect, useState } from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  const addThree = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  useEffect(() => {
    const id = setInterval(() => setCount(count + 1), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div>
      <span>{count}</span>
      <button onClick={addThree}>+3</button>
    </div>
  );
}
