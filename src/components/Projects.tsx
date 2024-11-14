import {
    Box,
    Container,
    Flex,
    Heading,
    Image,
    List,
    ListItem,
    ListIcon,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from '@chakra-ui/react';
import ReactPlayer from 'react-player';
import { MdCheckCircle } from 'react-icons/md';

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
    let x = 5;
    console.log(x);

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
                        color="gray.600">
                        Recent Projects
                    </Heading>
                    <Tabs>
                        <TabList>
                            <Tab {...tabProps}>GameOn Live</Tab>
                            <Tab {...tabProps}>Human Park</Tab>
                            <Tab {...tabProps}>Virtually Human Studios</Tab>
                            <Tab {...tabProps}>Creation Crate</Tab>
                            {/* <Tab {...tabProps}>Bitcoin Wallet</Tab> */}
                            <Tab {...tabProps} display={{ base: 'none', md: 'block' }}>
                                Cevnn
                            </Tab>
                            <Tab {...tabProps} display={{ base: 'none', md: 'block' }}>
                                Cevnn Dashboard
                            </Tab>
                        </TabList>

                        <TabPanels>
                            {/* GameOn Live */}
                            <TabPanel>
                                <Text>
                                    GameOn Live was a sports fantasy React Native mobile
                                    application partnered with the LaLiga soccer league.
                                    Users could select 4 players for an upcoming match,
                                    and receive points in real time based on the player's
                                    actions during the game. Features included:
                                    <List fontSize="15px" marginTop={2}>
                                        <ListItem>
                                            <ListIcon
                                                as={MdCheckCircle}
                                                color="green.500"
                                            />
                                            Real time events/scoring
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon
                                                as={MdCheckCircle}
                                                color="green.500"
                                            />
                                            Live chat
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon
                                                as={MdCheckCircle}
                                                color="green.500"
                                            />
                                            Leaderboards
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon
                                                as={MdCheckCircle}
                                                color="green.500"
                                            />
                                            Push notifications
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon
                                                as={MdCheckCircle}
                                                color="green.500"
                                            />
                                            In-app purchases
                                        </ListItem>
                                        <ListItem>
                                            <ListIcon
                                                as={MdCheckCircle}
                                                color="green.500"
                                            />
                                            App inbox notificiations
                                        </ListItem>
                                    </List>
                                </Text>
                                <Text my="4">
                                    {' '}
                                    Built using Typescript, React Native and Expo
                                </Text>
                                <Flex mb="8">
                                    {/* <Button
                                        as={Link}
                                        href="https://humanpark.io/"
                                        target="_blank"
                                        color="white"
                                        bg="blue.400"
                                        rightIcon={<ArrowForwardIcon />}
                                        _hover={{
                                            bg: 'blue.500',
                                            textDecoration: 'none',
                                        }}>
                                        See Live
                                    </Button> */}
                                </Flex>
                                <Box w={{ base: '100%', md: '960px' }} h="540px" mt="4">
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=knidWtHm66s"
                                        playing
                                        loop
                                        muted
                                        width="100%"
                                        height="100%"
                                        controls
                                    />
                                </Box>
                            </TabPanel>
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
                                    Built using Typescript/React, Next.js, Prisma, MySQL,
                                    Solidity, Hardhat and Ethers.js
                                </Text>
                                <Flex mb="8">
                                    {/* <Button
                                        as={Link}
                                        href="https://humanpark.io/"
                                        target="_blank"
                                        color="white"
                                        bg="blue.400"
                                        rightIcon={<ArrowForwardIcon />}
                                        _hover={{
                                            bg: 'blue.500',
                                            textDecoration: 'none',
                                        }}>
                                        See Live
                                    </Button> */}
                                </Flex>

                                <Box w={{ base: '100%', md: '960px' }} h="540px" mt="4">
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=8Co_-tK-qHg"
                                        playing
                                        loop
                                        muted
                                        width="100%"
                                        height="100%"
                                        controls
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
                                        Built using Typescript/React, Next.js, Prisma,
                                        MySQL, Solidity, Hardhat and Ethers.js
                                    </Text>
                                </Text>
                                <Flex mb="8">
                                    {/* <Button
                                        as={Link}
                                        href="https://www.vhslab.com/"
                                        target="_blank"
                                        color="white"
                                        bg="blue.400"
                                        rightIcon={<ArrowForwardIcon />}
                                        _hover={{
                                            bg: 'blue.500',
                                            textDecoration: 'none',
                                        }}>
                                        See Live
                                    </Button> */}
                                </Flex>

                                <Box w={{ base: '100%', md: '960px' }} h="540px">
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=LPUmOS2nTCM"
                                        playing
                                        loop
                                        muted
                                        width="100%"
                                        height="100%"
                                        controls
                                    />
                                </Box>
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
                                    Built using Typescript/React, Next.js, Node, GraphQL,
                                    Redis, Postgres, and Docker.
                                </Text>

                                <Box w={{ base: '100%', md: '960px' }} h="540px">
                                    <Image src="images/creation-crate.png" />
                                </Box>
                            </TabPanel>
                            {/* Bitcoin Wallet */}
                            {/* <TabPanel>
                                <Text>
                                    This was a side project to understand the basics of
                                    crypto wallets. It was built using bitcoin-core on a
                                    single regtest node.
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
                                        _hover={{
                                            bg: 'red.500',
                                            textDecoration: 'none',
                                        }}>
                                        Source Code
                                    </Button>
                                </Flex>

                                <Text
                                    display={{ base: 'block', md: 'none' }}
                                    fontStyle="italic"
                                    fontSize="20px">
                                    (View on desktop)
                                </Text>
                                <Box
                                    w="960px"
                                    h="540px"
                                    mt="4"
                                    display={{ base: 'none', md: 'block' }}>
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=-ubuIRqmbsI"
                                        playing
                                        loop
                                        muted
                                        width="100%"
                                        height="100%"
                                        controls
                                    />
                                </Box>
                            </TabPanel> */}

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
                                    Built using Javascript/React.
                                </Text>

                                <Box w="960px" h="540px" mt="4">
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=HwO5hh0Eygo"
                                        playing
                                        loop
                                        muted
                                        width="100%"
                                        height="100%"
                                        controls
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
                                    Built using Typescript/React, PHP, and MySQL.
                                </Text>

                                <Text
                                    display={{ base: 'block', md: 'none' }}
                                    fontStyle="italic"
                                    fontSize="20px">
                                    (View on desktop)
                                </Text>
                                <Box
                                    w="960px"
                                    h="540px"
                                    display={{ base: 'none', md: 'block' }}>
                                    <ReactPlayer
                                        url="https://www.youtube.com/watch?v=AmSI7wH-EmI"
                                        playing
                                        loop
                                        muted
                                        controls
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
