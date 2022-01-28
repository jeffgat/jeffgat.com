import { Icon, Link, VStack } from '@chakra-ui/react';
import React from 'react';
import { FaDribbble, FaGithub, FaLinkedin } from 'react-icons/fa';
import MotionBox from './MotionBox';

type Props = {};

const iconSize = { base: 8, md: 10 };

const SocialsVert = (props: Props) => {
  return (
    <VStack position='absolute' left={{base: '4', md: '6'}} top='6'>
      <Link href='https://github.com/jeffgat' target='_blank'>
        <MotionBox
          transition={{ duration: 0.8, delay: 0.6 }}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Icon
            color='orange.400'
            as={FaGithub}
            w={iconSize}
            h={iconSize}
            transition='all ease 300ms'
            _hover={{
              color: 'orange.500',
              transform: 'scale(1.05)',
            }}
          />
        </MotionBox>
      </Link>
      <Link
        href='https://www.linkedin.com/in/jeff-gatbonton/'
        target='_blank'
        position='relative'
        top='4'
        _focus={{
          outline: 'none',
        }}
      >
        <MotionBox
          transition={{ duration: 0.8, delay: 0.6 }}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Icon
            color='blue.400'
            as={FaLinkedin}
            w={iconSize}
            h={iconSize}
            transition='all ease 300ms'
            _hover={{
              color: 'blue.500',
              transform: 'scale(1.05)',
            }}
          />
        </MotionBox>
      </Link>
      <Link
        href='https://dribbble.com/jeffgat'
        target='_blank'
        position='relative'
        top='8'
        _focus={{
          outline: 'none',
        }}
      >
        <MotionBox
          transition={{ duration: 0.8, delay: 0.6 }}
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <Icon
            _hover={{
              color: 'red.500',
              transform: 'scale(1.05)',
            }}
            color='red.400'
            as={FaDribbble}
            w={iconSize}
            h={iconSize}
            transition='all ease 300ms'
          />
        </MotionBox>
      </Link>
    </VStack>
  );
};

export default SocialsVert;
