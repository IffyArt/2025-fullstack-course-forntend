import { toaster } from '@/components/ui/toaster';
import { useAuthJwtCreate, useAuthJwtRefresh } from '@/servers/auth';
import { useEffect, useState } from 'react';

export const useAuth = () => {
  const { mutate: authJwtCreate, isPending: isJwtCreateLoading } =
    useAuthJwtCreate();
  const { mutate: authJwtRefresh, isPending: isJwtRefreshLoading } =
    useAuthJwtRefresh();

  const isTokenLoading = isJwtCreateLoading || isJwtRefreshLoading;

  const [access, setAccess] = useState<string | null>(null);

  const handleSetToken = (access: string, refresh: string) => {
    setAccess(access);
    localStorage.setItem('access', access);
    localStorage.setItem('refresh', refresh);
  };

  const handleRemoveToken = () => {
    setAccess(null);
    localStorage.removeItem('access');
    localStorage.removeItem('refresh');
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleError = (error: any) => {
    toaster.create({
      title: '登入失敗',
      description: (error.response?.data?.detail as string) || '登入失敗',
      type: 'error',
    });
  };

  useEffect(() => {
    const refresh = localStorage.getItem('refresh');
    if (refresh) {
      authJwtRefresh(refresh, {
        onSuccess: (data) => {
          handleSetToken(data.access, data.refresh);
        },
        onError: (error) => {
          handleError(error);
          handleRemoveToken();
        },
      });
    }
  }, [authJwtRefresh]);

  const login = async (username: string, password: string) => {
    authJwtCreate(
      { username, password },
      {
        onSuccess: (data) => {
          handleSetToken(data.access, data.refresh);
          toaster.create({
            title: '登入成功',
            description: '登入成功',
            type: 'success',
          });
        },
        onError: (error) => {
          handleError(error);
          handleRemoveToken();
        },
      },
    );
  };

  const logout = () => {
    handleRemoveToken();
  };

  return { access, login, logout, isTokenLoading };
};
