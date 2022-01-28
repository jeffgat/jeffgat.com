import { ArrowForwardIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Link,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text
} from '@chakra-ui/react';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import ReactPlayer from 'react-player';
import creationCrate from '../images/creation-crate.png';
import hannyaProject from '../images/hannya-project.png';

type Props = {};

const tabProps = {
  fontWeight: '600',
  roundedTop: 'md',
  _selected: {
    color: 'blue.400',
    borderBottomColor: 'blue.400',
    bg: 'blue.50',
  },
  _focus: { outline: 'none' },
};

const tabHeadingProps = {
  color: 'gray.600',
  fontSize: '32px',
};

const Projects = (props: Props) => {
  return (
    <>
      <Box as='section' h='900px' mt='200px'>
        <Container maxW='120ch'>
          <Heading
            variant='h2'
            fontSize='40px'
            fontWeight='700'
            textTransform='uppercase'
            mb='12'
            color='gray.600'
          >
            Recent Projects
          </Heading>
          <Tabs>
            <TabList>
              <Tab {...tabProps}>Creation Crate</Tab>
              <Tab {...tabProps}>NFT Minter</Tab>
              <Tab {...tabProps}>Cevnn</Tab>
              <Tab {...tabProps}>Cevnn Dashboard</Tab>
              <Tab {...tabProps}>MADD Donation</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Text>
                  Creation Crate is a subscription box service that combines
                  hands-on learning with online lessons. This project is a
                  custom built e-commerce solution built from scratch. It
                  integrates with multiple platforms and APIs, managing things
                  like recurring payments, shipping, inventory, and accounts. I
                  designed and developed this as the sole developer at the
                  company.
                </Text>
                <Text my='4'>
                  Built with Typescript/React, Next.js, Node, GraphQL, Redis,
                  Postgres, and Docker.
                </Text>
                <Flex mb='4'>
                  <Button
                    as={Link}
                    href='https://www.creationcrate.com/'
                    target='_blank'
                    color='white'
                    bg='blue.400'
                    rightIcon={<ArrowForwardIcon />}
                    _hover={{ bg: 'blue.500', textDecoration: 'none' }}
                  >
                    See Live
                  </Button>
                </Flex>
                <Box w='960px' h='540px'>
                  <Image src={creationCrate} />
                </Box>
              </TabPanel>
              <TabPanel>
                <Text>
                  This was a side project to explore some of the emerging
                  technology around Web3. The website is a React front-end, with
                  a single smart contract as the back-end. It connects to your
                  Meta Mask wallet and when you click "Mint", it requests MATIC
                  (Polygon Mumbai Testnet) from your wallet and mints a new NFT
                  from a collection I created.
                </Text>
                <Text my='4'>
                  Built with Typescript/React, Solidity, OpenZeppelin, Hardhat,
                  Ethers.js, Pinata, Alchemy, and the IPFS.
                </Text>
                <Flex mb='4'>
                  <Button
                    as={Link}
                    href='https://github.com/jeffgat/web3-exploration/tree/main/web3-app'
                    target='_blank'
                    color='white'
                    bg='red.400'
                    rightIcon={<FaGithub />}
                    _hover={{ bg: 'red.500', textDecoration: 'none' }}
                  >
                    Source Code
                  </Button>
                  <Button
                    as={Link}
                    href=''
                    target='_blank'
                    color='white'
                    bg='blue.400'
                    rightIcon={<ArrowForwardIcon />}
                    ml='4'
                    _hover={{ bg: 'blue.500', textDecoration: 'none' }}
                  >
                    See Live
                  </Button>
                </Flex>
                <Box w='960px' h='540px'>
                  <Image src={hannyaProject} />
                </Box>
              </TabPanel>
              <TabPanel>
                <Text>
                  Cevnn Payments was a fintech startup that works in the
                  Canadian payment processing space. The goal here was to design
                  and create a static website that gave us that modern fintech
                  look, while telling people what we do.
                </Text>
                <Text my='4'>Built with Javascript/React</Text>
                <Box pointerEvents='none' w='960px' h='540px'>
                  <ReactPlayer
                    url='https://www.youtube.com/watch?v=HwO5hh0Eygo'
                    playing
                    loop
                    muted
                    width='100%'
                    height='100%'
                  />
                </Box>
              </TabPanel>
              <TabPanel>
                <Text>
                  This project was a client facing dashboard, showing various
                  analytics and charts for the merchant's payments.
                </Text>
                <Text my='4'>Built with Typescript/React, PHP, and MySQL.</Text>
                <Box pointerEvents='none' w='960px' h='540px'>
                  <ReactPlayer
                    url='https://www.youtube.com/watch?v=AmSI7wH-EmI'
                    playing
                    loop
                    muted
                    width='100%'
                    height='100%'
                  />
                </Box>
              </TabPanel>
              <TabPanel>
                <Text>
                  This was a custom, mobile-first checkout flow for MADD
                  (Mothers Against Drunk Driving) Canada to process donations
                  via scanning a QR code.
                </Text>
                <Text my='4'>Built with Typescript/React, PHP, and MySQL.</Text>
                <Box pointerEvents='none' w='960px' h='540px'>
                  <ReactPlayer
                    url='https://www.youtube.com/watch?v=eqNmZav-h3c'
                    playing
                    loop
                    muted
                    width='100%'
                    height='100%'
                  />
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Box>
    </>
  );
};

export default Projects;
