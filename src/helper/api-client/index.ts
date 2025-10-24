import axios from 'axios';

export const apiClient = axios.create({
  baseURL: 'http://localhost:8000/api',
});

// 攔截器設定
apiClient.interceptors.request.use((config) => {
  const access = localStorage.getItem('access');
  if (access) config.headers.Authorization = `Bearer ${access}`;
  return config;
});
