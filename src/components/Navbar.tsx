import { ColorModeButton } from '@/components/ui/color-mode';
import { Box, Button, Flex, HStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <Box
      as='nav'
      bg='white'
      borderBottom='1px'
      borderColor='gray.200'
      _dark={{ bg: 'gray.800', borderColor: 'gray.700' }}
      px={4}
      py={3}
    >
      <Flex
        maxW='container.xl'
        mx='auto'
        justify='space-between'
        align='center'
      >
        <Box fontWeight='bold' fontSize='xl'>
          Logo
        </Box>

        <HStack gap={4}>
          <Button variant='ghost' onClick={() => router.push('/')}>
            首頁
          </Button>
          <Button variant='ghost' onClick={() => router.push('/about')}>
            關於
          </Button>
          <ColorModeButton />
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
