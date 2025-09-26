import { useCallback, useEffect, useMemo, useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=50')
      .then((r) => r.json())
      .then((data) => setTodoList(data));
  }, []);

  const deleteTodo = useCallback((id) => {
    setTodoList((list) => list.filter((t) => t.id !== id));
  }, []);

  const filtered = useMemo(() => {
    const k = keyword.trim().toLowerCase();
    return k
      ? todoList.filter((t) => t.title.toLowerCase().includes(k))
      : todoList;
  }, [keyword, todoList]);

  return (
    <div>
      <h1>Todo list</h1>
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='搜尋標題'
      />
      <ul>
        {filtered.map((todo, index) => (
          <TodoItem
            key={todo.id}
            index={index}
            todo={todo}
            deleteTodo={deleteTodo}
          />
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
