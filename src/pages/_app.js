import Head from 'next/head';
import Script from 'next/script'
import '@/styles/global.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head> 
        
        <link rel="icon" href="/rockship-symbol.svg" id = "light-fav-icon"/>
         <title>Rockship | AI-Powered Software Development</title>
 
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
