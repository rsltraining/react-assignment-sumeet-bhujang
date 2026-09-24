import { useState } from 'react';

interface TodoInputProps {
  onAdd: (description: string) => void;
}

export default function TodoInput({ onAdd }: TodoInputProps) {
  const [text, setText] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAdd(text);
    setText('');
  };

  return (
    <section className="todo-input">
      <h1>TodoInput</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New Todo"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Add new task</button>
      </form>
    </section>
  );
}
