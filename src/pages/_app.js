import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import * as amplitude from "@amplitude/analytics-browser";

import "@/styles/global.css";
import { StoreProvider } from "@/context/StoreContext";

const MyApp = ({ Component, pageProps }) => {

  useEffect(() => {
    amplitude.init(process.env.API_AMPLITUDE_KEY);
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/rockship-symbol.svg" id="light-fav-icon" />
        <title>Rockship | AI-Powered Software Development</title>
      </Head>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-80RZQ4Q2TE" />
      <Script id="google-analytics">
        {`
	          window.dataLayer = window.dataLayer || [];
	          function gtag(){dataLayer.push(arguments);}
	          gtag('js', new Date());
	          gtag('config', 'G-80RZQ4Q2TE');
	        `}
      </Script>
    </>
  );
};

export default MyApp;
