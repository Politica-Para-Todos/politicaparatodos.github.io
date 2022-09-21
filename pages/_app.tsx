import '../styles/index.scss';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps}: AppProps) => {

  // if (typeof window === 'undefined') {
  //   return <></>
  // }
  return <Component {...pageProps} />
}

export default App;
