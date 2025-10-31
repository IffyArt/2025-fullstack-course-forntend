import { toaster } from '@/components/ui/toaster';
import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      toaster.create({
        type: 'error',
        description:
          (error.response?.data?.detail as string) ||
          'Oops! Something went wrong!',
      });
    },
  }),
  mutationCache: new MutationCache({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      toaster.create({
        type: 'error',
        description:
          (error.response?.data?.detail as string) ||
          'Oops! Something went wrong!',
      });
    },
  }),
});

export default queryClient;
