import loadable from '@loadable/component';
const Image = loadable(() => import('next/image'));
import Logo from '../../assets/Docere-logo.png';

import { Flex, Box } from '@chakra-ui/react';

const NavbarImage = () => {
  return (
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
  );
};

export default NavbarImage;
