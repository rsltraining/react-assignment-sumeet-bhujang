import { useState } from 'react';

export interface Todo {
  id: string;
  description: string;
  completed: boolean;
}

export type Filter = 'all' | 'completed' | 'pending';

export function useTodos() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>('all');

  const addTodo = (description: string) => {
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      description,
      completed: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const editTodo = (id: string, description: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, description } : todo))
    );
  };

  const toggleComplete = (id: string) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed: true } : todo))
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  let filteredTodos: Todo[];
  switch (filter) {
    case 'completed':
      filteredTodos = todos.filter((todo) => todo.completed);
      break;
    case 'pending':
      filteredTodos = todos.filter((todo) => !todo.completed);
      break;
    default:
      filteredTodos = todos;
  }

  const visibleTodos = [
    ...filteredTodos.filter((todo) => todo.completed),
    ...filteredTodos.filter((todo) => !todo.completed),
  ];

  return {
    todos,
    visibleTodos,
    filter,
    setFilter,
    addTodo,
    editTodo,
    toggleComplete,
    deleteTodo,
  };
}
