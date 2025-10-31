import { Center, Spinner } from '@chakra-ui/react';

type LoadingLayoutProps = {
  isLoading: boolean;
  children: React.ReactNode;
};

export const LoadingLayout = ({ isLoading, children }: LoadingLayoutProps) => {
  if (isLoading)
    return (
      <Center h='200px'>
        <Spinner size='xl' color='blue.solid' />
      </Center>
    );
  return children;
};
