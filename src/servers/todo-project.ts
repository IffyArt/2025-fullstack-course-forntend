import { apiClient } from '@/helper/api-client';
import { ApiPaginatedResponse, BaseApiResponse } from '@/models/api';
import { TodoProjectType } from '@/models/todo';
import { useMutation, useQuery } from '@tanstack/react-query';

const todoProjectListQueryKey = 'todoProjectList';

export const useTodoProjectList = () => {
  return useQuery({
    queryKey: [todoProjectListQueryKey],
    queryFn: async () => {
      const { data } = await apiClient.get('/v1/todo/projects');
      return data as ApiPaginatedResponse<BaseApiResponse<TodoProjectType>>;
    },
  });
};

export const useTodoProjectRetrieve = (projectId: string) => {
  return useQuery({
    queryKey: [todoProjectListQueryKey, projectId],
    queryFn: async () => {
      const { data } = await apiClient.get(`/v1/todo/projects/${projectId}`);
      return data as BaseApiResponse<TodoProjectType>;
    },
    enabled: !!projectId,
  });
};

export const useTodoProjectCreate = () => {
  return useMutation({
    mutationFn: async (project: TodoProjectType) => {
      const { data } = await apiClient.post('/v1/todo/projects', project);
      return data;
    },
  });
};

export const useTodoProjectUpdate = () => {
  return useMutation({
    mutationFn: async (project: TodoProjectType & { id: string }) => {
      const { data } = await apiClient.put(
        `/v1/todo/projects/${project.id}`,
        project,
      );
      return data;
    },
  });
};

export const useTodoProjectDelete = () => {
  return useMutation({
    mutationFn: async (projectId: string) => {
      const { data } = await apiClient.delete(`/v1/todo/projects/${projectId}`);
      return data;
    },
  });
};
