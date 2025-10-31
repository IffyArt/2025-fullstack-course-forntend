import { ColorModeButton } from '@/components/ui/color-mode';
import { useAuthContext } from '@/context/AuthContext';
import { Box, Button, Flex, HStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const { logout } = useAuthContext();

  const handleLogout = () => {
    logout();
  };

  return (
    <Box
      as='nav'
      borderBottom='1px'
      bgColor='gray.200'
      _dark={{ borderColor: 'gray.700' }}
      px={4}
      py={3}
    >
      <Flex maxW='1200px' mx='auto' justify='space-between' align='center'>
        <Box fontWeight='bold' fontSize='xl'>
          Logo
        </Box>

        <HStack gap={4}>
          <Button variant='ghost' onClick={() => router.push('/')}>
            首頁
          </Button>
          <Button variant='ghost' onClick={handleLogout}>
            登出
          </Button>
          <ColorModeButton />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
