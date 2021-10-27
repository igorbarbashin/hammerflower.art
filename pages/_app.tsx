import { globalStyles } from '../lib/globalStyles';

const App = ({ Component, pageProps }) => (
  <>
    {globalStyles}
    <Component {...pageProps} />
  </>
);

export default App;
