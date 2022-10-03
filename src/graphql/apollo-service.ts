import { ApolloClient, InMemoryCache } from '@apollo/client';

const LOCALHOST = 'http://localhost:9000/graphql';

const apolloClient = new ApolloClient({
  uri: LOCALHOST,
  cache: new InMemoryCache()
});

// TODO - Abstract this to a service to be initialized on nextjs startup and exported to be used whenever needed
export default apolloClient;
