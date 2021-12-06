import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Main from '../components/Main';
import { Box } from '@chakra-ui/react';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Chama Prof.</title>
        <meta name='description' content='Chama Prof.' />
        <link
          rel='shortcut icon'
          href='/ChamaProf-logo.png'
          type='image/x-icon'
        />
      </Head>
      <Navbar />
      <Box backgroundColor='blue'>
        <Main />
      </Box>
    </>
  );
};

export default Home;
