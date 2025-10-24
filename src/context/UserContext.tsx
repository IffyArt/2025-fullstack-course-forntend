import { createContext, ReactNode, useContext, useState } from 'react';

// 定義型別
type User = { name: string; role: string };
type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
};

// 建立 Context
const UserContext = createContext<UserContextType | undefined>(undefined);

// 提供者組件
export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>({
    name: '江星誌',
    role: '系統分析師',
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// 封裝成自訂 Hook
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser 必須在 UserProvider 內使用');
  }
  return context;
};
