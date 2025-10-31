import {
  createSystem,
  defaultConfig,
  defineConfig,
  SystemConfig,
  SystemContext,
} from '@chakra-ui/react';
import colors from './colors';
import layerStyles from './layer-styles';

const config = defineConfig({
  theme: {
    layerStyles,
    tokens: {
      colors,
    },
  },
}) as SystemConfig;

export const customSystemConfig: SystemContext = createSystem(
  defaultConfig,
  config,
);
