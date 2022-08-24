import '../styles/index.scss';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps}: AppProps) => {

  if (typeof window === 'undefined') {
    return <></>
  }
  return <Component {...pageProps} />
}

export default MyApp;
