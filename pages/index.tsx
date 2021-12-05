import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar  from '../components/Navbar';

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
    </>
  );
};

export default Home;
