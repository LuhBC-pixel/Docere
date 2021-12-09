import { Box, Stack, HStack } from '@chakra-ui/react';

const NavbarLinks = ({ modeIsToggle = false }) => {
  return (
    <>
      {modeIsToggle ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            <a href='#'>Página Inicial</a>
            <a href='#about'>Sobre</a>
            <a href='#details'>Detalhe</a>
          </Stack>
        </Box>
      ) : (
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
      )}
    </>
  );
};

export default NavbarLinks;
