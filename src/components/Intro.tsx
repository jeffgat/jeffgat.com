import { Box, Container, Flex, Heading, VStack } from '@chakra-ui/react';
import React from 'react';
import MotionBox from './MotionBox';

type Props = {};

const Intro = (props: Props) => {
  // const scroller = Scroll.scroller;

  // const handleClick = () => {
  //   scroller.scrollTo('scroll', {
  //     duration: 800,
  //     delay: 100,
  //     smooth: true,
  //     offset: -45
  //   });
  // };

  const fontSize = { base: '28px', md: '30px', lg: '42px', xl: '52px' };

  return (
    <Box as='section' position='relative'>
      <Container maxW='120ch' h='100vh'>
        <VStack
          display={{ base: 'flex', md: 'none' }}
          align='start'
          position='relative'
          top='50%'
          transform='translateY(-50%)'
        >
          <Heading fontSize={fontSize} fontWeight='700' mr='3'>
            Hello, I'm
          </Heading>
          <MotionBox
            transition={{ duration: 0.8, delay: 0.2 }}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            as='h2'
            color='orange.400'
            fontSize={fontSize}
            fontWeight='700'
          >
            Jeff Gatbonton.
          </MotionBox>

          <Heading fontSize={fontSize} fontWeight='700' mr='3'>
            I'm a
          </Heading>
          <MotionBox
            transition={{ duration: 0.8, delay: 0.6 }}
            initial={{ opacity: 0, x: -8, y: -8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            as='h2'
            color='blue.400'
            fontSize={fontSize}
            fontWeight='700'
          >
            Fullstack Developer
          </MotionBox>
          <Flex align='center' justify='start'>
            <Heading fontSize={fontSize} fontWeight='700' mr='3'>
              and
            </Heading>
            <MotionBox
              transition={{ duration: 0.8, delay: 0.6 }}
              initial={{ opacity: 0, x: 8, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              as='h2'
              color='red.400'
              fontSize={fontSize}
              fontWeight='700'
            >
              Ex-Designer.
            </MotionBox>
          </Flex>
        </VStack>
        <VStack
          display={{ base: 'none', md: 'flex' }}
          align='start'
          position='relative'
          top='50%'
          transform='translateY(-50%)'
        >
          <Flex align='center' justify='start' textAlign='left'>
            <Heading fontSize={fontSize} fontWeight='700' mr='3'>
              Hello, I'm
            </Heading>
            <MotionBox
              transition={{ duration: 0.8, delay: 0.2 }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              as='h2'
              color='orange.400'
              fontSize={fontSize}
              fontWeight='700'
            >
              Jeff Gatbonton.
            </MotionBox>
          </Flex>
          <Flex align='center' justify='start'>
            <Heading fontSize={fontSize} fontWeight='700' mr='3'>
              I'm a
            </Heading>
            <MotionBox
              transition={{ duration: 0.8, delay: 0.6 }}
              initial={{ opacity: 0, x: -8, y: -8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              as='h2'
              color='blue.400'
              fontSize={fontSize}
              fontWeight='700'
            >
              Fullstack Developer
            </MotionBox>
            <Heading fontSize={fontSize} fontWeight='700' mx='3'>
              and
            </Heading>
            <MotionBox
              transition={{ duration: 0.8, delay: 0.6 }}
              initial={{ opacity: 0, x: 8, y: 8 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              as='h2'
              color='red.400'
              fontSize={fontSize}
              fontWeight='700'
            >
              Ex-Designer.
            </MotionBox>
          </Flex>
        </VStack>
      </Container>
      {/* <MotionBox
        transition={{ repeat: Infinity, duration: 2, delay: 3 }}
        animate={{ y: [0, 16, 0] }}
        position='absolute'
        left='50%'
        bottom='12'
        transform='translateX(-50%)'
      >
        <IconButton
          type='button'
          variant='unstyled'
          aria-label='Scroll Down'
          icon={<ArrowDownIcon />}
          fontSize='40px'
          onClick={handleClick}
          _focus={{
            outline: 'none',
          }}
        />
      </MotionBox> */}
    </Box>
  );
};

export default Intro;
