import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import { useTodos } from './hooks/useTodos';

function App() {
  const {
    todos,
    visibleTodos,
    filter,
    setFilter,
    addTodo,
    editTodo,
    toggleComplete,
    deleteTodo,
  } = useTodos();

  return (
    <div className="app">
      <TodoInput onAdd={addTodo} />
      <TodoList
        todos={visibleTodos}
        hasAnyTodo={todos.length > 0}
        filter={filter}
        onFilterChange={setFilter}
        onToggle={toggleComplete}
        onDelete={deleteTodo}
        onEdit={editTodo}
      />
    </div>
  );
}

export default App;
