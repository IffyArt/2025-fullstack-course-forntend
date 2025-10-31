import { defineLayerStyles } from '@chakra-ui/react';

const layerStyles = defineLayerStyles({
  // border styles
  'border-solid-top': {
    description: 'border top solid',
    value: {
      borderTop: '1px solid',
      borderColor: 'gray.200',
    },
  },
  'card-elevated': {
    description: '卡片樣式',
    value: {
      padding: '4',
      borderRadius: 'md',
      boxShadow: 'lg',
      bg: 'white',
      _dark: { bg: 'gray.800' },
    },
  },
});

export default layerStyles;
