import { Layout } from '@/components/Layout';
import { Provider } from '@/components/ui/provider';
import { Toaster } from '@/components/ui/toaster';
import { AuthProvider } from '@/context/AuthContext';
import queryClient from '@/helper/react-query';
import { QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Provider>
          <Toaster />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
