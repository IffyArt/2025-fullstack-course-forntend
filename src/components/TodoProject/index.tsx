import { todoProjectFieldConfig } from '@/fixtures/todo-field-config';
import { TodoProjectType } from '@/models/todo';
import {
  useTodoProjectCreate,
  useTodoProjectDelete,
  useTodoProjectList,
  useTodoProjectRetrieve,
  useTodoProjectUpdate,
} from '@/servers/todo-project';
import { useState } from 'react';
import { Form } from '../Form';

const TodoProject = () => {
  const [currentId, setCurrentId] = useState<number | null>(null);

  const {
    data: todoProjectList,
    refetch: refetchTodoProjectList,
    isFetching: isFetchingTodoProjectList,
    isPending: isPendingTodoProjectList,
  } = useTodoProjectList();
  const { data: todoProjectData } = useTodoProjectRetrieve(
    currentId?.toString() ?? '',
  );
  const { mutate: createTodoProject } = useTodoProjectCreate();
  const { mutate: updateTodoProject } = useTodoProjectUpdate();
  const { mutate: deleteTodoProject } = useTodoProjectDelete();

  const handleCreateTodoProject = (data: TodoProjectType) => {
    createTodoProject(data, {
      onSuccess: () => {
        refetchTodoProjectList();
      },
    });
  };

  const handleUpdateTodoProject = (data: TodoProjectType) => {
    updateTodoProject(
      { ...data, id: currentId?.toString() ?? '' },
      {
        onSuccess: () => {
          refetchTodoProjectList();
          setCurrentId(null);
        },
      },
    );
  };

  const handleDeleteTodoProject = (id: number) => {
    deleteTodoProject(id.toString(), {
      onSuccess: () => {
        refetchTodoProjectList();
      },
    });
  };

  return (
    <div>
      {isPendingTodoProjectList || isFetchingTodoProjectList ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Todo Project 新增表單</h1>
          <Form
            fields={todoProjectFieldConfig}
            onSubmit={(data) =>
              handleCreateTodoProject(data as TodoProjectType)
            }
          />

          {currentId && (
            <>
              <h1>
                Todo Project 編輯表單{' '}
                <button onClick={() => setCurrentId(null)}>取消編輯</button>
              </h1>
              <Form
                fields={todoProjectFieldConfig}
                onSubmit={(data) =>
                  handleUpdateTodoProject(data as TodoProjectType)
                }
                resetData={todoProjectData}
              />
            </>
          )}
        </>
      )}

      {todoProjectList && (
        <ul>
          {todoProjectList?.results?.map((project) => (
            <li key={project.id}>
              <div>
                {project.name} {project.is_public ? '公開' : '私密'}
              </div>
              <button onClick={() => setCurrentId(project.id)}>編輯欄位</button>
              <button onClick={() => handleDeleteTodoProject(project.id)}>
                刪除項目
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoProject;
