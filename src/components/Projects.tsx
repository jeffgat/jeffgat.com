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
    Text,
} from '@chakra-ui/react';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import ReactPlayer from 'react-player';

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
            <Box as="section" h="900px" mt="200px">
                <Container maxW="120ch">
                    <Heading
                        variant="h2"
                        fontSize="40px"
                        fontWeight="700"
                        textTransform="uppercase"
                        mb="12"
                        color="gray.600"
                    >
                        Recent Projects
                    </Heading>
                    <Tabs>
                        <TabList>
                            <Tab {...tabProps}>Human Park</Tab>
                            <Tab {...tabProps} display={{ base: 'none', md: 'block' }}>
                                Virtually Human Studios
                            </Tab>
                            <Tab {...tabProps}>Creation Crate</Tab>
                            <Tab {...tabProps}>Bitcoin Wallet</Tab>
                            <Tab {...tabProps} display={{ base: 'none', md: 'block' }}>
                                Cevnn
                            </Tab>
                            <Tab {...tabProps}>Cevnn Dashboard</Tab>
                        </TabList>

                        <TabPanels>
                            {/* Human Park */}
                            <TabPanel>
                                <Text>
                                    Human Park is a web3 AAA game in development under
                                    Virtually Human Studios. This was our first website
                                    design that was more than an email opt-in landing
                                    page. We wanted to have that high-fidelity look that
                                    other video games such as Fornite or League of Legends
                                    have. I was the sole front-end developer on this
                                    project.
                                </Text>
                                <Text my="4">
                                    {' '}
                                    Built with Typescript/React, Next.js, Prisma, MySQL,
                                    Solidity, Hardhat and Ethers.js
                                </Text>
                                <Flex mb="8">
                                    <Button
                                        as={Link}
                                        href="https://humanpark.io/"
                                        target="_blank"
                                        color="white"
                                        bg="blue.400"
                                        rightIcon={<ArrowForwardIcon />}
                                        _hover={{
                                            bg: 'blue.500',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        See Live
                                    </Button>
                                </Flex>
                                <Text
                                    display={{ base: 'block', md: 'none' }}
                                    fontStyle="italic"
                                    fontSize="20px"
                                >
                                    (View preview on desktop)
                                </Text>
                                <Box pointerEvents="none" w="960px" h="540px" mt="4" display={{ base: 'none', md: 'block' }}>
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=8Co_-tK-qHg"
                                        playing
                                        loop
                                        muted
                                        width="100%"
                                        height="100%"
                                    />
                                </Box>
                            </TabPanel>

                            {/* Virtually Human Studios */}
                            <TabPanel>
                                <Text>
                                    Virtually Human Studios is the studio that created ZED
                                    RUN, an NFT digital horse racing platform. One of the
                                    earlier P2E projects that made a big splash. This
                                    website redesigned had a single carousel as the entire
                                    website. Something interesting we did was implement
                                    minting NFT drops directly on some of the slides on
                                    have. I was the sole front-end developer on this
                                    project. this website, working with our blockchain
                                    engineer to implement the contracts.
                                </Text>
                                <Text mt="4">
                                    <Text my="4">
                                        {' '}
                                        Built with Typescript/React, Next.js, Prisma,
                                        MySQL, Solidity, Hardhat and Ethers.js
                                    </Text>
                                </Text>
                                <Flex mb="8">
                                    <Button
                                        as={Link}
                                        href="https://www.vhslab.com/"
                                        target="_blank"
                                        color="white"
                                        bg="blue.400"
                                        rightIcon={<ArrowForwardIcon />}
                                        _hover={{
                                            bg: 'blue.500',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        See Live
                                    </Button>
                                </Flex>
                                
                                <Box pointerEvents="none" w="960px" h="540px">
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=LPUmOS2nTCM"
                                        playing
                                        loop
                                        muted
                                        width="100%"
                                        height="100%"
                                    />
                                </Box>
                                <Text
                                    display={{ base: 'block', md: 'none' }}
                                    fontStyle="italic"
                                    fontSize="20px"
                                >
                                    (View preview on desktop)
                                </Text>
                            </TabPanel>
                            {/* Creation Crate */}
                            <TabPanel>
                                <Text>
                                    Creation Crate is a subscription box service that
                                    combines hands-on learning with online lessons. This
                                    project is a custom built e-commerce solution built
                                    from scratch. It integrates with multiple platforms
                                    and APIs, managing things like recurring payments,
                                    shipping, inventory, and accounts. I designed and
                                    developed this as the sole developer at the company.
                                </Text>
                                <Text my="4">
                                    Built with Typescript/React, Next.js, Node, GraphQL,
                                    Redis, Postgres, and Docker.
                                </Text>

                                <Flex mb="8">
                                    <Button
                                        as={Link}
                                        href="https://www.creationcrate.com/"
                                        target="_blank"
                                        color="white"
                                        bg="blue.400"
                                        rightIcon={<ArrowForwardIcon />}
                                        _hover={{
                                            bg: 'blue.500',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        See Live
                                    </Button>
                                </Flex>

                                <Text
                                    display={{ base: 'block', md: 'none' }}
                                    fontStyle="italic"
                                    fontSize="20px"
                                >
                                    (View preview on desktop)
                                </Text>
                                <Box
                                    w="960px"
                                    h="540px"
                                    display={{ base: 'none', md: 'block' }}
                                >
                                    <Image src="images/creation-crate.png" />
                                </Box>
                            </TabPanel>
                            {/* Bitcoin Wallet */}
                            <TabPanel>
                                <Text>
                                    This was a side project to understand the basics of
                                    crypto wallets. You can sign up with your email,
                                    connect your bank account via Plaid: Select Chase
                                    bank, username: "user_good", pass: "pass_good" (Test
                                    Credentials). And then you can purchase test bitcoin
                                    via a bitcoin regtest node running in a docker
                                    container.
                                </Text>
                                <Text my="4">
                                    Built with Javascript/React, Node, GraphQL, Redis,
                                    Postgres, and Docker.
                                </Text>

                                <Flex mb="8">
                                    <Button
                                        as={Link}
                                        href="https://github.com/jeffgat/quantum-wallet"
                                        target="_blank"
                                        color="white"
                                        bg="red.400"
                                        rightIcon={<FaGithub />}
                                        _hover={{ bg: 'red.500', textDecoration: 'none' }}
                                    >
                                        Source Code
                                    </Button>
                                    <Button
                                        as={Link}
                                        href="https://exodus-client.vercel.app/"
                                        target="_blank"
                                        color="white"
                                        bg="blue.400"
                                        rightIcon={<ArrowForwardIcon />}
                                        ml="4"
                                        _hover={{
                                            bg: 'blue.500',
                                            textDecoration: 'none',
                                        }}
                                    >
                                        See Live
                                    </Button>
                                </Flex>

                                <Text
                                    display={{ base: 'block', md: 'none' }}
                                    fontStyle="italic"
                                    fontSize="20px"
                                >
                                    (View on desktop)
                                </Text>
                                <Box pointerEvents="none" w="960px" h="540px" mt="4" display={{ base: 'none', md: 'block' }}>
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=-ubuIRqmbsI"
                                        playing
                                        loop
                                        muted
                                        width="100%"
                                        height="100%"
                                    />
                                </Box>
                            </TabPanel>

                            {/* Cevnn */}
                            <TabPanel>
                                <Text>
                                    Cevnn Payments was a fintech startup that works in the
                                    Canadian payment processing space. The goal here was
                                    to design and create a static website that gave us
                                    that modern fintech look, while telling people what we
                                    do.
                                </Text>
                                <Text mt="4" mb="8">
                                    Built with Javascript/React.
                                </Text>

                                <Box pointerEvents="none" w="960px" h="540px" mt="4">
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=HwO5hh0Eygo"
                                        playing
                                        loop
                                        muted
                                        width="100%"
                                        height="100%"
                                    />
                                </Box>
                            </TabPanel>
                            {/* Cevnn Dashboard */}
                            <TabPanel>
                                <Text>
                                    This project was a client facing dashboard, showing
                                    various analytics and charts for the merchant's
                                    payments.
                                </Text>
                                <Text mt="4" mb="8">
                                    Built with Typescript/React, PHP, and MySQL.
                                </Text>

                                <Text
                                    display={{ base: 'block', md: 'none' }}
                                    fontStyle="italic"
                                    fontSize="20px"
                                >
                                    (View on desktop)
                                </Text>
                                <Box
                                    pointerEvents="none"
                                    w="960px"
                                    h="540px"
                                    display={{ base: 'none', md: 'block' }}
                                >
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=AmSI7wH-EmI"
                                        playing
                                        loop
                                        muted
                                        width="100%"
                                        height="100%"
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
