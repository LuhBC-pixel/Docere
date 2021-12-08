import Image from 'next/image';
import Logo from '../assets/Docere-logo.png';

import {
  Box,
  Flex,
  HStack,
  IconButton,
  useDisclosure,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      px={90}
      mt={0}
      mb={6}
      width='100%'
      position='fixed'
      bgColor='white'
      zIndex='9999'
    >
      <Flex h={95} alignItems={'center'} justifyContent={'space-between'}>
        <Flex alignItems={'center'}>
          <Box>
            <Image src={Logo} width={100} height={100} />
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
            <a href='#contato'>Contato</a>
          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <a href='#'>Página Inicial</a>
            <a href='#about'>Sobre</a>
            <a href='#details'>Detalhe</a>
            <a href='#contato'>Contato</a>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
