import { useEffect } from "react";
import Head from "next/head";
import Script from "next/script";
import * as amplitude from "@amplitude/analytics-browser";

import "@/styles/common/global.scss";
import { StoreProvider } from "@/context/StoreContext";

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    amplitude.init(process.env.NEXT_APP_API_AMPLITUDE_KEY);
  }, []);

  return (
    <>
      <Head>
        <meta property="og:image" content="/rs_fb_thumb.png" />
        <meta
          name="description"
          content="Rockship embed many AI solutions in our development process
to help you build software faster with higher quality."
        />
        <link rel="icon" href="/rockship-symbol.svg" id="light-fav-icon" />
        <title>Rockship | AI-Powered Software Development</title>
      </Head>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>

      <Script
        id="hs-script-loader"
        src="//js.hs-scripts.com/40126632.js"
      ></Script>
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
