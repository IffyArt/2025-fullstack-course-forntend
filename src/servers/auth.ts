import { apiClient } from '@/helper/api-client';
import { AuthJwtCreateParams, AuthJwtTokenResponse } from '@/models/auth';
import { useMutation } from '@tanstack/react-query';

export const useAuthJwtCreate = () => {
  return useMutation({
    mutationFn: async ({ username, password }: AuthJwtCreateParams) => {
      const { data } = await apiClient.post('/auth/jwt/create', {
        username,
        password,
      });
      return data as AuthJwtTokenResponse;
    },
  });
};

export const useAuthJwtRefresh = () => {
  return useMutation({
    mutationFn: async (refresh: string) => {
      const { data } = await apiClient.post('/auth/jwt/refresh', {
        refresh,
      });
      return data as AuthJwtTokenResponse;
    },
  });
};
