import { Box } from '@chakra-ui/react';
import About from './components/About';
import Intro from './components/Intro';
import SocialsVert from './components/SocialsVert';

function App() {
  return (
    <>
      <Intro />
      <SocialsVert />
      <About />
      <Box as='section' h='400px'></Box>
    </>
  );
}

export default App;
