import { Box, Container, Flex, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import MotionBox from './MotionBox';

type Props = {};

const Intro = (props: Props) => {
  return (
    <Box as='section'>
      <Container maxW='120ch' h='100vh'>
        <VStack
          align='start'
          position='relative'
          top='50%'
          transform='translateY(-50%)'
        >
          <Flex align='center' justify='start' textAlign='left'>
            <Heading fontSize='56px' fontWeight='700' mr='3'>
              Hello, I'm
            </Heading>
            <MotionBox
              transition={{ duration: 0.8, delay: 0.2 }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              as='h2'
              color='orange.400'
              fontSize='56px'
              fontWeight='700'
            >
              Jeff Gatbonton.
            </MotionBox>
          </Flex>
          <Flex align='center' justify='start'>
            <Heading fontSize='56px' fontWeight='700' mr='3'>
              I'm a
            </Heading>
            <MotionBox
              transition={{ duration: 0.8, delay: 0.6 }}
              initial={{ opacity: 0, x: -8, y: -8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              as='h2'
              color='blue.400'
              fontSize='56px'
              fontWeight='700'
            >
              Fullstack Developer
            </MotionBox>
            <Heading fontSize='56px' fontWeight='700' mx='3'>
              and
            </Heading>
            <MotionBox
              transition={{ duration: 0.8, delay: 0.6 }}
              initial={{ opacity: 0, x: 8, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              as='h2'
              color='red.400'
              fontSize='56px'
              fontWeight='700'
            >
              Designer.
            </MotionBox>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

export default Intro;
