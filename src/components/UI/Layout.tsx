import Head from 'next/head';
import Navbar from '../Navbar';
import Footer from '../Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
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
      <div>{children}</div>
    </>
  );
};

export default Layout;
