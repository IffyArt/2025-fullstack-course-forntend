import { todoTaskFieldConfig } from '@/fixtures/todo-field-config';
import { TodoTaskType } from '@/models/todo';
import {
  useTodoTaskCreate,
  useTodoTaskDelete,
  useTodoTaskList,
  useTodoTaskRetrieve,
  useTodoTaskUpdate,
} from '@/servers/todo-task';
import { useState } from 'react';
import { Form } from '../Form';

const TodoTask = () => {
  const [currentId, setCurrentId] = useState<number | null>(null);

  const {
    data: todoTaskList,
    refetch: refetchTodoTaskList,
    isFetching: isFetchingTodoTaskList,
    isPending: isPendingTodoTaskList,
  } = useTodoTaskList();
  const { data: todoTaskData } = useTodoTaskRetrieve(
    currentId?.toString() ?? '',
  );
  console.log(todoTaskList);
  const { mutate: createTodoTask } = useTodoTaskCreate();
  const { mutate: updateTodoTask } = useTodoTaskUpdate();
  const { mutate: deleteTodoTask } = useTodoTaskDelete();

  const handleCreateTodoTask = (data: TodoTaskType) => {
    createTodoTask(data, {
      onSuccess: () => {
        refetchTodoTaskList();
      },
    });
  };

  const handleUpdateTodoTask = (data: TodoTaskType) => {
    updateTodoTask(
      { ...data, id: currentId?.toString() ?? '' },
      {
        onSuccess: () => {
          refetchTodoTaskList();
          setCurrentId(null);
        },
      },
    );
  };

  const handleDeleteTodoTask = (id: number) => {
    deleteTodoTask(id.toString(), {
      onSuccess: () => {
        refetchTodoTaskList();
      },
    });
  };

  return (
    <div>
      {isPendingTodoTaskList || isFetchingTodoTaskList ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Todo Task 新增表單</h1>
          <Form
            fields={todoTaskFieldConfig}
            onSubmit={(data) => handleCreateTodoTask(data as TodoTaskType)}
          />

          {currentId && (
            <>
              <h1>
                Todo Task 編輯表單{' '}
                <button onClick={() => setCurrentId(null)}>取消編輯</button>
              </h1>
              <Form
                fields={todoTaskFieldConfig}
                onSubmit={(data) => handleUpdateTodoTask(data as TodoTaskType)}
                resetData={todoTaskData}
              />
            </>
          )}
        </>
      )}

      {todoTaskList && (
        <ul>
          {todoTaskList?.results?.map((task) => (
            <li key={task.id}>
              <div>
                {task.title}
                <br />
                {task.description}
                <br />
                {task.priority}
                <br />
                {task.project_id}
                <br />
                {task.is_completed ? '完成' : '未完成'}
              </div>
              <button onClick={() => setCurrentId(task.id)}>編輯欄位</button>
              <button onClick={() => handleDeleteTodoTask(task.id)}>
                刪除項目
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoTask;
