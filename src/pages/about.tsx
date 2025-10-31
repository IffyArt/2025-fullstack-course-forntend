import Navbar from '@/components/Navbar';
import { Box, Heading } from '@chakra-ui/react';

export default function About() {
  return (
    <>
      <Navbar />
      <Box p={8}>
        <Heading>關於頁面</Heading>
      </Box>
    </>
  );
}
