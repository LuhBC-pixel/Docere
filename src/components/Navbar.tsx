import loadable from '@loadable/component';
const NavbarLinks = loadable(() => import('../components/Navbar/NavbarLinks'));
const NavbarIcons = loadable(() => import('../components/Navbar/NavbarIcons'));
const NavbarImage = loadable(() => import('../components/Navbar/NavbarImage'));

import { Box, Flex, useDisclosure, useColorModeValue } from '@chakra-ui/react';

const Navbar = () => {
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
      <Flex maxH={85} alignItems={'center'} justifyContent={'space-between'}>
        <NavbarImage />
        <NavbarIcons isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </Flex>

      {isOpen ? <NavbarLinks modeIsToggle /> : null}
    </Box>
  );
};

export default Navbar;
