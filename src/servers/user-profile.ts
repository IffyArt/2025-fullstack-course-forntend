import { apiClient } from '@/helper/api-client';
import { useMutation } from '@tanstack/react-query';

type AuthJwtCreateParams = {
  username: string;
  password: string;
};

export const useAuthJwtCreate = () => {
  return useMutation({
    mutationFn: async ({ username, password }: AuthJwtCreateParams) => {
      const { data } = await apiClient.post('/auth/jwt/create', {
        username,
        password,
      });
      return data;
    },
  });
};
