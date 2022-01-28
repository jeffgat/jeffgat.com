import { Box, Center, Text } from '@chakra-ui/react';
import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box
      zIndex={-1}
      bgGradient='linear(-4deg, #EDF2F7 70%, white calc(70% + 2px))'
      h='500px'
      w='100%'
    >
      <Center h='500px'>
        <Text>Footer Stuff</Text>
      </Center>
    </Box>
  );
};

export default Footer;
