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
});

export default layerStyles;
