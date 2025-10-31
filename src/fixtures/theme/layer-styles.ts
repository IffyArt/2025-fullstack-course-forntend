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
  'border-solid-all': {
    description: 'border solid',
    value: {
      border: '1px solid',
      borderColor: 'gray.200',
    },
  },
  'card-elevated': {
    description: '卡片樣式',
    value: {
      padding: '8',
      borderRadius: 'md',
      boxShadow: 'lg',
      bg: 'white',
      _dark: { bg: 'gray.800' },
    },
  },
});

export default layerStyles;
