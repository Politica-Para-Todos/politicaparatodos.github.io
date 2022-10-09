import { ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: '',
  cache: new InMemoryCache()
});

// TODO - Abstract this to a service to be initialized on nextjs startup and exported to be used whenever needed
export default apolloClient;
