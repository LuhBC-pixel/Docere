import type { NextPage } from 'next';
import Index from './index/Index';
import Sobre from './Sobre';

const Home: NextPage = () => {
  return (
    <>
      <Index />
      <Sobre />
    </>
  );
};

export default Home;
