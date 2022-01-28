import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text
} from '@chakra-ui/react';
import React from 'react';
import * as Scroll from 'react-scroll';

type Props = {};

const IconBlock = ({ img, text }: any) => {
  return (
    <Box>
      <Image src={img} w='48px' h='48px' />
      <Text fontSize='15px' mt='2'>
        {text}
      </Text>
    </Box>
  );
};

const Summary = (props: Props) => {
  const techStackData = [
    { img: 'images/apollo.png', text: 'Apollo' },
    { img: 'images/figma.png', text: 'Figma' },
    { img: 'images/graphql.png', text: 'GraphQL' },
    { img: 'images/javascript.png', text: 'Javascript' },
    { img: 'images/mongo.png', text: 'Mongo' },
    { img: 'images/node.png', text: 'Node' },
    { img: 'images/postgres.png', text: 'Postgres' },
    { img: 'images/react.png', text: 'React' },
    { img: 'images/redis.png', text: 'Redis' },
    { img: 'images/typescript.png', text: 'Typescript' },
  ];
  // const techStackData = [
  //   { img: javascript, text: 'Javascript' },
  //   { img: typescript, text: 'Typescript' },
  //   { img: react, text: 'React' },
  //   { img: node, text: 'Node' },
  //   { img: graphql, text: 'GraphQL' },
  //   { img: apollo, text: 'Apollo' },
  //   { img: redis, text: 'Redis' },
  //   { img: postgres, text: 'Postgres' },
  //   { img: mongo, text: 'Mongo' },
  //   { img: figma, text: 'Figma' },
  // ];

  const ScrollElement = Scroll.Element;
  return (
    <>
      <Box as='section' bg='gray.100' py='8' position='relative'>
        <Container maxW='120ch'>
          <ScrollElement name='scroll'>
            <Heading
              variant='h2'
              fontSize='40px'
              fontWeight='700'
              textTransform='uppercase'
              textAlign='center'
              color='gray.600'
            >
              Summary
            </Heading>
          </ScrollElement>
          <Flex align='center' justify='center' mt='8'>
            <Image
              src='images/headshot.jpg'
              maxW='450px'
              w='50%'
              rounded='md'
            />
            <Box maxW='50%' px='8' fontSize='17px'>
              <Text as='p' mb='4'>
                I began as a self-taught graphic designer, creating visuals
                across a wide spectrum. Working at an early stage startup taught
                me how to be involved in every part of the process of a project.
                And how to pick up new skills along the way.
              </Text>
              <Text as='p' mb='4'>
                Through that, I picked up front-end development and continued to
                develop my skills, leading me to become a full-stack developer.
              </Text>
              <Text as='span' display='block' fontWeight='600'>
                Preferred tech stack:
              </Text>
              <SimpleGrid
                columns={5}
                spacing={4}
                align='center'
                justify='center'
                mt='6'
              >
                {techStackData.map(t => {
                  return <IconBlock key={t.text} text={t.text} img={t.img} />;
                })}
              </SimpleGrid>
            </Box>
          </Flex>
        </Container>
        <Box
          zIndex={-1}
          position='absolute'
          bottom='-160px'
          bgGradient='linear(176deg, #EDF2F7 70%, white calc(70% + 2px))'
          h='300px'
          w='100%'
        />
      </Box>
    </>
  );
};

export default Summary;
