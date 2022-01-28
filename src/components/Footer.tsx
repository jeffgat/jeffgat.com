import { Box, Center, Flex, Icon, Link, Text } from '@chakra-ui/react';
import React from 'react';
import { FaDribbble, FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdCopyright } from 'react-icons/md';

type Props = {};

const Footer = (props: Props) => {
  const iconSize = 10;
  return (
    <Box
      zIndex={-1}
      bgGradient='linear(-4deg, #EDF2F7 70%, white calc(70% + 2px))'
      h='500px'
      w='100%'
    >
      <Center h='500px'>
        <Box position='relative' top='80px'>
          <Flex align='center' justify='center'>
            <Icon as={MdCopyright} color='gray.500' mr='2' />
            <Text fontWeight='600' color='gray.500'>
              Jeffrey Gatbonton - 2022
            </Text>
          </Flex>
          <Flex align='center' justify='center' mt='4'>
            <Link href='https://github.com/jeffgat' target='_blank' mr='4'>
              <Icon
                color='gray.400'
                as={FaGithub}
                w={iconSize}
                h={iconSize}
                transition='all ease 300ms'
                _hover={{
                  color: 'gray.500',
                  transform: 'scale(1.05)',
                }}
              />
            </Link>
            <Link
              href='https://www.linkedin.com/in/jeff-gatbonton/'
              target='_blank'
              _focus={{
                outline: 'none',
              }}
              mr='4'
            >
              <Icon
                color='gray.400'
                as={FaLinkedin}
                w={iconSize}
                h={iconSize}
                transition='all ease 300ms'
                _hover={{
                  color: 'gray.500',
                  transform: 'scale(1.05)',
                }}
              />
            </Link>
            <Link
              href='https://dribbble.com/jeffgat'
              target='_blank'
              _focus={{
                outline: 'none',
              }}
            >
              <Icon
                _hover={{
                  color: 'gray.500',
                  transform: 'scale(1.05)',
                }}
                color='gray.400'
                as={FaDribbble}
                w={iconSize}
                h={iconSize}
                transition='all ease 300ms'
              />
            </Link>
          </Flex>
        </Box>
      </Center>
    </Box>
  );
};

export default Footer;
