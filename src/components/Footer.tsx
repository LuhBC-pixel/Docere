import dynamic from 'next/dynamic';
import Logo from "../assets/Docere-logo.png"

import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const FooterIcons = dynamic(() => import('./_subComponents/Footer/FooterIcons'));
const Image = dynamic(() => import('next/image'));

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >


      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text>© 2021 Luisa Boina Coltro. Todos os direitos reservados</Text>
          <FooterIcons />
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
