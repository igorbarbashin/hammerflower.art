import { globalStyles } from '../lib/globalStyles';
import Head from 'next/head';

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="crossorigin"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Philosopher:wght@500&display=swap"
        rel="stylesheet"
      />
    </Head>
    {globalStyles}
    <Component {...pageProps} />
  </>
);

export default App;
