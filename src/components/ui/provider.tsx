import { customSystemConfig } from '@/fixtures/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={customSystemConfig}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
