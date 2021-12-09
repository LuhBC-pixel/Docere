import type { NextPage } from 'next';
import Home from './_Home';
import About from './_About';
import Details from './_Details';

const Index: NextPage = () => {
  return (
    <>
      <Home />
      <About />
      <Details />
  
    </>
  );
};

export default Index;
