import { apiClient } from '@/helper/api-client';
import { ApiPaginatedResponse, BaseApiResponse } from '@/models/api';
import { TodoTagType } from '@/models/todo';
import { useMutation, useQuery } from '@tanstack/react-query';

const todoTagsListQueryKey = 'todoTagsList';

export const useTodoTagsList = () => {
  return useQuery({
    queryKey: [todoTagsListQueryKey],
    queryFn: async () => {
      const { data } = await apiClient.get('/v1/todo/tags');
      return data as ApiPaginatedResponse<BaseApiResponse<TodoTagType>>;
    },
  });
};

export const useTodoTagsRetrieve = (tagId: string) => {
  return useQuery({
    queryKey: [todoTagsListQueryKey, tagId],
    queryFn: async () => {
      const { data } = await apiClient.get(`/v1/todo/tags/${tagId}`);
      return data as BaseApiResponse<TodoTagType>;
    },
    enabled: !!tagId,
  });
};

export const useTodoTagsCreate = () => {
  return useMutation({
    mutationFn: async (tag: TodoTagType) => {
      const { data } = await apiClient.post('/v1/todo/tags', tag);
      return data;
    },
  });
};

export const useTodoTagUpdate = () => {
  return useMutation({
    mutationFn: async (tag: TodoTagType & { id: string }) => {
      const { data } = await apiClient.put(`/v1/todo/tags/${tag.id}`, tag);
      return data;
    },
  });
};

export const useTodoTagsDelete = () => {
  return useMutation({
    mutationFn: async (tagId: string) => {
      const { data } = await apiClient.delete(`/v1/todo/tags/${tagId}`);
      return data;
    },
  });
};
