import { AuthProvider } from '@/context/AuthContext';
import { UserProvider } from '@/context/UserContext';
import queryClient from '@/helper/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </UserProvider>
    </QueryClientProvider>
  );
}
