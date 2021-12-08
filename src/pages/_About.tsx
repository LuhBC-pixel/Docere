import Image from 'next/image';
import { Box, Heading, Container } from '@chakra-ui/react';
import AboutText from '../components/AboutText';

import Learning from '../assets/MotherAndKindLearning.jpeg';

const About = () => {
  return (
    <Container maxW={'7xl'} p='12' id='about'>
      <Heading as='h1'>Sobre Docere</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display='flex'
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent='space-between'
      >
        <Box
          display='flex'
          flex='1'
          marginRight='3'
          position='relative'
          alignItems='center'
        >
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex='2'
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop='5%'
          >
            <Image
              src={Learning}
              alt='Uma mãe ensinando a sua filha sobre astrologia'
            />
          </Box>
        </Box>
        <AboutText />
      </Box>
    </Container>
  );
};

export default About;
