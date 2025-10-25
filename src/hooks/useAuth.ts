import { useAuthJwtCreate } from '@/servers/auth';
import { useState } from 'react';

export const useAuth = () => {
  const { mutate: authJwtCreate } = useAuthJwtCreate();

  const [access, setAccess] = useState<string | null>(null);
  const [refresh, setRefresh] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    authJwtCreate(
      { username, password },
      {
        onSuccess: (data) => {
          setAccess(data.access);
          setRefresh(data.refresh);
          localStorage.setItem('access', data.access);
        },
        onError: (error) => {
          console.error(error);
        },
      },
    );
  };

  const logout = () => {
    setAccess(null);
    setRefresh(null);
  };

  return { access, refresh, login, logout };
};
