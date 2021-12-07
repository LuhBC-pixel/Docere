import type { NextPage } from 'next';
import Image from 'next/image';
import { Container, Stack, Flex, Box, Heading, Text } from '@chakra-ui/react';

import styles from './index.module.css';
import Teacher from '../assets/MenTeacher.jpg';

const Home: NextPage = () => {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
          >
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: '30%',
                position: 'absolute',
                bottom: 1,
                left: 0,
                bg: 'red.400',
                zIndex: -1,
              }}
            >
              Chama Prof.
            </Text>
            <br />
            <Text as={'span'} color={'red.400'}>
              para quando precisar!
            </Text>
          </Heading>
          <Text color={'gray.500'} fontSize='2xl'>
            Necessita de ajuda para entender <p className={styles.phrase}></p>?
            <br />
            Acessa o Chama Prof. É de graça!
          </Text>
        </Stack>
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
            <Image
              src={Teacher}
              alt='Desenho de um professor dentro de um vídeo'
            />
          </Box>
        </Flex>
      </Stack>
    </Container>
  );
};

export default Home;
