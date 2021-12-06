import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Main from '../components/Hero/Main'

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

      <Main />
    </>
  );
};

export default Home;
