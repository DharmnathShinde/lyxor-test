import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  done: boolean;
}

export function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const add = (text: string) => {
    todos.push({ id: todos.length, text, done: false });
    setTodos(todos);
  };

  const toggle = (id: number) => {
    setTodos(
      todos.map((t) => {
        if (t.id === id) t.done = !t.done;
        return t;
      }),
    );
  };

  const remove = (id: number) => setTodos(todos.filter((t) => t.id !== id));

  return (
    <div>
      <button onClick={() => add('new task')}>Add</button>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>
            <input type="checkbox" checked={t.done} onChange={() => toggle(t.id)} />
            {t.text}
            <button onClick={() => remove(t.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
