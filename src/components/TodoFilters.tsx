import type { Filter } from '../hooks/useTodos';

interface TodoFiltersProps {
  filter: Filter;
  onFilterChange: (filter: Filter) => void;
}

const filters: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Done', value: 'completed' },
  { label: 'Todo', value: 'pending' },
];

export default function TodoFilters({ filter, onFilterChange }: TodoFiltersProps) {
  return (
    <div className="todo-filters">
      {filters.map((item) => (
        <button
          key={item.value}
          className="filter-button"
          style={{ opacity: filter === item.value ? 1 : 0.6 }}
          onClick={() => onFilterChange(item.value)}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
