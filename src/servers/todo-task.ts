import { apiClient } from '@/helper/api-client';
import { ApiPaginatedResponse, BaseApiResponse } from '@/models/api';
import { TodoTaskType } from '@/models/todo';
import { useMutation, useQuery } from '@tanstack/react-query';

const todoTaskListQueryKey = 'todoTaskList';

export const useTodoTaskList = () => {
  return useQuery({
    queryKey: [todoTaskListQueryKey],
    queryFn: async () => {
      const { data } = await apiClient.get('/v1/todo/tasks');
      return data as ApiPaginatedResponse<BaseApiResponse<TodoTaskType>>;
    },
  });
};

export const useTodoTaskRetrieve = (taskId: string) => {
  return useQuery({
    queryKey: [todoTaskListQueryKey, taskId],
    queryFn: async () => {
      const { data } = await apiClient.get(`/v1/todo/tasks/${taskId}`);
      return data as BaseApiResponse<TodoTaskType>;
    },
    enabled: !!taskId,
  });
};

export const useTodoTaskCreate = () => {
  return useMutation({
    mutationFn: async (task: TodoTaskType) => {
      const { data } = await apiClient.post('/v1/todo/tasks', task);
      return data;
    },
  });
};

export const useTodoTaskUpdate = () => {
  return useMutation({
    mutationFn: async (task: TodoTaskType & { id: string }) => {
      const { data } = await apiClient.put(`/v1/todo/tasks/${task.id}`, task);
      return data;
    },
  });
};

export const useTodoTaskDelete = () => {
  return useMutation({
    mutationFn: async (taskId: string) => {
      const { data } = await apiClient.delete(`/v1/todo/tasks/${taskId}`);
      return data;
    },
  });
};
