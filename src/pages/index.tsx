import { ColorModeButton } from '@/components/ui/color-mode';
import { Box, Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <ColorModeButton />
      <Button colorPalette='blue'>按鈕</Button>
      <Button colorPalette='green'>按鈕</Button>
      <Button colorPalette='red'>按鈕</Button>
      <Box layerStyle='card-elevated'>卡片內容</Box>
    </>
  );
}
