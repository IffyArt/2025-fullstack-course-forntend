// TodoItem.jsx
import { memo, useState } from 'react';

const TodoItem = memo(({ todo, index, deleteTodo }) => {
  const { id, title, completed } = todo;
  const [open, setOpen] = useState(false);
  return (
    <li>
      <h2 onClick={() => setOpen((v) => !v)}>
        {index + 1}. {title}
      </h2>
      {open && (
        <>
          <p>{completed ? '完成' : '未完成'}</p>
          <button onClick={() => deleteTodo(id)}>Delete</button>
        </>
      )}
    </li>
  );
});
export default TodoItem;
