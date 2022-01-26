import {
  Box,
  Container,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from '@chakra-ui/react';
import React from 'react';

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
            textAlign='center'
            mb='12'
          >
            Projects
          </Heading>
          <Tabs>
            <TabList>
              <Tab {...tabProps}>Cevnn</Tab>
              <Tab {...tabProps}>Cevnn Dashboard</Tab>
              <Tab {...tabProps}>MADD Donation</Tab>
              <Tab {...tabProps}>Creation Crate</Tab>
              <Tab {...tabProps}>NFT Minter</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
              <TabPanel>
                <p>two!</p>
              </TabPanel>
              <TabPanel>
                <p>three!</p>
              </TabPanel>
              <TabPanel>
                <p>four!</p>
              </TabPanel>
              <TabPanel>
                <p>five!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Container>
      </Box>
    </>
  );
};

export default Projects;
