import { useState } from 'react';
import type { Todo } from '../hooks/useTodos';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, description: string) => void;
}

export default function TodoItem({ todo, onToggle, onDelete, onEdit }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.description);
  const [isConfirmingDelete, setIsConfirmingDelete] = useState(false);

  const startEdit = () => {
    setDraft(todo.description);
    setIsEditing(true);
  };

  const cancelEdit = () => {
    setDraft(todo.description);
    setIsEditing(false);
  };

  const confirmEdit = () => {
    onEdit(todo.id, draft);
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <div className="todo-item">
        <input
          type="text"
          className="edit-input"
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
        />
        <div className="todo-actions">
          <button className="cancel-button" onClick={cancelEdit}>
            Cancel
          </button>
          <button className="confirm-button" onClick={confirmEdit}>
            Confirm
          </button>
        </div>
      </div>
    );
  }

  if (isConfirmingDelete) {
    return (
      <div className="todo-item">
        <span>Delete this todo?</span>
        <div className="todo-actions">
          <button className="cancel-button" onClick={() => setIsConfirmingDelete(false)}>
            Cancel
          </button>
          <button className="confirm-button" onClick={() => onDelete(todo.id)}>
            Confirm
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="todo-item">
      <span className={todo.completed ? 'todo-description completed' : 'todo-description'}>
        {todo.description}
      </span>
      <div className="todo-actions">
        <input
          type="checkbox"
          checked={todo.completed}
          disabled={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        {!todo.completed && (
          <button className="edit-button" onClick={startEdit}>
            Edit
          </button>
        )}
        <button className="delete-button" onClick={() => setIsConfirmingDelete(true)}>
          Delete
        </button>
      </div>
    </div>
  );
}
