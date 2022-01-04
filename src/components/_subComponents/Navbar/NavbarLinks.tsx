import Link from 'next/link';
import { Box, Stack, HStack } from '@chakra-ui/react';

const NavbarLinks = ({ modeIsToggle = false }) => {
  return (
    <>
      {modeIsToggle ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <Link href='/#'>Página Inicial</Link>
            <Link href='/#about'>Sobre</Link>
            <Link href='/#details'>Detalhe</Link>
          </Stack>
        </Box>
      ) : (
        <HStack
          as={'nav'}
          spacing={4}
          display={{ base: 'none', md: 'flex' }}
          fontSize='lg'
        >
          <Link href='/#'>Página Inicial</Link>
          <Link href='/#about'>Sobre</Link>
          <Link href='/#details'>Detalhe</Link>
        </HStack>
      )}
    </>
  );
};

export default NavbarLinks;
