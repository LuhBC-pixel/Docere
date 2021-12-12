import loadable from '@loadable/component';
const HomeTitle = loadable(() => import('../components/Home/HomeTitle'));
const HomeImage = loadable(() => import('../components/Home/HomeImage'));

import { Container, Stack } from '@chakra-ui/react';

const Index = () => {
  return (
    <Container maxW={'7xl'} id='#'>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <HomeTitle />
        <HomeImage />
      </Stack>
    </Container>
  );
};

export default Index;
