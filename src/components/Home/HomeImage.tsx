import React from 'react';
import loadable from '@loadable/component';
const Image = loadable(() => import('next/image'));
import { Flex, Box } from '@chakra-ui/react';

import Teacher from '../../assets/MenTeacher.png';

const HomeImage: React.FC = () => {
  return (
    <Flex
      flex={1}
      justify={'center'}
      align={'center'}
      position={'relative'}
      w={'full'}
    >
      <Box
        position={'relative'}
        rounded={'2xl'}
        boxShadow={'2xl'}
        width={'full'}
        overflow={'hidden'}
        zIndex={10}
      >
        <Image src={Teacher} alt='Desenho de um professor dentro de um vídeo' />
      </Box>
    </Flex>
  );
};

export default HomeImage;
