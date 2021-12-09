import Image from 'next/image';
import Logo from '../assets/Docere-logo.png';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
  useColorMode,
  Button,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      px={90}
      mt={0}
      mb={6}
      width='100%'
      position='fixed'
      bgColor={useColorModeValue('white', 'gray.900')}
      zIndex='9999'
    >
      <Flex h={95} alignItems={'center'} justifyContent={'space-between'}>
        <Flex alignItems={'center'}>
          <Box>
            <Image
              src={Logo}
              width={100}
              height={100}
              alt='Docere logo, possui um farol e embaixo tem o nome Docere
              '
            />
          </Box>
        </Flex>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={'center'}>
          <HStack
            as={'nav'}
            spacing={4}
            display={{ base: 'none', md: 'flex' }}
            fontSize='lg'
          >
            <a href='#'>Página Inicial</a>
            <a href='#about'>Sobre</a>
            <a href='#details'>Detalhe</a>
          </HStack>
          <Stack direction={'row'} spacing={7}>
            <Button
              onClick={toggleColorMode}
              aria-label='botão que faz o site mudar de cor'
            >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <a href='#'>Página Inicial</a>
            <a href='#about'>Sobre</a>
            <a href='#details'>Detalhe</a>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
