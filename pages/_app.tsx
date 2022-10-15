import '../styles/index.scss';
import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../src/graphql/apollo-client';

const App = ({ Component, pageProps }: AppProps) =>
  <ApolloProvider client={apolloClient}>
    <Component {...pageProps} />
  </ ApolloProvider>

export default App;
