import type { Filter, Todo } from '../hooks/useTodos';
import TodoFilters from './TodoFilters';
import TodoItem from './TodoItem';

interface TodoListProps {
  todos: Todo[];
  hasAnyTodo: boolean;
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, description: string) => void;
}

export default function TodoList({
  todos,
  hasAnyTodo,
  filter,
  onFilterChange,
  onToggle,
  onDelete,
  onEdit,
}: TodoListProps) {
  return (
    <section className="todo-list">
      <h1>TodoList</h1>
      {hasAnyTodo && <TodoFilters filter={filter} onFilterChange={onFilterChange} />}
      {todos.length === 0 ? (
        <p className="empty-message">No todo is available</p>
      ) : (
        <div className="todo-rows">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={onToggle}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </div>
      )}
    </section>
  );
}
