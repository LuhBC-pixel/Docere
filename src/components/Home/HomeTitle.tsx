import { Heading, Text, Stack } from '@chakra-ui/react';

import styles from './Home.module.css';

const HomeTitle = () => {
  return (
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
          Docere
        </Text>
        <br />
        <Text as={'span'} color={'red.400'}>
          para quando precisar!
        </Text>
      </Heading>
      <Text color={'gray.500'} fontSize='2xl'>
        Necessita de ajuda para entender <p className={styles.phrase}></p>?
        <br />
        Acessa o Docere. É de graça!
      </Text>
    </Stack>
  );
};

export default HomeTitle;
