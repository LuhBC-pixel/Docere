import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Head from 'next/head';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
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
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
