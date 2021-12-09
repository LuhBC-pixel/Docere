import Image from 'next/image';
import {
  Box,
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaDev, FaGithub, FaLinkedin } from 'react-icons/fa';
import FooterSocialButton from './Footer/FooterSocialButton';
import Logo from '../assets/Docere-logo.png';

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Image src={Logo} width={50} height={50} />
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>Página Inicial</Link>
          <Link href={'#about'}>Sobre</Link>
          <Link href={'#details'}>Detalhe</Link>
        </Stack>
      </Container>

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
          <Stack direction={'row'} spacing={6}>
            <FooterSocialButton
              label={'Github'}
              href={'https://github.com/LuhBC-pixel'}
            >
              <FaGithub />
            </FooterSocialButton>
            <FooterSocialButton
              label={'Linkedin'}
              href={'https://www.linkedin.com/in/luisa-boina-02294014b/'}
            >
              <FaLinkedin />
            </FooterSocialButton>
            <FooterSocialButton
              label={'Site Portofólio'}
              href={'https://meu-site-drab.vercel.app/'}
            >
              <FaDev />
            </FooterSocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
