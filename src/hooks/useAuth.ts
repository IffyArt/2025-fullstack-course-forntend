import axios from 'axios';
import { useState } from 'react';

export const useAuth = () => {
  const [access, setAccess] = useState<string | null>(null);
  const [refresh, setRefresh] = useState<string | null>(null);

  const login = async (username: string, password: string) => {
    const res = await axios.post('http://localhost:8000/api/auth/jwt/create', {
      username,
      password,
    });
    setAccess(res.data.access);
    setRefresh(res.data.refresh);
  };

  const logout = () => {
    setAccess(null);
    setRefresh(null);
  };

  return { access, refresh, login, logout };
};
