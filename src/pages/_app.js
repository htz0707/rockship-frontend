import Head from 'next/head';
import '@/styles/global.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/rockship-symbol.svg" />
        <title>Rockship</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;