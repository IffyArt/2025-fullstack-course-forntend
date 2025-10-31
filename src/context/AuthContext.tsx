import { useAuth } from '@/hooks/useAuth';
import { createContext, ReactNode, useContext } from 'react';

const AuthContext = createContext<ReturnType<typeof useAuth> | undefined>(
  undefined,
);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const auth = useAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuthContext 必須在 AuthProvider 中使用');
  return ctx;
};
