import { Box, Center } from '@chakra-ui/react';
import React from 'react';

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box>
      <Box
        zIndex={-1}
        position='absolute'
        bottom='-160px'
        bgGradient='linear(-4deg, #EDF2F7 70%, white calc(70% + 2px))'
        h='500px'
        w='100%'
      />
      <Center>Footer Stuff</Center>
      <Center>Socials</Center>
    </Box>
  );
};

export default Footer;
