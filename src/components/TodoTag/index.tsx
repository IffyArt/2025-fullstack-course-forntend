import { todoTagFieldConfig } from '@/fixtures/todo-field-config';
import { TodoTagType } from '@/models/todo';
import {
  useTodoTagsCreate,
  useTodoTagsDelete,
  useTodoTagsList,
  useTodoTagsRetrieve,
  useTodoTagUpdate,
} from '@/servers/todo-tags';
import { useState } from 'react';
import { Form } from '../Form';

const TodoTag = () => {
  const [currentId, setCurrentId] = useState<number | null>(null);

  const {
    data: todoTagList,
    refetch: refetchTodoTagList,
    isFetching: isFetchingTodoTagList,
    isPending: isPendingTodoTagList,
  } = useTodoTagsList();
  const { data: todoTagData } = useTodoTagsRetrieve(
    currentId?.toString() ?? '',
  );
  const { mutate: createTodoTag } = useTodoTagsCreate();
  const { mutate: updateTodoTag } = useTodoTagUpdate();
  const { mutate: deleteTodoTag } = useTodoTagsDelete();

  const handleCreateTodoTag = (data: TodoTagType) => {
    createTodoTag(data, {
      onSuccess: () => {
        refetchTodoTagList();
      },
    });
  };

  const handleUpdateTodoTag = (data: TodoTagType) => {
    updateTodoTag(
      { ...data, id: currentId?.toString() ?? '' },
      {
        onSuccess: () => {
          refetchTodoTagList();
          setCurrentId(null);
        },
      },
    );
  };

  const handleDeleteTodoTag = (id: number) => {
    deleteTodoTag(id.toString(), {
      onSuccess: () => {
        refetchTodoTagList();
      },
    });
  };

  return (
    <div>
      {isPendingTodoTagList || isFetchingTodoTagList ? (
        <div>Loading...</div>
      ) : (
        <>
          <h1>Todo Tag 新增表單</h1>
          <Form
            fields={todoTagFieldConfig}
            onSubmit={(data) => handleCreateTodoTag(data as TodoTagType)}
          />

          {currentId && (
            <>
              <h1>
                Todo Tag 編輯表單{' '}
                <button onClick={() => setCurrentId(null)}>取消編輯</button>
              </h1>
              <Form
                fields={todoTagFieldConfig}
                onSubmit={(data) => handleUpdateTodoTag(data as TodoTagType)}
                resetData={todoTagData}
              />
            </>
          )}
        </>
      )}

      {todoTagList && (
        <ul>
          {todoTagList?.results?.map((tag) => (
            <li key={tag.id}>
              <div>{tag.name}</div>
              <button onClick={() => setCurrentId(tag.id)}>編輯欄位</button>
              <button onClick={() => handleDeleteTodoTag(tag.id)}>
                刪除項目
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodoTag;
