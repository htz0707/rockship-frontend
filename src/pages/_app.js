import { useEffect } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import * as amplitude from '@amplitude/analytics-browser';

import '@/styles/common/global.scss';
import { StoreProvider } from '@/context/StoreContext';
const GTM_ID = 'GTM-WZFWGP42';
const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    amplitude.init(process.env.NEXT_APP_API_AMPLITUDE_KEY);
  }, []);

  return (
    <>
      <Head>
        {pageProps.overwriteMetaTag !== true && (
          <meta property="og:image" content="/rs_fb_thumb.png" />
        )}
        <meta
          name="description"
          content="Rockship embed many AI solutions in our development process
to help you build software faster with higher quality."
        />
        <link rel="icon" href="/rockship-symbol.svg" id="light-fav-icon" />
        <title>Rockship | AI-Powered Software Development</title>
      </Head>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
      </Script>

      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}" height="0" width="0" style="display: none; visibility: hidden;"></iframe>`,
        }}
      />
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-80RZQ4Q2TE"></Script>
<Script>{`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-80RZQ4Q2TE');
  `}
</Script>
      {/* <Script
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
      </Script> */}
    </>
  );
};

export default MyApp;
