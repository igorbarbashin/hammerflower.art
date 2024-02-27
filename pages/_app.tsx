import { globalStyles } from "../lib/globalStyles";
import Head from "next/head";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Script from "next/script";
import * as gtag from "../lib/gtag";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>HammerFlower</title>

        <meta
          property="og:image"
          content="/images/hammerflower-thumbnail.jpg"
        />
        <meta property="og:image:width" content="2000" />
        <meta property="og:image:height" content="1386" />
        <meta property="og:image:alt" content="Hammerflower logo" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta
          property="og:image:secure_url"
          content="/images/hammerflower-thumbnail.jpg"
        />
        <meta
          property="og:image:url"
          content="/images/hammerflower-thumbnail.jpg"
        />

        <meta property="og:title" content="HammerFlower" />
        <meta
          property="og:description"
          content="Discover the art of hammerflower with our engaging tutorials and workshops. Explore the beauty of botanicals through our unique flower hammering techniques."
        />

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Discover the art of hammerflower with our engaging tutorials and workshops. Explore the beauty of botanicals through our unique flower hammering techniques."
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${gtag.GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#9f00a7" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      {globalStyles}
      <Component {...pageProps} />

      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Philosopher&display=swap"
        rel="stylesheet"
      />
    </>
  );
};

export default App;
