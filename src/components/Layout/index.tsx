import { useAuthContext } from '@/context/AuthContext';
import { Box, Center, Spinner } from '@chakra-ui/react';
import Footer from './Footer';
import LoginBox from './LoginBox';
import Navbar from './Navbar';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { access, isTokenLoading } = useAuthContext();

  if (isTokenLoading)
    return (
      <Center h='100vh'>
        <Spinner size='lg' />
      </Center>
    );

  if (!access)
    return (
      <Center h='100vh'>
        <LoginBox />
      </Center>
    );

  return (
    <>
      <Navbar />
      <Box as='main' minH='100vh' maxW='1200px' mx='auto'>
        {children}
      </Box>
      <Footer />
    </>
  );
};
