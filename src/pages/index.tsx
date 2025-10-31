import { ColorModeButton } from '@/components/ui/color-mode';
import { Button } from '@chakra-ui/react';

export default function Home() {
  return (
    <>
      <ColorModeButton />
      <Button colorPalette='blue'>按鈕</Button>
    </>
  );
}
