import Image from 'next/image';
import Link from 'next/link';
import Logo from '../assets/ChamaProf-logo.png';

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
    <Box px={90} mt={4} mb={6}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
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
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }} fontSize='lg'>
            <Link href='/'>Página Inicial</Link>
            <Link href='/sobre'>Sobre</Link>
            <Link href='/contato'>Contato</Link>
          </HStack>
        </HStack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <Link href='/'>Página Inicial</Link>
            <Link href='/sobre'>Sobre</Link>
            <Link href='/contato'>Contato</Link>
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
